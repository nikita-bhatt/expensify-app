import React from 'react';
import { connect } from "react-redux";
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';

export class AddDashboardPage extends React.Component {
    onSubmit = (expense) => {
        //props.dispatch(addExpense(expense));
        this.props.addExpense(expense);
        this.props.history.push('/');
    };
    render(){
        return (
            <div>
                Add Expense
                <ExpenseForm
                onSubmit= {this.onSubmit}
                />
            </div>
        
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))

});

export default connect(undefined, mapDispatchToProps)(AddDashboardPage);