import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/style.scss'

const ExpenseDashboardPage = () => (
    <div>
        This is my dashboard component
    </div>

);
const AddDashboardPage = () => (
    <div>
        This is Add dashboard component
    </div>

);
const EditDashboardPage = () => (
    <div>
        This is Edit dashboard component
    </div>

);
const HelpPage = () => (
    <div>
        This is help component
    </div>

);
const routes = (
    <BrowserRouter>
    <div>
    <Route path = "/" component = {ExpenseDashboardPage} exact = {true} />
    <Route path = "/create" component = {AddDashboardPage}/>
    <Route path = "/edit" component = {EditDashboardPage}/>
    <Route path = "/help" component = {HelpPage}/>
    </div>
    </BrowserRouter>

);
ReactDOM.render(routes,document.getElementById('app'));
