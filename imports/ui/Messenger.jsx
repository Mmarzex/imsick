import React, { Component } from 'react';

import ChatWindow from './ChatWindow';

export default class Messenger extends Component {

    constructor(props) {
        super(props);
        this.handleOptionClick = this.handleOptionClick.bind(this);
        this.state = {
            messages: [],
            updates: 0
        }
    }

    handleOptionClick(text) {
        console.log('blah', text);
        const isUser = this.state.updates % 2 == 0 ? true : false;
        this.state.messages.push({isUser, text});
        console.log(this.state.messages);
        this.setState({updates: this.state.updates + 1});
    }

    render() {
        const {optionOne, optionTwo} = this.props;

        return (
            <div className="container">
                <ChatWindow messages={this.state.messages} />
                <div className="row">
                    <div className="col-xs-6">
                        <button id="blah" type="submit"
                                style={MessengerStyles.option}
                                className="btn btn-default"
                                onClick={() => this.handleOptionClick(optionOne)}>Option One</button>
                    </div>
                    <div className="col-xs-6">
                        <button id="blah" type="submit"
                                style={MessengerStyles.option}
                                className="btn btn-default"
                                onClick={() => this.handleOptionClick(optionTwo)}>Option Two</button>
                    </div>
                </div>
            </div>
        )
    }
}

var MessengerStyles = {
    option: {
        backgroundColor: 'lightblue'
    }
};