import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import colors from './constant/colors';
import { NavigationContainer } from '@react-navigation/native';
import { RouterManager } from './routers/RouterManager';
import { listReducer } from './reducers/listReducer';
import { store } from './store/store';


const App = () => {


  return (

    <Provider store={store}>
      <NavigationContainer>{<RouterManager />}</NavigationContainer>


    </Provider>
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