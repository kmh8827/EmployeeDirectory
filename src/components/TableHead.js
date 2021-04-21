import React from 'react';

class TableHead extends React.Component {

    render() {
        return (
            <thead>
                <tr className="tableHeading">
                    <th className="hidden">hello</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Country</th>
                </tr>
            </thead>
        )
    }

}

export default TableHead;