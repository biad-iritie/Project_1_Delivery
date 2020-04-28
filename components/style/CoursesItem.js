/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
//import Constants from '../../node_modules/expo-constants';

// eslint-disable-next-line no-undef
export default (styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: Colors.tintColor2,
        borderBottomWidth: 0.5,
        marginBottom: 10,
        borderRadius: 10,
        marginLeft: 5,
        backgroundColor: '#fff',
    },
    container_info: {
        flex: 4,
    },
    date_container: {
        flex: 1,
    },
    date_text: {
        textAlign: 'right',
        fontSize: 14,
    },
    type_course: {
        textAlign: 'left',
        fontSize: 14,
        color: 'red',
    },
    button: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.tintColor1,

    },
    status: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.tintColor1,
        //borderTopWidth: 3,
        borderTopColor: Colors.tintColor2,

    },
    dep_arriv: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    info: { fontStyle: 'italic' },
}));
