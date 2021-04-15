import React from 'react';
import Card from './Card';

class Container extends React.Component {

    state = {
        people: {}
    };

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
            <div>
                <table>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </table>
            </div>
        );
    }

}

export default Container;