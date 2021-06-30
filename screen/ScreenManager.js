import React, { useState } from 'react'
import { View } from 'react-native'
import { ScreenList } from './ScreenList';
import { ScreenLogin } from './ScreenLogin';
import { ScreenQuestionAdd } from './ScreenQuestionAdd';

export const ScreenManager = () => {

    const [screenNum, setScreenNum] = useState(0);
    const [itemlist, setItemList] = useState([]);

    let screen = <ScreenLogin />

    if (screenNum === 0) {

        screen = <ScreenLogin setScreenNum={setScreenNum} />
    }
    if (screenNum === 1) {

        screen = <ScreenQuestionAdd setScreenNum={setScreenNum} setItemList={setItemList} />
    }
    if (screenNum === 2) {

        screen = <ScreenList setScreenNum={setScreenNum} itemlist={itemlist} />
    }
    return (
        <View>
            {screen}
        </View>
    )
}
