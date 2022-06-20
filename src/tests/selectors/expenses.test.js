import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [{
    id: '1',
    description: 'gum',
    note: '',
    createdAt: 0,
    amount: 123
    
},{
    id: '2',
    description: 'rent',
    note: '',
    createdAt: moment(0).subtract(4,'days').valueOf(),
    amount: 12300
    
},{
    id: '3',
    description: 'Credit Card',
    note: '',
    createdAt: moment(0).add(4,'days').valueOf(),
    amount: 4500
    
}
]

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const results = selectExpenses(expenses,filters);
    expect(results).toEqual([expenses[2],expenses[1]]);

});

test('should filter by start Date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const results = selectExpenses(expenses,filters);
    expect(results).toEqual([expenses[2],expenses[0]]);

});

test('should filter by end Date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const results = selectExpenses(expenses,filters);
    expect(results).toEqual([expenses[0],expenses[1]]);
});

test('should sort by Date', () => {
    const filters ={
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const results = selectExpenses(expenses,filters);
    expect(results).toEqual([expenses[2],expenses[0],expenses[1]])

});

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const results = selectExpenses(expenses,filters);
    expect(results).toEqual([expenses[1],expenses[2],expenses[0]]);

});