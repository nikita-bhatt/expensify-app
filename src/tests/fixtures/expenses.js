import moment from 'moment';

export default [{
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