import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const ComponentsFlat = ({ itemlist }) => {
    return (
        <FlatList
            data={itemlist}
            renderItem={data => (
                <View style={styles.textrow}>

                    <TouchableOpacity
                        style={styles.buttonF}
                        onPress={() => onHandlerModal(data.item.id, "F")}
                    >
                        <Text>{data.item.theme}</Text>

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

    }, buttonF: {
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