import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

class Table extends React.Component {

    state = {
        people: [],
        filteredPeople: [],
        search: ""
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=50')
        .then(response => response.json())
        .then(response => {
            console.log(response.results);
            this.setState({
                people : response.results,
                filteredPeople: response.results
            });
        })
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div>
                <input type="text" name="search" value={this.state.search} onChange={this.handleInputChange} />
                <table>
                <TableHead />
                <TableBody rows={this.state.filteredPeople} />
                </table>
            </div>
        )
    }

}

export default Table;