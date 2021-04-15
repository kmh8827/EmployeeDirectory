import React from 'react';

class Table extends React.Component {

    state = {
        people: {}
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(people => {
            console.log(people);
            this.setState({ people });
        })
    }

    render() {
        return (
            <tr className='tableRow'>
                <td>first</td>
                <td>last</td>
                <td>gender</td>
            </tr>
        )
    }

}

export default Table;