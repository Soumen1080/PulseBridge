import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const handleNavigateToMessaging = () => {
        navigation.navigate('Messaging');
    };

    const handleNavigateToNotifications = () => {
        navigation.navigate('Notifications');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Home Screen</Text>
            <Button title="Go to Messaging" onPress={handleNavigateToMessaging} />
            <Button title="View Notifications" onPress={handleNavigateToNotifications} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default HomeScreen;