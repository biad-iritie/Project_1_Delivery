import { StyleSheet } from 'react-native';
import { AppStyles } from "../../constants/AppStyles";
import Colors from "../../constants/Colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 150
    },
    title: {
        fontSize: AppStyles.fontSize.title,
        fontWeight: "bold",
        color: Colors.tintColor2,
        marginTop: 20,
        textAlign: "center",
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20
    },
    loginContainer: {
        width: AppStyles.buttonWidth.main,
        backgroundColor: Colors.tintColor1,
        borderRadius: AppStyles.borderRadius.main,
        padding: 10,
        marginTop: 30
    },
    loginText: {
        color: Colors.white
    },
    signupContainer: {
        width: AppStyles.buttonWidth.main,
        backgroundColor: Colors.white,
        borderRadius: AppStyles.borderRadius.main,
        padding: 8,
        borderWidth: 1,
        borderColor: Colors.tintColor1,
        marginTop: 15
    },
    signupText: {
        color: Colors.tintColor1
    },

})