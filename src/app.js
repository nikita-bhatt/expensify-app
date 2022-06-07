import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom'
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
        404- <Link to= "/">Go Home</Link>
    </div>

);
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to= "/" activeClassName = "is-active" exact={true}>Dashboard</NavLink>
        <NavLink to = "/create" activeClassName = "is-active">Create Expense</NavLink>
        <NavLink to = "/edit" activeClassName = "is-active">Edit Expense</NavLink>
        <NavLink to = "/help" activeClassName = "is-active">Help</NavLink>
    </header>

);
const routes = (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
        <Route path = "/" component = {ExpenseDashboardPage} exact = {true} />
        <Route path = "/create" component = {AddDashboardPage}/>
        <Route path = "/edit" component = {EditDashboardPage}/>
        <Route path = "/help" component = {HelpPage}/>
        <Route component = {NotFoundPage}/>
        </Switch>
    </div> 
    </BrowserRouter>

);
ReactDOM.render(routes,document.getElementById('app'));
