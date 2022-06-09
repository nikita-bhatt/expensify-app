import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';

//Action Generator
const addExpense = (
    {
        description = '',
        amount = 0,
        note = '',
        createdAt = 0
    }={}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//Expense Reducer
const expenseReducerDefaultState = [];
const expensesReducer = (state= expenseReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state,action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id!== action.id);
        default:
            return state;
    }

};

//Filters Reducer
const filterReducerDefaultState = {
            text: '',
            sortBy: 'date',
            startDate: undefined,
            endDate: undefined
};
const filterReducer = (state= filterReducerDefaultState,action) => {
    switch(action.type){
        default:
            return state;
            
    }

};

//Store
const store = createStore(
    combineReducers(
        {
            expenses: expensesReducer,
            filters: filterReducer
        }
    )
    );
//Subscribe
store.subscribe(() => {
    console.log(store.getState());
});    
const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({description: 'Tea', amount: 600}));
store.dispatch(removeExpense({id: expenseOne.expense.id }));

const demoState = {
    expenses : [{
        id: 'gfsh',
        description: ' June Rent',
        amount: 3462,
        note: 'This is last rent here',
        createdAt: 0

    }],
    filter : {
        text: 'rent',
        sortBy: 'amount',//date or amount
        startDate: undefined,
        endDate: undefined
    }
};