import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/Home";
import Register from "../components/Register";
import Change from "../components/Change";  

const Stack = createStackNavigator();

function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={Home} 
            />
            <Stack.Screen 
                name="Change" 
                component={Change} 
            />
            <Stack.Screen 
                name="Register" 
                component={Register} 
            />
        </Stack.Navigator>
    );
}

export default Routes;
