import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';

import './Messages.css';

const Messages = ({ messages, name }) => (
    // Helps us scroll perpetually to the bottom
    <ScrollToBottom className="messages">
        {/* EACH MESSAGE generates a div and an index */}
        {messages.map((message, i) => (
            // assigns an individual key to each message
            <div key={i}>
                <Message message={message} name={name} />
            </div>
        ))}
    </ScrollToBottom>
);

export default Messages;
