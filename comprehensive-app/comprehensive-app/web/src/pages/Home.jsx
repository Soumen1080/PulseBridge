import React from 'react';
import DevicePairing from '../components/DevicePairing';
import ContentSharing from '../components/ContentSharing';
import PopupNotification from '../components/PopupNotification';
import Messaging from '../components/Messaging';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Comprehensive App</h1>
            <DevicePairing />
            <ContentSharing />
            <PopupNotification />
            <Messaging />
        </div>
    );
};

export default Home;