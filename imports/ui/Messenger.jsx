import React, { Component } from 'react';

import ChatWindow from './ChatWindow';

export default class Messenger extends Component {

    constructor(props) {
        super(props);
        this.handleOptionClick = this.handleOptionClick.bind(this);
        this.converseWithServer = this.converseWithServer.bind(this);
        this.state = {
            messages: [],
            responses: [],
            conversationId: undefined,
            updates: 0
        }
    }

    componentDidMount() {
        fetch('/api/converse/imsick')
            .then(r => r.json())
            .then(r => {
                this.state.messages.push({isUser: false, text: r.response[0]});
                // r.userResponses.forEach(m => this.state.responses.push(m));
                this.setState({responses: r.userResponses, updates: this.state.updates + 1, conversationId: r.conversation_id});
            })
    }

    converseWithServer(input) {
        fetch('/api/converse/imsick', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                conversationId: this.state.conversationId,
                input: input
            })
        }).then(r => r.json())
            .then(r => {
                var watsonMessages = r.response[0].split('/n');
                if(watsonMessages.length === 1)
                    watsonMessages = r.response[0].split('\\n');
                watsonMessages.forEach(m => this.state.messages.push({isUser: false, text: m}));
                // this.state.messages.push({isUser: false, text: r.response[0]});
                var userResponses = r.userResponses !== null ? r.userResponses : null;
                this.setState({responses: userResponses, updates: this.state.updates + 1, conversationId: r.conversation_id});
            });
    }

    handleOptionClick(text) {
        console.log('blah', text);
        const isUser = true;
        this.state.messages.push({isUser, text});
        console.log(this.state.messages);
        this.setState({responses: undefined, updates: this.state.updates + 1});
        this.converseWithServer(text);
    }

    render() {

        var options = this.state.responses === undefined ? [(<div></div>)] : this.state.responses.map((r, i) => {
            return (
                <div key={i} className="col-xs-6">
                    <button id="blah" type="submit"
                            style={MessengerStyles.option}
                            className="btn btn-default"
                            onClick={() => this.handleOptionClick(r)}>{r}</button>
                </div>
            )
        });

        if(options.length > 1) {
            var temp = [];
            if(options.length <= 2) {
                temp.push((
                    <div key={111} style={MessengerStyles.responseRow} className="row">
                        {options}
                    </div>
                ));
            } else {
                for(var i = 0; i < options.length; i += 2) {
                    temp.push((
                        <div key={i} style={MessengerStyles.responseRow} className="row">
                            {options[i]}
                            {options[i + 1]}
                        </div>
                    ));
                }
            }
            options = temp;
        }

        return (
            <div key={223} className="container">
                <ChatWindow messages={this.state.messages} />
                {options}
            </div>
        )
    }
}

var MessengerStyles = {
    option: {
        backgroundColor: '#57DC60'
    },
    responseRow: {
        paddingTop: 10
    }
};