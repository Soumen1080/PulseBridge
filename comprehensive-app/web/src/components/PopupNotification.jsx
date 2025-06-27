import React from 'react';
import { Toast } from 'react-native-toast-message';

const PopupNotification = ({ message, type }) => {
    const showToast = () => {
        Toast.show({
            text1: message,
            type: type,
            position: 'top',
            visibilityTime: 4000,
            autoHide: true,
        });
    };

    React.useEffect(() => {
        if (message) {
            showToast();
        }
    }, [message]);

    return null;
};

export default PopupNotification;