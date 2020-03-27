import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import Colors from "../constants/Colors";

export default function Loading() {
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color={Colors.tintColor1} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
})