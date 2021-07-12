import React, { useContext, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { ScreenList } from './ScreenList';
import { ScreenQuestionAdd } from './ScreenQuestionAdd';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import colors from '../constant/colors';
import { ContextData } from '../components/ContextData';

export const ScreenManager = ({ route, navigation }) => {

    const { user } = route.params;

    const [screenNum, setScreenNum] = useState(user);
    const { itemlist, setItemList } = useContext(ContextData);


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