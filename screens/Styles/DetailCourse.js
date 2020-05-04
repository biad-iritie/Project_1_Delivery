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
        flex: 1,
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
    button2: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.tintColor1,
        borderTopWidth: 3,
        borderTopColor: Colors.tintColor2,

    },
    dep_arriv: {
        flex: 1,
        flexWrap: 'wrap',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000000',
        fontSize: 20,
        marginBottom: 10
    },
    info: {
        marginBottom: 10,
        fontSize: 15,
    },
    titleSpec: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000000',
        fontSize: 15,
    },
    spec: {
        fontStyle: 'italic',
        color: '#666666',
        margin: 5,
        fontSize: 15
    },
    nameNumber: {
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 10,
        fontSize: 15
    }
}));
