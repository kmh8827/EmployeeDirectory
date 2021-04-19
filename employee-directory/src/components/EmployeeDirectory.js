import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import './EmployeeStyle.scss';

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
                    people: response.results,
                    filteredPeople: response.results
                });
                console.log(this.state.people);
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const search = event.target.name;
        let value = event.target.value;

        this.setState({
            [search]: value
        });

        if (this.state.search !== '') {
            const list = this.state.filteredPeople.filter(item => item.location.country.includes(this.state.search));

            this.setState({
                filteredPeople: list
            })
        } else {

            this.setState({
                filteredPeople: this.state.people
            })
        };
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
            <div class="clipboard">
                <div className="sortingArea">
                    <button className="sortA" onClick={this.sortAscending}>Sort By Last Name Ascending</button>
                    <button className="sortD" onClick={this.sortDescending}>Sort By Last Name Descending</button>
                    <button className="sortA" onClick={this.sortCountryAscending}>Sort By Country Ascending</button>
                    <button className="sortD" onClick={this.sortCountryDescending}>Sort By Country Descending</button>
                </div>
      
                <div className="inputArea">
                <br />
                    <h3 className="searchBar">Search for A Specific Country:</h3>
                    <input className="countrySearch" type="text" name="search" value={this.state.search} onInput={this.handleInputChange} />
                <br />
                </div>

                <div className="contentTable">
                    <table className="content">
                        <TableHead />
                        <TableBody rows={this.state.filteredPeople} />
                    </table>
                </div>
                <br />
                <br />
                <br />

            </div>
        )
    }

}

export default Table;