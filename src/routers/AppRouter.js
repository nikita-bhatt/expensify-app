import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboard';
import AddDashboardPage from '../components/AddDashboard';
import EditDashboardPage from '../components/EditDashboard';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/NotFound'

const AppRouter = () => (
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

export default AppRouter;