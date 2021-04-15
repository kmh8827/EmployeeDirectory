import React from 'react';

class Card extends React.Component {

    state = {

    }

    render() {
        return (
            <div class="card">
                <img class="card-img-top" alt="The person mentioned featured in the card" />
                <div class="card-body">
                    <h5 class="card-title">Person</h5>
                    <p class="card-text">Information about Person</p>
                </div>
            </div>
        )
    }
}

export default Card;