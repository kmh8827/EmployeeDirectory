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
            this.setState({
                people : response.results,
                filteredPeople: response.results
            });
            console.log(this.state.filteredPeople);
        })
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    sortAscending = event => { 
        event.preventDefault();
        const list = this.state.filteredPeople;
        list.sort((a, b) => {
            const nameA = a.name.last.toUpperCase();
            const nameB = b.name.last.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })
        console.log(list);
        this.setState({
            filteredPeople: list
        });
    };

    sortDescending = event => {
        event.preventDefault();
        console.log('descending');
    };

    render() {
        return (
            <div>
                <input type="text" name="search" value={this.state.search} onChange={this.handleInputChange} />
                <button onClick={this.sortAscending}>Sort Ascending</button>
                <button onClick={this.sortDescending}>Sort Descending</button>
                <table>
                <TableHead />
                <TableBody rows={this.state.filteredPeople} />
                </table>
            </div>
        )
    }

}

export default Table;