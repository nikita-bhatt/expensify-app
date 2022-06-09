import {createStore} from 'redux';
const increementCount = ({incrementBy = 1} = {}) =>({
    type: 'INCREEMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREEMENT',
    decrementBy
}
);

const setCount = ({count}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});
const store = createStore((state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREEMENT':
            return {
                count: state.count + action.incrementBy
    
            };
        case 'DECREEMENT':
            return{
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return{
                count: 0
            }
        case 'SET':
            return{
                count: action.count
            }
        default:
            return state;
    }   
}
);
store.subscribe(() => {
    console.log(store.getState());
}

);

// store.dispatch(
//     {
//         type: 'INCREEMENT',
//         incrementBy: 5
//     }
// );
store.dispatch(increementCount({incrementBy : 5}));
store.dispatch(increementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(decrementCount());
store.dispatch(setCount({count: 101}));
