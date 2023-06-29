import React, {useState} from 'react'
import {Image, SafeAreaView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {theme} from "../theme";
import {MagnifyingGlassIcon} from "react-native-heroicons/outline";

export const HomeScreen = () => {
    const [showSearch, toggleSearch] = useState(false)
    return (<View className="flex-1 relative">
        <StatusBar style="light"></StatusBar>
        <Image blurRadius={70} source={require('../assets/images/bg.png')} className="absolute h-full w-full"/>

        <SafeAreaView className="flex flex-1">
            {/*search section*/}
            <View style={{height: '7%'}} className="mx-4 relative z-50">
                <View className="flex-row justify-end items-center rounded-full"
                      style={{backgroundColor: showSearch ? theme.bgWhite(0.2) : 'transparent'}}>
                    {showSearch ? (<TextInput placeholder='Search city' placeholderTextColor={'lightgray'}
                                              className="pl-6 h-10 flex-1 text-base text-white"/>) : null}

                    <TouchableOpacity
                        onPress={() => toggleSearch(!showSearch)}
                        style={{backgroundColor: theme.bgWhite(0.3)}}
                        className='rounded-full p-3 m-1'>
                        <MagnifyingGlassIcon size='25' color='white'></MagnifyingGlassIcon>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    </View>)
}
