import React from 'react';
import {shallow} from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
test('should render ExpenseSummary correctly with 1 Expense',() => {
    const wrapper = shallow(<ExpensesSummary expenseCount = {1} expensesTotal = {235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary correctly with multiple Expenses',() => {
    const wrapper = shallow(<ExpensesSummary expenseCount = {23} expensesTotal = {235978948978} />);
    expect(wrapper).toMatchSnapshot();
});