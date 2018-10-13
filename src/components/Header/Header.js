import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Header extends Component {
    componentDidMount() {
        if (performance.navigation.type === 1) {
            this.props.history.push('/feedback');
        }
    }

    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">Feedback!</h1>
            </header>
        );
    }
}

export default withRouter(Header);