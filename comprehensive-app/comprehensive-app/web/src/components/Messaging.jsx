import React, { useState, useEffect } from 'react';
import { sendMessage, fetchMessages } from '../services/api';

const Messaging = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        const loadMessages = async () => {
            const fetchedMessages = await fetchMessages();
            setMessages(fetchedMessages);
        };

        loadMessages();
    }, []);

    const handleSendMessage = async () => {
        if (newMessage.trim()) {
            await sendMessage(newMessage);
            setNewMessage('');
            const updatedMessages = await fetchMessages();
            setMessages(updatedMessages);
        }
    };

    return (
        <div className="messaging-container">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        {msg.content}
                    </div>
                ))}
            </div>
            <div className="message-input">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Messaging;