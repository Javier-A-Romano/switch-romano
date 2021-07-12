import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import colors from './constant/colors';
import { NavigationContainer } from '@react-navigation/native';
import { RouterManager } from './routers/RouterManager';
import { ContextData } from './components/ContextData';


const App = () => {
  const [itemlist, setItemList] = useState([{
    "id": "0.5091013499818855",
    "option1": "6",
    "option2": "7",
    "option3": "8",
    "question1": "4 + 4 es igual a ?",
    "theme": "SUMA",
    "correct": "3",
  }, {
    "id": "0.53525235235235",
    "option1": "constante",
    "option2": "condicional",
    "option3": "variable",
    "question1": "IF( ){} es un",
    "theme": "Programacion",
    "correct": "2",
  }, {
    "id": "0.535252352334235",
    "option1": "como estas?",
    "option2": "cuanto estas?",
    "option3": "como estoy?",
    "question1": "how are you? es igual a",
    "theme": "Saludo",
    "correct": "1",
  }


  ]);
  return (

    <ContextData.Provider value={{
      itemlist,
      setItemList
    }}>
      <NavigationContainer>{<RouterManager />}</NavigationContainer>


    </ContextData.Provider>
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