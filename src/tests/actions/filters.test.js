import moment from 'moment';
import {setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter} from '../../actions/filters';

test('should generate set Start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set End date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });

});

test('should generate sort By amount action object', () => {
    const action = sortByAmount();
    expect(action). toEqual({
        type: 'SORT_BY_AMOUNT'
    });
})

test('should generate sort By date action object', () => {
    const action = sortByDate();
    expect(action). toEqual({
        type: 'SORT_BY_DATE'
    });
})

test('should generate set text filter action object with text value', () => {
    const action = setTextFilter('abnj');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'abnj'
    });

});
test('should generate set text filter action object with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });

});
