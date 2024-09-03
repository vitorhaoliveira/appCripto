import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { firestore } from "../firebase";
import { collection, doc, updateDoc } from "firebase/firestore";

export default function ChangeCriptos({ navigation, route }) {
    const id = route.params.id;

    const [nameCripto, setNameCripto] = useState(route.params.nameCripto);
    const [acronymCripto, setAcronymCripto] = useState(route.params.acronymCripto);
    const [valueCripto, setValueCripto] = useState(route.params.valueCripto);

    async function ChangeData(id, nameCripto, acronymCripto, valueCripto) {
        try {
            await updateDoc(doc(collection(firestore, "tbcoin"), id), {
                nameCripto,
                acronymCripto,
                valueCripto
            })
            Alert.alert("Succes", "The cripto has been updated successfully");
            navigation.navigate("Home");
        } catch (error) {
            console.error("Error to change", error);
            Alert.alert("Error", "Error to change cripto");
        }
    }

    return (
        <View>
            <View>
                <Text>Alterar dados da Criptomoeda</Text>
            </View>

            <View>
                <TextInput 
                    autoCapitalize="words"
                    placeholder="Digite a criptomoeda"
                    onChangeText={(text) => setNameCripto(text)}
                    value={nameCripto}
                />
                <TextInput 
                    placeholder="Digite a saída"
                    onChangeText={(text) => setAcronymCripto(text)}
                    value={acronymCripto}
                />
                <TextInput 
                    placeholder="Digite a valor"
                    onChangeText={(text) => setValueCripto(text)}
                    value={valueCripto}
                />
                <TouchableOpacity onPress={() => ChangeData(id, nameCripto, acronymCripto, valueCripto)}>
                    <Text>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
