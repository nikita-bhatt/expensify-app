import {createStore} from 'redux';
const store = createStore((state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREEMENT':
            const incrementBy = typeof action.incrementBy ==="number"? action.incrementBy:1
            return {
                count: state.count + incrementBy
    
            };
        case 'DECREEMENT':
            const decrementBy = typeof action.decrementBy ==="number"?action.decrementBy:1
            return{
                count: state.count - decrementBy
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

store.dispatch(
    {
        type: 'INCREEMENT',
        incrementBy: 5
    }
);
store.dispatch(
    {
        type: 'DECREEMENT'
    }
);
store.dispatch(
    {
        type: 'DECREEMENT'
    }
);

store.dispatch(
    {
        type: 'RESET'
    }
);
store.dispatch(
    {
        type: 'DECREEMENT',
        decrementBy: 10

    }
);
store.dispatch(
    {
        type: 'SET',
        count: 101

    }
);
