import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses'

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 1000}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 5000, createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 45000}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);
const jsx = (
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
    
);

ReactDOM.render(jsx,document.getElementById('app'));
