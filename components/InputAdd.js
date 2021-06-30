import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export const InputAdd = ({ onHandlerChange, stateLocal, pholder }) => {
    return (
        <View style={styles.inputrow} >
            <TextInput
                style={styles.input}
                placeholder={pholder}
                onChangeText={onHandlerChange}
                value={stateLocal}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    inputrow: {
        elevation: 8,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginTop: 30,
        flexDirection: 'row',


    },
    input: {
        flex: 1,
        backgroundColor: "red",
        height: 50,
    },
});