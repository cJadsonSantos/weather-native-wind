import React from 'react'
import {Image, TextInput, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {theme} from "../theme";

export const HomeScreen = () => {
    return (
        <View className="flex-1 relative bg-blue-500">
            <StatusBar style="light"></StatusBar>
            <Image blurRadius={70} source={require('../assets/images/bg.png')} className="absolute h-full w-full"/>

            <SafeAreaProvider className="flex flex-1">
                {/*search section*/}
                <View style={{height: '7%'}} className="mx-4 relative z-50">
                    <View className="flex-row justify-end items-center rounded-full"
                          style={{backgroundColor: theme.bgWhite(0.2)}}>
                        <TextInput placeholder='Search city' placeholderTextColor={'lightgray'}/>
                    </View>
                </View>
            </SafeAreaProvider>
        </View>
    )
}
