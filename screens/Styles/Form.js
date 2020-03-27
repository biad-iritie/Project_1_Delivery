/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { StyleSheet } from 'react-native';
import { AppStyles } from '../../constants/AppStyles';
import Colors from '../../constants/Colors';

export default (styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: "center",
    },
    or: {
        //fontFamily: AppStyles.fontName.main,
        color: 'black',
        marginTop: 40,
        marginBottom: 10,
    },
    title: {
        fontSize: AppStyles.fontSize.title,
        fontWeight: 'bold',
        color: Colors.tintColor1,
        marginTop: 20,
        marginBottom: 20,
    },
    leftTitle: {
        alignSelf: 'stretch',
        textAlign: 'left',
        marginLeft: 20,
    },
    content: {
        paddingLeft: 50,
        paddingRight: 50,
        textAlign: 'center',
        fontSize: AppStyles.fontSize.content,
        color: Colors.text,
    },
    loginContainer: {
        width: AppStyles.buttonWidth.main,
        backgroundColor: Colors.tintColor1,
        borderRadius: AppStyles.borderRadius.main,
        padding: 10,
        marginTop: 30,
    },
    loginText: {
        color: Colors.white,
    },
    placeholder: {
        fontFamily: AppStyles.fontName.text,
        color: 'red',
    },
    InputContainer: {
        width: AppStyles.textInputWidth.main,
        marginTop: 30,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: Colors.grey,
        borderRadius: AppStyles.borderRadius.main,
    },
    body: {
        height: 42,
        paddingLeft: 20,
        paddingRight: 20,
        color: Colors.text,
    },
}));
