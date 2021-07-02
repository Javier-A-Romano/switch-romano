import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import colors from '../constant/colors';

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
        marginTop: 20,
        flexDirection: 'row',


    },
    input: {

        backgroundColor: colors.cian,
        height: 60,
        width: 340,
        borderColor: colors.white,
        borderWidth: 1,


    },
});