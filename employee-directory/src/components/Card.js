import React from 'react';

class Card extends React.Component {

    state = {
        people: []
    };

    componentDidMount() {
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(people => {
            this.setState({ people });
        })
    }

    render() {
        return (
            <div>

            </div>
        );
    }

}

export default Card;