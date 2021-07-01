import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const ComponentsFlat = ({ itemlist, onHandlerModal }) => {
    return (
        <FlatList
            data={itemlist}
            renderItem={data => (
                <View style={styles.textrow}>

                    <TouchableOpacity
                        style={styles.questionS}
                        onPress={() => onHandlerModal(data.item.id)}
                    >
                        <Text style={styles.text}>{data.item.theme}</Text>
                        <Text style={styles.text}>{data.item.question1}</Text>
                        <Text style={styles.text}>{data.item.correct}</Text>




                    </TouchableOpacity>


                </View>

            )}
            ketExtractor={(item) => item.id}
        />
    )
}
const styles = StyleSheet.create({

    textrow: {
        marginTop: 5,
        flexDirection: 'row',
        width: 360,


    }, text: {
        backgroundColor: "red",
        height: 50,
        flex: 1,
        fontFamily: 'open-sans'

    }, questionS: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        width: 45,
    },
    buttonV: {
        alignItems: "center",
        justifyContent: "center",
        width: 45,
        backgroundColor: "red",

    },

});