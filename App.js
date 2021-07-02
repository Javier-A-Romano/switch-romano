import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from './constant/colors';
import { ScreenManager } from './screen/ScreenManager';


const App = () => {
  return (
    <View style={styles.container}>

      <ScreenManager />

      <StatusBar style="auto" />

    </View>
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