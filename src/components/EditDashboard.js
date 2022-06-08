import React from 'react';
const EditDashboardPage = (props) => {
    console.log(props);
    return (
        <div>
            This is Edit dashboard component for id {props.match.params.id}
        </div>
    
    );
};

export default EditDashboardPage;