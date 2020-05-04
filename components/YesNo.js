/* eslint-disable prettier/prettier */
import { Alert } from 'react-native';

export default function YesNo(title, msg, funcYes) {
    Alert.alert(
        title,
        msg,
        [
            {
                text: "OUI",
                onPress: () => {
                    funcYes
                },
            },
            {
                text: "NON",
                style: "cancel"
            },
        ],
        { cancelable: true }
    );

}