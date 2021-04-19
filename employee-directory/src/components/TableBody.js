import React from 'react';

class TableBody extends React.Component {
    render() {
        return (
            <tbody>
                {
                    this.props.rows.map((emp, i) => (
                        <tr className="contentRow" key={i}>
                            <td>{emp.name.first}</td>
                            <td>{emp.name.last}</td>
                            <td>{emp.gender}</td>
                            <td>{emp.location.country}</td>
                        </tr>
                    ))
                }
            </tbody>
        )
    }

}

export default TableBody;