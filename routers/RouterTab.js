import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ScreenLogin } from '../screen/ScreenLogin';
import { RouterManager } from './RouterManager';
import { ScreenAbout } from '../screen/ScreenAbout';
import colors from '../constant/colors';
import { color } from 'react-native-reanimated';

const Tab = createMaterialBottomTabNavigator();

export const RouterTab = () => {
    return (

        <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: colors.cian }}
            sceneAnimationEnabled={true}
            barStyle={{
                backgroundColor: colors.cian,
                borderColor: colors.white,


            }}
            tabBarOptions={{
                labelStyle: {
                    fontSize: 15,
                }
            }}
        >
            <Tab.Screen name="RouterManager" options={{ title: 'App' }} component={RouterManager} />

            <Tab.Screen name="ScreenAbout" options={{ title: 'About' }} component={ScreenAbout} />
        </Tab.Navigator>
    );
}