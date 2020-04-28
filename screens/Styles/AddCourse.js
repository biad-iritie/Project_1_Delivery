/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Constants from 'expo-constants';
import { AppStyles } from '../../constants/AppStyles';

export default (styles = StyleSheet.create({
    container: {
        flex: 1,

        /* alignItems: "center",
                                    justifyContent: "center",
                             */
    },
    contentContainer: {
        //backgroundColor: 'red',
        //marginLeft: 70,
        alignItems: 'center',
        paddingTop: 3,
        paddingBottom: 200,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: Constants.statusBarHeight,
        marginBottom: 22
    },
    list: {
        marginTop: 20, flex: 1,
    },
    viewList: {
        marginBottom: 20, borderBottomColor: Colors.tintColor1,
        borderRadius: 10,
        borderBottomWidth: 1,
        borderColor: Colors.tintColor1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20
    },
    textList: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 16,
        color: 'white'
    },
    modalView: {
        margin: 20,
        backgroundColor: Colors.tintColor2,
        borderRadius: 10,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
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
    listInput: {
        marginLeft: 5,
        marginRight: 5,
    },
    InputContainer: {
        //width: AppStyles.textInputWidth.main,
        marginTop: 7.5,
        marginBottom: 7.5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: Colors.grey,
        borderRadius: AppStyles.borderRadius.main,
    },
    textSelect: {
        height: 42,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        color: Colors.text,
    },
    body: {
        height: 42,
        paddingLeft: 20,
        paddingRight: 20,
        color: Colors.text,
    },
    specify: {
        //height: 100,
        paddingLeft: 20,
        paddingRight: 20,
        color: Colors.text,
    },
}));
