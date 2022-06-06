import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
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
const NotFoundPage = () => (
    <div>
        404!
    </div>

);
const routes = (
    <BrowserRouter>
    <Switch>
    <Route path = "/" component = {ExpenseDashboardPage} exact = {true} />
    <Route path = "/create" component = {AddDashboardPage}/>
    <Route path = "/edit" component = {EditDashboardPage}/>
    <Route path = "/help" component = {HelpPage}/>
    <Route component = {NotFoundPage}/>
    </Switch>
    </BrowserRouter>

);
ReactDOM.render(routes,document.getElementById('app'));
