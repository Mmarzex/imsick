import React, { Component } from 'react';

import Messenger from './Messenger';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export default class App extends Component {


    render() {
        return (
            <div className="container">
                <h1>Blah</h1>
                <Messenger />
            </div>
        )
    }
}