import {createStore} from 'redux';
const store = createStore((state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREEMENT':
            return {
                count: state.count + 1
    
            };
        case 'DECREEMENT':
            return{
                count: state.count - 1
            };
        case 'RESET':
            return{
                count: 0
            }
        default:
            return state;
    }   
}
);
console.log(store.getState());
store.dispatch(
    {
        type: 'INCREEMENT'
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

console.log(store.getState());
store.dispatch(
    {
        type: 'RESET'
    }
);
console.log(store.getState());