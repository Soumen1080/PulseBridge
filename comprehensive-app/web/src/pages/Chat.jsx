import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMessages, sendMessage } from '../services/api';
import './Chat.css';

const Chat = () => {
    const { chatId } = useParams();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        const fetchMessages = async () => {
            const fetchedMessages = await getMessages(chatId);
            setMessages(fetchedMessages);
        };

        fetchMessages();
    }, [chatId]);

    const handleSendMessage = async () => {
        if (newMessage.trim()) {
            await sendMessage(chatId, newMessage);
            setMessages([...messages, { text: newMessage, sender: 'You' }]);
            setNewMessage('');
        }
    };

    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender === 'You' ? 'sent' : 'received'}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="input-container">
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

export default Chat;