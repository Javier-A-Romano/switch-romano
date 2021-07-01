import React, { useState } from 'react'
import { View } from 'react-native'
import { ScreenList } from './ScreenList';
import { ScreenLogin } from './ScreenLogin';
import { ScreenQuestionAdd } from './ScreenQuestionAdd';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export const ScreenManager = () => {

    const [screenNum, setScreenNum] = useState(2);
    const [itemlist, setItemList] = useState([{
        "id": "0.5091013499818855",
        "option1": "Holaaaa1",
        "option2": "Holaaaa1",
        "option3": "Holaaaa1",
        "question1": "Como estas?",
        "theme": "Saludo",
        "correct": "1",
    }, {
        "id": "0.53525235235235",
        "option1": "Holaaaa1",
        "option2": "Holaaaa1",
        "option3": "Holaaaa1",
        "question1": "Como estas?",
        "theme": "Saludo",
        "correct": "2",
    }, {
        "id": "0.535252352335235",
        "option1": "Holaaaa1",
        "option2": "Holaaaa1",
        "option3": "Holaaaa1",
        "question1": "Como estas?",
        "theme": "Saludo",
        "correct": "3",
    }


    ]);

    const [dataLoaded] = useFonts({
        'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    })
    if (!dataLoaded) {
        return <AppLoading />
    }




    let screen = <ScreenLogin />

    if (screenNum === 0) {

        screen = <ScreenLogin setScreenNum={setScreenNum} />
    }
    if (screenNum === 1) {

        screen = <ScreenQuestionAdd setScreenNum={setScreenNum} setItemList={setItemList} itemlist={itemlist} />
    }
    if (screenNum === 2) {

        screen = <ScreenList setScreenNum={setScreenNum} itemlist={itemlist} setItemList={setItemList} />
    }
    return (
        <View>
            {screen}
        </View>
    )
}
