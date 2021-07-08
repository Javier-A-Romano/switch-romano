import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { ScreenList } from '../screen/ScreenList';
import { ScreenLogin } from '../screen/ScreenLogin';
import { ScreenManager } from '../screen/ScreenManager';

const Stack = createStackNavigator();

export const RouterManager = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="ScreenLogin" component={ScreenLogin} options={{ title: 'Login' }}
            />

            <Stack.Screen name="ScreenManager" component={ScreenManager} options={{ title: 'APPrender' }}
            />
        </Stack.Navigator>
    );
}