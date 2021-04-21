import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import './EmployeeStyle.scss';

class Table extends React.Component {

    state = {
        people: [],
        filteredPeople: [],
        searchName: "",
        searchCountry: ""
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

    handleInputChangeCountry = event => {
        const searchCountry = event.target.name;
        let value = event.target.value;

        const list = this.state.people.filter(item => item.location.country.includes(value));

        this.setState({
            [searchCountry]: value,
            filteredPeople: list
        });

    };

    handleInputChangeName = event => {
        const searchName = event.target.name;
        let value = event.target.value;

        const list = this.state.people.filter(item => item.name.first.includes(value));

        this.setState({
            [searchName]: value,
            filteredPeople: list
        });
    }

    sortAscending = () => {
        const list = this.state.filteredPeople;
        list.sort((a, b) => {
            const nameA = a.name.last.toLowerCase();
            const nameB = b.name.last.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        })
        console.log(list);
        this.setState({
            filteredPeople: list
        });
    };

    sortDescending = () => {
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

    sortCountryAscending = () => {
        const list = this.state.filteredPeople;
        list.sort((a, b) => {
            const nameA = a.location.country.toLowerCase();
            const nameB = b.location.country.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        })

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
     
                <div className="inputArea">
                    <br />
                    <h3 className="searchBar">Search for A Specific Country:</h3>
                    <input className="countrySearch" type="text" name="searchCountry" value={this.state.searchCountry} onChange={this.handleInputChangeCountry} />
                    <h3 className="searchBar">Search for A Specific Name:</h3>
                    <input className="countrySearch" type="text" name="searchName" value={this.state.searchName} onChange={this.handleInputChangeName} />
                    <br />
                </div>

                <div className="sortingArea">
                    <button className="sortA" onClick={this.sortAscending}>Sort By Last Name Ascending</button>
                    <button className="sortD" onClick={this.sortDescending}>Sort By Last Name Descending</button>
                    <button className="sortA" onClick={this.sortCountryAscending}>Sort By Country Ascending</button>
                    <button className="sortD" onClick={this.sortCountryDescending}>Sort By Country Descending</button>
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