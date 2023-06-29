import React from 'react'
import {LogBox} from "react-native";
import {HomeScreen} from "../screens/HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SafeAreaProvider} from "react-native-safe-area-context";

const Stack = createNativeStackNavigator()
LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state'
])
const AppNavigation = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>

    )
}
export default AppNavigation
