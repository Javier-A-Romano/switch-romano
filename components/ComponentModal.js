import React from 'react'
import { Modal, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import colors from '../constant/colors';

export const ComponentModal = ({ modalVisible, itemSelected, onHandlerDelete }) => {
  return (
    <Modal animationType="slide" visible={modalVisible} transparent>
      <View style={styles.modalContainer}>
        <View style={[styles.modalContent, styles.shadow]}>
          <Text style={styles.modalMessage}>{itemSelected.question1}</Text>

          <View >

            <TouchableOpacity
              style={styles.buttonModal}
              onPress={() => onHandlerDelete(itemSelected.id, "1")}
            >
              <Text style={styles.textModal}>{itemSelected.option1}</Text>

            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonModal}
              onPress={() => onHandlerDelete(itemSelected.id, "2")}
            >
              <Text style={styles.textModal} >{itemSelected.option2}</Text>

            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonModal}
              onPress={() => onHandlerDelete(itemSelected.id, "3")}
            >
              <Text style={styles.textModal} >{itemSelected.option3}</Text>

            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  modalContent: {
    padding: 30,
    backgroundColor: colors.blue,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderRadius: 10,
    borderColor: colors.cian,
    elevation: 8,


  },
  modalMessage: {
    fontSize: 20,
    fontFamily: 'open-sans',
    color: colors.white,
  },
  modalTitle: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 20,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textModal: {
    fontFamily: 'open-sans',
    color: colors.white,
  },
  buttonModal: {
    backgroundColor: colors.bluedark,
    height: 50,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: colors.cian,
    borderWidth: 5,
  },

});