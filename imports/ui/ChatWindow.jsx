import React, { Component, PropTypes } from 'react';

export default class ChatWindow extends Component {
    render() {
        const { messages } = this.props;
        console.log('Chat window');
        console.log(messages);
        var chatLog = messages.map((c,i) => {
            console.log(c);
            const bubbleStyle = c.isUser ? 'talkbubble-user' : 'talkbubble-watson';
            const divValue = (<div className={bubbleStyle}>{c.text}</div>);
            const leftColumn = !c.isUser ? divValue : [];
            const rightColumn = c.isUser ? divValue : [];
            return (
                <div key={i} className="row">
                    <div className="col-xs-6">{leftColumn}</div>
                    <div className="col-xs-6">
                        {rightColumn}
                    </div>
                </div>
            )
        });

        return (
            <div className="container">
                {chatLog}
            </div>
        )
    }
}

ChatWindow.propTypes = {
  messages: PropTypes.array.isRequired
};