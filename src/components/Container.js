import React from 'react';
import EmployeeDirectory from './EmployeeDirectory';

class Container extends React.Component {

    render() {
        return (
            <div className="container">
                <EmployeeDirectory />
            </div>
        );
    }

}

export default Container;