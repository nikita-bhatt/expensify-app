import React from 'react';
import { connect } from "react-redux";
import filters from '../reducers/filters';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.length}
        {props.filters.text}
    </div>
);
//map store state to component prop
const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters

    };

}
export default connect(mapStateToProps)(ExpenseList);;