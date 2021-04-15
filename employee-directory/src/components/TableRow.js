import React from 'react';

class Table extends React.Component {

    state = {
        people: {}
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(people => {
            console.log(people);
            this.setState({ people });
        })
    }

    render() {
        return (
            <tr>

            </tr>
        )
    }

}

export default Table;