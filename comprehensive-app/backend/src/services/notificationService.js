const Notification = require('../models/Notification'); // Assuming a Notification model exists
const User = require('../models/User'); // Assuming a User model exists
const { sendPushNotification } = require('../utils/pushNotificationService'); // Utility for sending push notifications

// Function to send in-app notifications
const sendInAppNotification = async (userId, message) => {
    try {
        const user = await User.findById(userId);
        if (!user) throw new Error('User not found');

        const notification = new Notification({
            user: userId,
            message,
            timestamp: new Date(),
        });

        await notification.save();
        return notification;
    } catch (error) {
        throw new Error(`Error sending in-app notification: ${error.message}`);
    }
};

// Function to send system-level notifications
const sendSystemNotification = async (userId, title, body) => {
    try {
        const user = await User.findById(userId);
        if (!user) throw new Error('User not found');

        // Assuming the user has a device token for push notifications
        if (user.deviceToken) {
            await sendPushNotification(user.deviceToken, title, body);
        } else {
            throw new Error('User does not have a device token');
        }
    } catch (error) {
        throw new Error(`Error sending system notification: ${error.message}`);
    }
};

module.exports = {
    sendInAppNotification,
    sendSystemNotification,
};