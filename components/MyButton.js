/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import Button from 'react-native-button';
import { StyleSheet } from 'react-native';
import LoadingBtn from './LoadingBtn';
import { AppStyles } from '../constants/AppStyles';
import Colors from '../constants/Colors';
import { connect } from 'react-redux';

export default function MyButton(props) {
    //console.log(props.onPress());

    return (
        <Button
            containerStyle={styles.loginContainer}
            style={styles.loginText}
            disabled={props.loading ? true : false}
            onPress={() => {
                props.onPress();
            }}
        >
            {props.loading ? <LoadingBtn /> : props.nameBtn}
        </Button>
    );
}
const styles = StyleSheet.create({
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
});
/* const mapStateToProps = (state) => {

    return {
        loading: state.reducerAuth.loading,
    }
} */
