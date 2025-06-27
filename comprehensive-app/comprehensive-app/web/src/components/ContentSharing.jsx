import React, { useState } from 'react';
import axios from 'axios';

const ContentSharing = () => {
    const [content, setContent] = useState('');
    const [sharedContent, setSharedContent] = useState([]);

    const handleShareContent = async () => {
        try {
            const response = await axios.post('/api/share-content', { content });
            setSharedContent([...sharedContent, response.data]);
            setContent('');
        } catch (error) {
            console.error('Error sharing content:', error);
        }
    };

    return (
        <div>
            <h2>Share Content</h2>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Type your content here..."
            />
            <button onClick={handleShareContent}>Share</button>
            <h3>Shared Content</h3>
            <ul>
                {sharedContent.map((item, index) => (
                    <li key={index}>{item.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default ContentSharing;