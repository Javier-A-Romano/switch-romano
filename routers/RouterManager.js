import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import colors from '../constant/colors';
import { ScreenLogin } from '../screen/ScreenLogin';
import { ScreenManager } from '../screen/ScreenManager';
import { RouterTab } from './RouterTab';

const Stack = createStackNavigator();

export const RouterManager = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="ScreenLogin" component={ScreenLogin} options={{
                title: 'Login', headerStyle: {
                    backgroundColor: colors.cian,
                },
            }}
            />

            <Stack.Screen name="ScreenManager" component={ScreenManager} options={{
                title: 'APPrender', headerStyle: {
                    backgroundColor: colors.cian,
                },
            }}
            />

        </Stack.Navigator>
    );
}