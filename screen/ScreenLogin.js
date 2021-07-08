import React, { useState } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { InputAdd } from '../components/InputAdd'
import colors from '../constant/colors';

export const ScreenLogin = ({ navigation }) => {
    const [user, setUser] = useState();

    const [pass, setPass] = useState();

    const onHandlerChangeUser = (t) => setUser(t);
    const onHandlerChangePass = (t) => setPass(t);

    const login = () => {

        if (user === "test" && pass === "test") {
            console.log("login ok")
            navigation.navigate('ScreenManager', { user: 'user' })
        } else {
            console.log("login error")
            setPass("");
            setUser("");
        }
        if (user === "admin" && pass === "admin") {
            console.log("login ok")
            navigation.navigate('ScreenManager', { user: 'admin' })
        } else {
            console.log("login error")
            setPass("");
            setUser("");
        }
    }
    return (
        <View style={styles.container}>
            <InputAdd stateLocal={user} pholder={"Usuario = test"} onHandlerChange={onHandlerChangeUser} />
            <InputAdd stateLocal={pass} pholder={"Contraseña = test"} onHandlerChange={onHandlerChangePass} />


            <Button onPress={login} title="login" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bluedark,
        alignItems: 'center',
        justifyContent: 'center',
    },
});