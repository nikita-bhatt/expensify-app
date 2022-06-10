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

const editExpense = (id,updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter =(text = '') => (
{
    type: 'SET_TEXT_FILTER',
    text

});

const sortByAmount = () => (
    {
        type: 'SORT_BY_AMOUNT'
    }
);
const sortByDate = () => (
    {
        type: 'SORT_BY_DATE'
    }
);
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate

});
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate

});


//Expense Reducer
const expenseReducerDefaultState = [];
const expensesReducer = (state= expenseReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state,action.expense];  //spread operator
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id!== action.id);
        case 'EDIT_EXPENSE':
           return state.map((expense) => {
               if(action.id === expense.id){
                   return {
                    ...expense,
                    ...action.updates
                   };
               }
               else{
                   return expense;
               }
           }

           );

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
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
            case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }

        default:
            return state;
            
    }

};

//visibleExpenses
const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate != 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate != 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch

    })

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
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});    
const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description: 'Tea', amount: 600, createdAt: -1000}));
// store.dispatch(removeExpense({id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 300}));
store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
store.dispatch(setStartDate(123));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(129));
// store.dispatch(setEndDate());

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

