import React from 'react';
import TableRow from './TableRow';
import TableHead from './TableHead';

class Table extends React.Component {

    render() {
        return (
            <table className='table'>
                <thead>
                    <TableHead />
                </thead>
                <tbody>
                    <TableRow />
                </tbody>
            </table>
        )
    }

}

export default Table;