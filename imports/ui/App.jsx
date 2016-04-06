import React, { Component } from 'react';

import Messenger from './Messenger';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>Blah</h1>
                <Messenger optionOne={"Option One"} optionTwo={"Option Two"} />
            </div>
        )
    }
}