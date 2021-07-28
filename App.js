import 'react-native-gesture-handler';

import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import colors from './constant/colors';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './store/store';
import { RouterTab } from './routers/RouterTab';


const App = () => {


  return (

    <Provider store={store}>
      <NavigationContainer>{<RouterTab />}</NavigationContainer>


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