import React from 'react';
import Table from './Table';

class Container extends React.Component {

    state = {
        people: {}
    };

    render() {
        return (
            <div>
                <Table />
            </div>
        );
    }

}

export default Container;