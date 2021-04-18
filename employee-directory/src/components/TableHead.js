import React from 'react';

class TableHead extends React.Component {

    render() {
        return (
            <thead>
                <tr>
                    <th className="tableHeading">First Name</th>
                    <th className="tableHeadin">Last Name</th>
                    <th className="tableHeading">Gender</th>
                    <th className="tableHeading">Country</th>
                </tr>
            </thead>
        )
    }

}

export default TableHead;