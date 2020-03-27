import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import Colors from "../constants/Colors";

export default function LoadingBtn() {
    return (
        <View >
            <ActivityIndicator size='small' color={Colors.tintColor2} />
        </View>
    )
}
