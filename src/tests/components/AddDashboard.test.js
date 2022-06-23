import React from 'react';
import {shallow} from 'enzyme';
import {AddDashboardPage} from '../../components/AddDashboard';
import expenses from '../fixtures/expenses';

let onSubmit, history, wrapper;
beforeEach(() => {
    onSubmit = jest.fn(); //spy
    history = {push: jest.fn()};
    wrapper = shallow(<AddDashboardPage onSubmit= {onSubmit} history= {history}/>);

})

test('should render Add Expense dashboard page correctly', () => {  
    expect(wrapper).toMatchSnapshot();
});

test('should handle on Submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
});