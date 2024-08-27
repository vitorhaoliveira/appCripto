import { React } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../components/Home";
import { Register } from "../components/Register";
import { Change } from "../components/Change"; 
import { Text } from "react-native";

const stack = createStackNavigator();

export default function Routes() {
    return (
        <Text>Hello</Text>
    );
}
