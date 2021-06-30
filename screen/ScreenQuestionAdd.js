import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import { InputAdd } from '../components/InputAdd'

export const ScreenQuestionAdd = () => {
    const [theme, setTheme] = useState();
    const [question, setQuestion] = useState();
    const [option1, setOption1] = useState();
    const [option2, setOption2] = useState();
    const [option3, setOption3] = useState();
    const [itemlist, setItemList] = useState([]);

    const onHandlerChangeTheme = (t) => setTheme(t);
    const onHandlerChangeQuestion = (t) => setQuestion(t);
    const onHandlerChangeOption1 = (t) => setOption1(t);
    const onHandlerChangeOption2 = (t) => setOption2(t);
    const onHandlerChangeOption3 = (t) => setOption3(t);

    const add = () => {

        console.log(itemlist);
        console.log("hola");


        if (theme.length >= 5 && question.length >= 5 && option1.length >= 5 && option2.length >= 5 && option3.length >= 5) {
            setItemList(currentItems =>
                [...currentItems, {
                    id: Math.random().toString(), theme: theme, question: question, option1: option1,
                    option2: option2, option3: option3
                }]);

            setQuestion("");
            setOption1("");
            setOption2("");
            setOption3("");
        } else {
            setQuestion("");
            setOption1("");
            setOption2("");
            setOption3("");

        }

        console.log(itemlist);
    }

    return (
        <View>
            <InputAdd stateLocal={theme} pholder={"tema a mostrar"} onHandlerChange={onHandlerChangeTheme} />
            <InputAdd stateLocal={question} pholder={"Pregunta"} onHandlerChange={onHandlerChangeQuestion} />
            <InputAdd stateLocal={option1} pholder={"tema a mostrar"} onHandlerChange={onHandlerChangeOption1} />
            <InputAdd stateLocal={option2} pholder={"tema a mostrar"} onHandlerChange={onHandlerChangeOption2} />
            <InputAdd stateLocal={option3} pholder={"tema a mostrar"} onHandlerChange={onHandlerChangeOption3} />

            <Button onPress={add} title="shorlak" />
        </View>
    )
}
