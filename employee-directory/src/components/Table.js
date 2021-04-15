import React from 'react';
import TableRow from './TableRow';
import TableHead from './TableHead';

class Table extends React.Component {

    render() {
        return (
            <table>
                <TableHead />
                <TableRow />
            </table>
        )
    }

}

export default Table;