import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from'../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
test('should render Expense Form correctly', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();

});

test('should render Expense form correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});