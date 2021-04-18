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
            console.log(this.state.people);
        })
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const search  = event.target.name;
        let value = event.target.value;

        this.setState({
            [search]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const list = this.state.filteredPeople.filter(item => item.location.country === this.state.search);
        console.log(list);
        this.setState({
            filteredPeople: list
        })
    }

    sortAscending = event => { 
        event.preventDefault();
        const list = this.state.filteredPeople;
        list.sort((a, b) => {
            const nameA = a.name.last.toUpperCase();
            const nameB = b.name.last.toUpperCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        })
        console.log(list);
        this.setState({
            filteredPeople: list
        });
    };

    sortDescending = event => {
        event.preventDefault();
        const list = this.state.filteredPeople;
        list.sort((a, b) => {
            const nameA = a.name.last.toUpperCase();
            const nameB = b.name.last.toUpperCase();
            if (nameA < nameB) return 1;
            if (nameA > nameB) return -1;
            return 0;
        })
        console.log(list);
        this.setState({
            filteredPeople: list
        });
    };

    sortCountryAscending = event => {
        event.preventDefault();
        const list = this.state.filteredPeople;
        list.sort((a, b) => {
            const nameA = a.location.country.toUpperCase();
            const nameB = b.location.country.toUpperCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        })
        console.log(list);
        this.setState({
            filteredPeople: list
        });
    }

    sortCountryDescending = event => {
        event.preventDefault();
        const list = this.state.filteredPeople;
        list.sort((a, b) => {
            const nameA = a.location.country.toUpperCase();
            const nameB = b.location.country.toUpperCase();
            if (nameA < nameB) return 1;
            if (nameA > nameB) return -1;
            return 0;
        })
        console.log(list);
        this.setState({
            filteredPeople: list
        });
    }

    render() {
        return (
            <div>
                <input type="text" name="search" value={this.state.search} onChange={this.handleInputChange} />
                <button className="sort" onClick={this.handleFormSubmit}>Search By Country</button>
                <br />
                <button className="sort" onClick={this.sortAscending}>Sort By Last Name Ascending</button>
                <button className="sort"onClick={this.sortDescending}>Sort By Last Name Descending</button>
                <br />
                <button className="sort" onClick={this.sortCountryAscending}>Sort By Country Ascending</button>
                <button className="sort"onClick={this.sortCountryDescending}>Sort By Country Ascending</button>
                <br />
                <table>
                <TableHead />
                <TableBody rows={this.state.filteredPeople} />
                </table>
            </div>
        )
    }

}

export default Table;