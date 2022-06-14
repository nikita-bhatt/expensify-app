//Higher order components(HOC)- a component (HOC) that renders another component
//reuse code
//render hijacking
//prop manipulation
//abstract state
import React from 'react';
import ReactDOM from 'react-dom';
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>These are the details: {props.info}</p>
    </div>

);
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please do not share.</p>}
            <WrappedComponent {...props}/>
        </div>

    );

};
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ?  (<WrappedComponent {...props}/>) : (<p>Please login for authentication</p>)}
           
        </div>
    );

};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated = {true} info= "This is detail"/>,document.getElementById('app'));