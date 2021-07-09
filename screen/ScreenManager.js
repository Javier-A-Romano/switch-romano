import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { ScreenList } from './ScreenList';
import { ScreenLogin } from './ScreenLogin';
import { ScreenQuestionAdd } from './ScreenQuestionAdd';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import colors from '../constant/colors';

export const ScreenManager = ({ route, navigation }) => {

    const { user } = route.params;

    const [screenNum, setScreenNum] = useState(user);
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

    const [dataLoaded] = useFonts({
        'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    })
    if (!dataLoaded) {
        return <AppLoading />
    }




    let screen = <ScreenList setScreenNum={setScreenNum} itemlist={itemlist} setItemList={setItemList} />


    if (screenNum === 'admin') {

        screen = <ScreenQuestionAdd setScreenNum={setScreenNum} setItemList={setItemList} itemlist={itemlist} />
    }
    if (screenNum === 'user') {

        screen = <ScreenList setScreenNum={setScreenNum} itemlist={itemlist} setItemList={setItemList} />
    }
    return (
        <View style={styles.container}>
            {screen}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bluedark,
        alignItems: 'center',
        justifyContent: 'center',
    },
});