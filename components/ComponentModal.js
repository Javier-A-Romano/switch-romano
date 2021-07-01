import React from 'react'
import { Modal, StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export const ComponentModal = ({ modalVisible, itemSelected, onHandlerDelete }) => {
  return (
    <Modal animationType="slide" visible={modalVisible} transparent>
      <View style={styles.modalContainer}>
        <View style={[styles.modalContent, styles.shadow]}>
          <Text style={styles.modalMessage}>Si elegiste bien se borrara de la lista</Text>
          <Text style={styles.modalTitle}>{itemSelected.value}</Text>
          <View >

            <TouchableOpacity
              style={styles.buttonModal}
              onPress={()=>console.log("1")}
            >
              <Text>CONFIRMAR</Text>

            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonModal}
              onPress={()=>console.log("2")}
            >
              <Text>CONFIRMAR</Text>

            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonModal}
              onPress={()=>console.log("3")}
            >
              <Text>CONFIRMAR</Text>

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
    backgroundColor: "blue",
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderRadius: 10,
    borderColor: "red",
    elevation: 8,


  },
  modalMessage: {
    fontSize: 20,
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
  buttonModal: {
    backgroundColor: "orange",
    height: 50,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "purple",
    borderWidth: 5,
  },

});