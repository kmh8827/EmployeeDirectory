import React from 'react';

class Table extends React.Component {

    render() {
        return (
            <tr>
                <th className='tableHeading'>First Name</th>
                <th className='tableHeading'>Last Name</th>
                <th className='tableHeading'>Gender</th>
            </tr>
        )
    }

}

export default Table;