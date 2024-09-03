import React from "react";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Alert } from "react-native";
import { firestore } from "../firebase";
import { collection, onSnapshot, deleteDoc, doc, QueryDocumentSnapshot } from "firebase/firestore";

export default function Home({ navigation }) {
    const [criptos, setCriptos] = useState([]);
    async function deleteCripto(id) {
        try {
            await deleteDoc(doc(firestore, "tbcoin", id));
            Alert.alert("Succes", "The cripto was deleted");
        } catch (error) {
            Alert.alert("Error", "Cant delete cripto");
        }
    }

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(firestore, "tbcoin"), (querySnapshot) => {
            const list = [];

            QueryDocumentSnapshot.forEach((doc) => {
                list.push({...doc.data(), id: doc.id});
            });
            setCriptos(list);
        })
        return () => unsubscribe();
    }, [])

    return (
        <View>
            <View>
                <Text>Lista de criptomoedas</Text>
            </View>

            <FlatList
                data={criptos}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <TouchableOpacity 
                                onPress={() => navigation.navigate("ChangeCriptos", {
                                    id: item.id,
                                    nameCripto: item.nameCripto,
                                    acronymCripto: item.acronymCripto,
                                    valueCripto: item.valueCripto
                                })}
                            >

                            <View>
                                <Text>Criptomoeda: {item.nameCripto}</Text>
                                <Text>Sigla: {item.acronymCripto}</Text>
                                <Text>Valor: {item.valueCripto}</Text>
                            </View>
                            </TouchableOpacity>

                            <View>
                                <TouchableOpacity onPress={() => {deleteCripto(item.id)}} >
                                    X   
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }}
            />

            <TouchableOpacity onPress={() => navigation.navigate("RegisterCriptos")}>
                X
            </TouchableOpacity>
        </View>
    )
}
