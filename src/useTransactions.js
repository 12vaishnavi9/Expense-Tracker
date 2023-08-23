//All logic for transactions , totals
//acc:- accumulator (using reduce so that no need to create an extra variable),0:- initial value

import { useContext } from 'react';
import { ExpenseTrackerContext } from './context/Context';

import { incomeCategories,expenseCategories,resetCategories } from './constants/Categories';

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const rightTransactions = transactions.filter((t) => t.type === title);
  const total = rightTransactions.reduce((acc, currVal) => acc += currVal.amount, 0);
  const categories = title === 'Income' ? incomeCategories : expenseCategories;

//whatever value/amount we will enter will get added in category's amount
  rightTransactions.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((sc) => sc.amount > 0);//to work on chart

  const chartData = {
    labels: filteredCategories.map((c) => c.type),
    datasets: [{
      data: filteredCategories.map((c) => c.amount),
      backgroundColor: filteredCategories.map((c) => c.color),
    }]
  };

  return { filteredCategories,total, chartData };
};

export default useTransactions;
//go in details.js