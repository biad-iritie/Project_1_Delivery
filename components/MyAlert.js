import React from 'react';
import { Alert } from 'react-native';


export default function myAlert(title, msg) {
    if (title == null) {
        title = "Oups ! Attention"
    }
    return (
        Alert.alert(title, msg)
    )

}