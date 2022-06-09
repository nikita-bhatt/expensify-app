import {createStore,combineReducers} from 'redux';

const expenseReducerDefaultState = [];
const expensesReducer = (state= expenseReducerDefaultState, action) => {
    switch(action.type){
        default:
            return state;
    }

};

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
const store = createStore(
    combineReducers(
        {
            expenses: expensesReducer,
            filters: filterReducer
        }
    )
    );
console.log(store.getState());
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