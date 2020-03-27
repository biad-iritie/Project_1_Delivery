/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Image, View, StyleSheet, Alert } from 'react-native';
import { AppStyles } from '../constants/AppStyles';
import Colors from '../constants/Colors';
import { TextInput } from 'react-native-gesture-handler';

import ConstApp from '../constants/ConstApp';
import * as actions from '../store/actions/Auth';
import { connect } from 'react-redux';
import MyButton from '../components/MyButton';
import styles from './Styles/Form';
import myAlert from '../components/MyAlert';

class LoginScreen extends Component {
    constructor() {
        super();

        this.state = {
            number: '',
            password: '',
        };

        this.onPressLogin = this.onPressLogin.bind(this);
    }

    onPressLogin = () => {
        //console.log(this.props);
        const reg_numero = new RegExp('^[0-9]{8}$');
        const { number, password } = this.state;
        const { navigation } = this.props;
        //console.log(this.state);
        //this.setState({ loading: true });
        //const { navigation } = this.props;
        if (!reg_numero.test(number) || password.length <= 4) {
            msg = 'Renseignez convenablement les champs';
            if (password.length <= 4 && reg_numero.test(number)) {
                msg = 'Votre mot de passe doit avoir au moins 5 caractères';
            }
            Alert.alert('Oups ! Attention', msg);
            //this.setState({ loading: false })
        } else {
            //this.setState({ loading: false });
            //appel de l api
            this.props.onAuth(number, password, navigation);
            //navigation.navigate('Main')
        }
    };

    render() {
        //const { loading } = this.state;
        return (
            <View style={styles.container}>
                {this.props.error !== null
                    ? myAlert(this.props.titleError, this.props.error)
                    : null}
                <Image
                    style={{ width: 250, height: 70, resizeMode: 'stretch' }}
                    source={ConstApp.logo1}
                />
                {/* <Text style={styles.title}>Connexion</Text> */}
                <View style={styles.InputContainer}>
                    <TextInput
                        autoFocus
                        style={styles.body}
                        placeholder="Entrer votre numero"
                        onChangeText={text => this.setState({ number: text })}
                        //value={this.props.number}
                        maxLength={ConstApp.LengthTel}
                        placeholderTextColor={Colors.grey}
                        underlineColorAndroid="transparent"
                        keyboardType="number-pad"
                        autoCompleteType="tel"
                    />
                </View>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        secureTextEntry={true}
                        placeholder="Entrer votre mot de passe"
                        onChangeText={text => this.setState({ password: text })}
                        //value={this.state.password}
                        placeholderTextColor={Colors.grey}
                        underlineColorAndroid="transparent"
                    />
                </View>
                {/* <Button
                    containerStyle={styles.loginContainer}
                    style={styles.loginText}
                    disabled={this.props.loading ? true : false}
                    onPress={() => this.onPressLogin()}
                >
                    {
                        this.props.loading ?
                            <LoadingBtn /> :
                            'Connexion'
                    }
                </Button> */}
                <MyButton
                    nameBtn={'Connexion'}
                    loading={this.props.loading}
                    onPress={this.onPressLogin}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.reducerAuth.loading,
        error: state.reducerAuth.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (number, password, navigation) =>
            dispatch(actions.authLogin(number, password, navigation)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginScreen);
