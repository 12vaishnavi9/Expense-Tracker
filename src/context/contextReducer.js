//Reducer is a function that takes in the old state, and an action and returns a new state.
//Action specifies how we have to change the old state----> addTransaction & deleteTransaction.
//Action is just a plain object that takes two things:-1. type 2. payload:-some additional data that we have to pass along with action.

//contains logic for deleting transaction:-
const contextReducer=(state,action)=>{
    let transactions;

    switch (action.type) {
      case 'DELETE_TRANSACTION':
        transactions = state.filter((transaction) => transaction.id !== action.payload);
        localStorage.setItem('transactions', JSON.stringify(transactions));
        return transactions;

      case 'ADD_TRANSACTION':
        transactions = [action.payload, ...state];
        localStorage.setItem('transactions', JSON.stringify(transactions));
        return transactions;
        
      default:
        return state;
    }

}

export default contextReducer;