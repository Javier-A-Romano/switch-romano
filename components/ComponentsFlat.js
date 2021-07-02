import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../constant/colors';

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
                        <Text style={styles.text}>Tema: {data.item.theme}</Text>
                        <Text style={styles.text}> {data.item.question1}</Text>




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
        color: colors.white,
        height: 50,
        flex: 1,
        fontFamily: 'open-sans',
        fontSize: 15,

    }, questionS: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.blue,
        width: 45,

    },


});