/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ActionSheetIOS } from 'react-native';

import MyButton from '../components/MyButton';
import ConstApp from '../constants/ConstApp';
import styles from './Styles/Welcome';

class WelcomeScreen extends Component {
    constructor(props) {
        super(props);

        this.login = this.login.bind(this);
        this.signIn = this.signIn.bind(this);
        //console.log(props);
    }
    /* static options = {
        header: null,
    }; */

    login = () => {
        /* Login */
        this.props.navigation.navigate('LoginScreen');
    };

    signIn = () => {
        /* ActionSheetIOS.showActionSheetWithOptions(
                        {
                            title: "S'inscrire en tant que :",
                            options: ['Annuler', 'Client', 'Livreur'], */
        //destructiveButtonIndex: 1,
        /*  cancelButtonIndex: 0,
                     tintColor: Colors.tintColor1
                 },
                 (buttonIndex) => {
                     if (buttonIndex === 1) { */
        /* Sign up of customer */
        /*     this.props.navigation.navigate("SignupCust", { 'who': 1 })
                    }
                    if (buttonIndex === 2) { */
        /* Sign up of delivery man */
        /*     this.props.navigation.navigate("SignupDelivery", { 'who': 2 })
                    }
                },
            ) */

        /* Sign up of customer */
        this.props.navigation.navigate('SignupCustScreen', { who: 1 });
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Bienvenue dans le monde des courses</Text>
                <Image
                    style={{ width: 250, height: 70, resizeMode: 'stretch' }}
                    source={ConstApp.logo1}
                />
                {/* <Button
                    containerStyle={styles.loginContainer}
                    style={styles.loginText}
                    onPress={() => this.props.navigation.navigate("Login")}>
                    Connexion
                </Button> */}
                <MyButton nameBtn={'Connexion'} loading={false} onPress={this.login} />
                {/* <Button
                    containerStyle={styles.signupContainer}
                    style={styles.signupText}
                    onPress={() => this.SignIn()}>
                    Inscription
                </Button> */}
                <MyButton
                    nameBtn={'Inscription'}
                    loading={false}
                    onPress={this.signIn}
                />
            </View>
        );
    }
}

export default WelcomeScreen;
