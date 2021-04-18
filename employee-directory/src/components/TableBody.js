import React from 'react';

class TableBody extends React.Component {
    render() {
        return (
            <tbody>
                {
                    this.props.rows.map(emp => (
                        <tr>
                            <td>{emp.name.first}</td>
                            <td>{emp.name.last}</td>
                            <td>{emp.gender}</td>
                        </tr>
                    ))
                }
            </tbody>
        )
    }

}

export default TableBody;