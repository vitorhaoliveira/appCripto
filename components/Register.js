import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { firestore } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function RegisterCriptos() {
    const [nameCripto, setNameCripto] = useState(null);
    const [acronymCripto, setAcronymCripto] = useState(null);
    const [valueCripto, setValueCripto] = useState(null);

    async function addCripto() {
        try {
            const docRef = addDoc(collection(firestore, "tbcoin"), {
                nameCripto: nameCripto, 
                acronymCripto: acronymCripto, 
                valueCripto: valueCripto
            });
            console.log("Document registered with ID: ", docRef.id);
            Alert.alert("Register", "Records successfully registered");
            NavigationPreloadManager.navigate("Home");
        } catch (error) {
            console.error("Error to register cripto: ", error);
            Alert.alert("Error", "Error to register")
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>Registrar Criptomoeda</Text>
            </View>
            <TextInput 
                autoCapitalize="words" 
                placeholder="Digite a criptomoeda"
                onChangeText={setNameCripto}
                value={nameCripto}
            />
            <TextInput  
                placeholder="Digite a sigla"
                onChangeText={setAcronymCripto}
                value={acronymCripto}
            />
            <TextInput  
                placeholder="Digite a valor"
                onChangeText={setValueCripto}
                value={valueCripto}
            />

            <TouchableOpacity 
                onPress={() => {
                    addCripto()
                }}
            >
                <Text>Enviar</Text>
            </TouchableOpacity>
        </View>
    )
}