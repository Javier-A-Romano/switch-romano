import React from 'react'
import { ComponentsFlat } from '../components/ComponentsFlat'

export const ScreenList = ({ itemlist }) => {


    const [modalVisible, setModalVisible] = useState(false);

    const onHandlerDelete = () => {
        const id = itemSelected.id;
        const validate = itemSelected.validation;
        if (vorf === validate) {
            setItemList(currentItems => currentItems.filter(item => item.id !== id));

            setItemSelected({});
            setModalVisible(!modalVisible);
        } else {

            setModalVisible(!modalVisible);

        }
    }

    const onHandlerModal = (id, optionVorF) => {
        setItemSelected(itemList.filter(item => item.id === id)[0]);
        setModalVisible(!modalVisible);
        setVorf(optionVorF);
    }
    return (
        <View>

        <ComponentsFlat itemlist={itemlist} onHandlerModal={onHandlerModal}/>

        <ComponentModal
         modalVisible={modalVisible}
            itemSelected={ itemSelected }
             onHandlerDelete={    onHandlerDelete   }
          
          
          />
        </View>
    )
}
