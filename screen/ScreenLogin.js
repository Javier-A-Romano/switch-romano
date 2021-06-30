import React, { useState } from 'react'
import { Button, View } from 'react-native'
import { InputAdd } from '../components/InputAdd'

export const ScreenLogin = () => {
    const [user, setUser] = useState();

    const [pass, setPass] = useState();

    const onHandlerChangeUser = (t) => setUser(t);
    const onHandlerChangePass = (t) => setPass(t);

    const login = () => {

        if (user === "test" && pass === "test") {
            console.log("login ok")
        } else {
            console.log("login error")
            setPass("");
            setUser("");
        }
    }
    return (
        <View>
            <InputAdd stateLocal={user} pholder={"Usuario"} onHandlerChange={onHandlerChangeUser} />
            <InputAdd stateLocal={pass} pholder={"Contraseña"} onHandlerChange={onHandlerChangePass} />


            <Button onPress={login} title="login" />
        </View>
    )
}
