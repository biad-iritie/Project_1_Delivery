/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import Colors from '../constants/Colors';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import * as actions from '../store/actions/Auth';
import ConstApp from '../constants/ConstApp';
import MyButton from '../components/MyButton';
import styles from './Styles/Form';
import myAlert from '../components/MyAlert';

class SignupCustScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            number: '',
            fullName: '',
            email: '',
            password: '',
            re_password: '',
            id_type_user: this.props.id_type_user,
        };
        this.onRegister = this.onRegister.bind(this);
        //console.log(this.props);
    }
    /* componentDidUpdate() {
          console.log("componentDidUpdate : ")
          console.log(this.props)
      } */

    //screenCustomer() { }

    onRegister = () => {
        const reg_numero = new RegExp('^[0-9]{8}$');
        const reg_email = new RegExp('^[a-z0-9._-]+@[a-z0-9._-]{2,}.[a-z]{2,7}$');
        const { navigation } = this.props;
        const {
            number,
            password,
            email,
            fullName,
            re_password,
            id_type_user,
        } = this.state;
        //console.log(this.state);

        if (
            !reg_numero.test(number) ||
            !reg_email.test(email) ||
            !fullName.length > 3 ||
            password.length <= 6 ||
            password !== re_password
        ) {
            msg = 'Renseignez convenablement les champs';
            if (
                (reg_numero.test(number) &&
                    reg_email.test(email) &&
                    fullName.length > 3 &&
                    password.length > 6) ||
                password !== re_password
            ) {
                msg = 'Vos mot de passe ne sont pas identique';
            }

            if (
                reg_numero.test(number) &&
                reg_email.test(email) &&
                fullName.length > 3 &&
                password.length <= 4 &&
                password === re_password
            ) {
                msg = 'Votre mot de passe doit avoir au moins 5 caractères';
            }
            myAlert(null, msg);
        } else {
            //navigation.navigate('Main');
            this.props.onAuth(
                number,
                email,
                fullName,
                password,
                re_password,
                id_type_user,
                navigation,
            );
        }
    };

    render() {
        //const { loading } = this.state;
        //const who = this.props.navigate.state.getParam('who')
        //console.log(this.props)
        return (
            <View style={styles.container}>
                {this.props.error !== null
                    ? myAlert(this.props.titleError, this.props.error)
                    : null}
                <View style={styles.InputContainer}>
                    <TextInput
                        autoFocus
                        style={styles.body}
                        placeholder="Numero"
                        onChangeText={text => this.setState({ number: text })}
                        value={this.state.number}
                        placeholderTextColor={Colors.grey}
                        underlineColorAndroid="transparent"
                        keyboardType="number-pad"
                        autoCompleteType="tel"
                        maxLength={ConstApp.LengthTel}
                        disabled={this.props.loading ? true : false}
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
                        autoCapitalize="words"
                        disabled={this.props.loading ? true : false}
                    />
                </View>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        placeholder="E-mail Address"
                        onChangeText={text => this.setState({ email: text })}
                        value={this.state.email}
                        placeholderTextColor={Colors.grey}
                        underlineColorAndroid="transparent"
                        autoCompleteType="email"
                        keyboardType="email-address"
                        disabled={this.props.loading ? true : false}
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
                        disabled={this.props.loading ? true : false}
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
                        disabled={this.props.loading ? true : false}
                    />
                </View>
                <MyButton
                    nameBtn={'Valider'}
                    loading={this.props.loading}
                    onPress={this.onRegister}
                />
                {/* <Button
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

                </Button> */}
            </View>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.reducerAuth.loading,
    error: state.reducerAuth.error,
    titleError: state.reducerAuth.titleError,
    number: state.reducerAuth.number,
    fullName: state.reducerAuth.fullName,
    email: state.reducerAuth.email,
    id_type_user: state.reducerAuth.id_type_user,
});

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (
            number,
            email,
            fullName,
            password,
            id_type_user,
            navigation,
        ) =>
            dispatch(
                actions.authSignUp(
                    number,
                    fullName,
                    email,
                    password,
                    id_type_user,
                    navigation,
                ),
            ),
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignupCustScreen);
