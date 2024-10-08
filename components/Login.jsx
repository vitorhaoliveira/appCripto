import React, { useState, useEffect } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');;
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState('');

    function data(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    function logIn() {
        
    }

    return (
        <View>
            <Text>Faça login</Text>

            <TextInput placeholder="Digite o email" />
            <TextInput placeholder="Digite a senha" />

            <TouchableOpacity>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login;
