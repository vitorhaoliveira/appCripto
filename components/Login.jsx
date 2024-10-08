import React, { useState, useEffect } from 'react'
import { Alert, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Firebase } from '../firebase'

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
        Firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                if (user) {
                    Alert('Usuario não encontrado');
                    return;
                }
                navigation.navigate('Routes', {email})
            })  
            .catch((error) => {
                Alert(error);
                navigation.navigate('Login')
            })
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
