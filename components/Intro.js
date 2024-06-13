import React from "react";
import { View, Text, ActivityIndicator, StyleSheet, StatusBar } from "react-native";

export function Blank({page}) {
    return(
        <View style={blank.container}>
            <StatusBar hidden/>
            <Text>This is {page} page</Text>
            <ActivityIndicator/>
        </View>
    );
}

const blank = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    }
});