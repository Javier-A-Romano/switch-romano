import React, { useContext, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { ScreenList } from './ScreenList';
import { ScreenQuestionAdd } from './ScreenQuestionAdd';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import colors from '../constant/colors';
import { ContextData } from '../components/ContextData';
import { useSelector } from 'react-redux';


export const ScreenManager = ({ route, navigation }) => {

    const { user } = route.params;

    const [screenNum, setScreenNum] = useState(user);
    const itemlist = useSelector(state => state.listReducer)


    const [dataLoaded] = useFonts({
        'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    })
    if (!dataLoaded) {
        return <AppLoading />
    }




    let screen = <ScreenList setScreenNum={setScreenNum} itemlist={itemlist} />


    if (screenNum === 'admin') {

        screen = <ScreenQuestionAdd setScreenNum={setScreenNum} itemlist={itemlist} />
    }
    if (screenNum === 'user') {

        screen = <ScreenList setScreenNum={setScreenNum} itemlist={itemlist} />
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