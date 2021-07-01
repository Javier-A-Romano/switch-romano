import React, { useState } from 'react'
import { View } from 'react-native';
import { ComponentsFlat } from '../components/ComponentsFlat'
import { ComponentModal } from '../components/ComponentModal'


export const ScreenList = ({ itemlist, setItemList }) => {


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
    return (
        <View>

            <ComponentsFlat itemlist={itemlist} onHandlerModal={onHandlerModal} setModalVisible={setModalVisible} />

            <ComponentModal
                modalVisible={modalVisible}
                itemSelected={itemSelected}
                onHandlerDelete={onHandlerDelete}


            />
        </View>
    )
}
