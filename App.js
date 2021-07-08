import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from './constant/colors';
import { NavigationContainer } from '@react-navigation/native';
import { RouterManager } from './routers/RouterManager';


const App = () => {
  return (
    <NavigationContainer>{<RouterManager />}</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bluedark,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;