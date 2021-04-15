import React from 'react';

class Card extends React.Component {

    state = {
        people: []
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
                <ul>
                    
                </ul>
            </div>
        );
    }

}

export default Card;