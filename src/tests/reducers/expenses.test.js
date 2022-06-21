import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
test('should set default state', () => {
    const state = expenseReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-2'
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Electricity Bill',
        note: '',
        createdAt: 2000,
        amount: 400 
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expenseReducer(expenses, action);
    expect(state). toEqual([ ...expenses,expense])
});

test('should edit expense by id', () => {
    const amount = 22000
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const state = expenseReducer(expenses,action);
    expect(state[1].amount). toBe(amount);
})


test('should not edit expense if id not found', () => {
    const amount = 100
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-4',
        updates: {
            amount
        }
    };
    const state = expenseReducer(expenses,action);
    expect(state). toEqual(expenses);
})