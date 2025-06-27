import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MessagingScreen from '../screens/MessagingScreen';
import NotificationScreen from '../screens/NotificationScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Messaging" component={MessagingScreen} />
                <Stack.Screen name="Notifications" component={NotificationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;