import React from 'react';

class TableBody extends React.Component {
    render() {
        return (
            <tbody>
                {
                    this.props.rows.map((emp, i) => (
                        <tr className="contentTR" key={i}>
                            <td className="contentTD">{emp.name.first}</td>
                            <td className="contentTD">{emp.name.last}</td>
                            <td className="contentTD">{emp.gender}</td>
                            <td className="contentTD">{emp.location.country}</td>
                        </tr>
                    ))
                }
            </tbody>
        )
    }
}

export default TableBody;