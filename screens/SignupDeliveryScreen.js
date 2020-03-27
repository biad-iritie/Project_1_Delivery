import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { AppStyles } from "../constants/AppStyles";
import Colors from "../constants/Colors";
import { TextInput } from 'react-native-gesture-handler';
import Button from "react-native-button";
import { AsyncStorage } from "react-native";
import { connect } from "react-redux";

class SignupDeliveryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            numero: "",
            fullName: "",
            email: "",
            password: "",
            re_password: "",
            idType_User: 1,
        };


    }
    /* componentDidUpdate() {
        console.log("componentDidUpdate : ")
        console.log(this.props)
    } */

    screenCustomer() { }

    onRegister = () => {

        const reg_numero = new RegExp("^[0-9]{8}$");
        const reg_email = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,7}$");
        const { navigation } = this.props;
        const { numero, password, email, fullName, re_password, idType_User } = this.state;



        this.setState({ loading: true });
        //navigation.navigate('Main')

        if (!reg_numero.test(numero) ||
            !reg_email.test(email) ||
            !fullName.length > 3 ||
            password.length <= 4 ||
            password !== re_password) {
            msg = 'Renseignez convenablement les champs';
            if (reg_numero.test(numero) &&
                reg_email.test(email) &&
                fullName.length > 3 &&
                password.length > 4 ||
                password !== re_password) {
                msg = 'Vos mot de passe ne sont pas identique'
            }

            if (reg_numero.test(numero) &&
                reg_email.test(email) &&
                fullName.length > 3 &&
                password.length <= 4 &&
                password === re_password) {
                msg = 'Votre mot de passe doit avoir au moins 5 caractères'
            }
            this.setState({ loading: false });
            Alert.alert('Oups ! Attention', msg);

        } else {
            //ADD the information on Local storage 
            try {
                //appel de l api 

                AsyncStorage.setItem('@User:id', '1');
                AsyncStorage.setItem('@User:numero', numero);
                AsyncStorage.setItem('@User:email', email);
                AsyncStorage.setItem('@User:fullName', fullName);
                this.setState({ loading: false });

                //Envoie de l action au reducer
                this.props.dispatch(
                    {
                        type: "Login",
                        user: {
                            numero: numero,
                            fullName: fullName,
                            email: email,
                        }
                    });
                navigation.navigate('Main');
            } catch (error) {
                // Error saving data
                Alert.alert('Error add info local storage', error);

            }

        }



    }

    render() {
        const { loading } = this.state;
        //const who = this.props.navigate.state.getParam('who')
        //console.log(this.props)
        return (
            <View style={styles.container}>

                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        placeholder="Numero"
                        onChangeText={text => this.setState({ numero: text })}
                        value={this.state.numero}
                        placeholderTextColor={Colors.grey}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        placeholder="Entrer votre Nom et prenom(s)"
                        onChangeText={text => this.setState({ fullName: text })}
                        value={this.state.fullName}
                        placeholderTextColor={Colors.grey}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.InputContainer}>
                    <TextInput
                        autoCapitalize='none'
                        style={styles.body}
                        placeholder="E-mail Address"
                        onChangeText={text => this.setState({ email: text })}
                        value={this.state.email}
                        placeholderTextColor={Colors.grey}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        placeholder="Entrer le mot de passe"
                        secureTextEntry={true}
                        onChangeText={text => this.setState({ password: text })}
                        value={this.state.password}
                        placeholderTextColor={Colors.grey}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        placeholder="Retaper le mot de passe"
                        secureTextEntry={true}
                        onChangeText={text => this.setState({ re_password: text })}
                        value={this.state.re_password}
                        placeholderTextColor={Colors.grey}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <Button
                    containerStyle={styles.loginContainer}
                    style={styles.loginText}
                    disabled={loading ? true : false}
                    onPress={() => this.onRegister()}
                >
                    {
                        loading ?
                            <ActivityIndicator size='small' color={Colors.tintColor2} /> :
                            'Valider'
                    }

                </Button>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",

    },
    or: {
        //fontFamily: AppStyles.fontName.main,
        color: "black",
        marginTop: 40,
        marginBottom: 10
    },
    title: {
        fontSize: AppStyles.fontSize.title,
        fontWeight: "bold",
        color: Colors.tintColor1,
        marginTop: 20,
        marginBottom: 20
    },
    leftTitle: {
        alignSelf: "stretch",
        textAlign: "left",
        marginLeft: 20
    },
    content: {
        paddingLeft: 50,
        paddingRight: 50,
        textAlign: "center",
        fontSize: AppStyles.fontSize.content,
        color: Colors.text
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
    placeholder: {
        //fontFamily: AppStyles.fontName.text,
        color: "red"
    },
    InputContainer: {
        width: AppStyles.textInputWidth.main,
        marginTop: 30,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: Colors.grey,
        borderRadius: AppStyles.borderRadius.main
    },
    body: {
        height: 42,
        paddingLeft: 20,
        paddingRight: 20,
        color: Colors.text
    },

});
const mapStateToProps = state => ({
    numero: state.auth.numero,
    fullName: state.auth.fullName,
    email: state.auth.email,
    isLoggedIn: state.auth.isLoggedIn
});
/* const mapStateToProps = (state) => {
    return {
        numero: state.auth.numero,
        fullName: state.auth.fullName,
        email: state.auth.email,
        isLoggedIn: state.auth.isLoggedIn
    }
} */
/* const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
} */
export default connect(mapStateToProps)(SignupDeliveryScreen);