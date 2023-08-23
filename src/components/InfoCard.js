import React from 'react';
//gives 0 fifty percent to time and zero 50% of times
const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div elevation={3} style={{ textAlign: 'center', padding: '0 10%' ,fontSize:'14px'}}>
      Try saying: <br /> 
      Add {isIncome ? 'Income ' : 'Expense '} 
      for {isIncome ? '100 ' : '50 '}  
      in Category {isIncome ? 'Salary ' : 'Travel '}
      for {isIncome ? 'Monday ' : 'Thursday '}
    </div>
  );
};

export default InfoCard;
