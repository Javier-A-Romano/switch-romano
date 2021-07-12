import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { InputAdd } from '../components/InputAdd'
import colors from '../constant/colors';
import { ContextData } from '../components/ContextData';


export const ScreenQuestionAdd = ({ setScreenNum }) => {
    const [theme, setTheme] = useState();
    const [question1, setQuestion1] = useState();
    const [option1, setOption1] = useState();
    const [option2, setOption2] = useState();
    const [option3, setOption3] = useState();

    const onHandlerChangeTheme = (t) => setTheme(t);
    const onHandlerChangeQuestion = (t) => setQuestion1(t);
    const onHandlerChangeOption1 = (t) => setOption1(t);
    const onHandlerChangeOption2 = (t) => setOption2(t);
    const onHandlerChangeOption3 = (t) => setOption3(t);

    const { itemlist, setItemList } = useContext(ContextData);

    const add = (correct) => {



        if (theme.length >= 5 && question1.length >= 5 && option1.length >= 5 && option2.length >= 5 && option3.length >= 5) {
            setItemList(currentItems =>
                [...currentItems, {
                    id: Math.random().toString(), theme: theme, question1: question1, option1: option1,
                    option2: option2, option3: option3, correct: correct
                }]);
            setQuestion1("");
            setOption1("");
            setOption2("");
            setOption3("");
        } else {
            setQuestion1("");
            setOption1("");
            setOption2("");
            setOption3("");

        }

    }
    const next = () => {


        setScreenNum("user");


    }
    return (
        <View >
            <InputAdd stateLocal={theme} pholder={"tema a mostrar"} onHandlerChange={onHandlerChangeTheme} />
            <InputAdd stateLocal={question1} pholder={"Pregunta"} onHandlerChange={onHandlerChangeQuestion} />

            <InputAdd stateLocal={option1} pholder={"Opcion 1"} onHandlerChange={onHandlerChangeOption1} />
            <InputAdd stateLocal={option2} pholder={"Opcion 2"} onHandlerChange={onHandlerChangeOption2} />
            <InputAdd stateLocal={option3} pholder={"Opcion 3"} onHandlerChange={onHandlerChangeOption3} />
            <View style={styles.row1}>

                <TouchableOpacity
                    style={styles.options}
                    onPress={() => add("1")}
                >
                    <Text style={styles.textList}>Opcion1</Text>

                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.options}
                    onPress={() => add("2")}
                >
                    <Text style={styles.textList}>Opcion2</Text>

                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.options}
                    onPress={() => add("3")}
                >
                    <Text style={styles.textList}>Opcion3</Text>

                </TouchableOpacity>

            </View>

            <TouchableOpacity
                style={styles.buttonTest}
                onPress={next}
            >
                <Text style={styles.textList}>MODO PRUEBA</Text>

            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        paddingTop: 25,
        alignItems: 'center',
        justifyContent: 'center',

    },
    row1: {
        flexDirection: 'row',
        marginBottom: 5,
        alignItems: "center",
        justifyContent: "center",
    }
    ,
    textList: {
        color: colors.white,
        height: 30,
        fontFamily: 'open-sans',
        fontSize: 15,
    },
    options: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.blue,
        width: 110,
        borderRadius: 10,
        borderColor: colors.cian,
        borderWidth: 2,
        marginTop: 2,

    },
    buttonTest: {

        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.blue,
        borderRadius: 10,
        borderColor: colors.cian,
        borderWidth: 2,
        marginTop: 2,
    }


});
