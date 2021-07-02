import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ComponentsFlat } from '../components/ComponentsFlat'
import { ComponentModal } from '../components/ComponentModal'
import colors from '../constant/colors';


export const ScreenList = ({ itemlist, setItemList, setScreenNum }) => {


    const [modalVisible, setModalVisible] = useState(false);
    const [itemSelected, setItemSelected] = useState({});
    const onHandlerDelete = (id, pick) => {
        console.log(pick);

        const validate = itemSelected.correct;
        if (pick === validate) {
            setItemList(currentItems => currentItems.filter(item => item.id !== id));
            console.log("hello");

            setItemSelected({});
            setModalVisible(!modalVisible);
        } else {

            setModalVisible(!modalVisible);

        }
    }

    const onHandlerModal = (id) => {
        setItemSelected(itemlist.filter(item => item.id === id)[0]);
        setModalVisible(!modalVisible);
    }
    const back = () => {


        setScreenNum(1);


    }
    return (
        <View style={styles.list}>
            <TouchableOpacity
                style={styles.volver}
                onPress={back}
            >
                <Text style={styles.textList}>Volver</Text>

            </TouchableOpacity>
            <ComponentsFlat itemlist={itemlist} onHandlerModal={onHandlerModal} setModalVisible={setModalVisible} />

            <ComponentModal
                modalVisible={modalVisible}
                itemSelected={itemSelected}
                onHandlerDelete={onHandlerDelete}


            />
        </View>
    )
}
const styles = StyleSheet.create({
    list: {
        paddingTop: 25,
        alignItems: 'center',
        justifyContent: 'center',

    },
    textList: {

    },
    volver: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.blue,
        width: 360,
        borderRadius: 10,
        borderColor: colors.cian,
        borderWidth: 5,
    },


});