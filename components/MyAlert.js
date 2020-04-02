/* eslint-disable prettier/prettier */
import { Alert } from 'react-native';

export default function MyAlert(title, msg) {
    if (title == null) {
        title = "Oups ! Attention"
    }
    return (
        Alert.alert(title, msg)
    )

}