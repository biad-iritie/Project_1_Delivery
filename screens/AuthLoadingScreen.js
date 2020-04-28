/* eslint-disable no-bitwise */
/* eslint-disable no-undef */

import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../store/actions/Auth';
import Colors from '../constants/Colors';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }
  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    //const userToken = await AsyncStorage.getItem('@User');
    try {
      const token = await AsyncStorage.getItem('token');
      const type = await AsyncStorage.getItem('type');
      const number = await AsyncStorage.getItem('number');
      const email = await AsyncStorage.getItem('email');
      const fullName = await AsyncStorage.getItem('fullName');
      //console.log('--Check User dans AuthLoading--');
      if (
        (token !== null) &
        (type !== null) &
        (number !== null) &
        (email !== null) &
        (fullName !== null)
      ) {
        /* navigation.dispatch({
          type: 'Login',
          user: user,
        }); */
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.onAuth(token, number, email, fullName, type);
        this.props.navigation.navigate('Main');
      } else {
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.replace('Welcome');
      }

      //console.log(user);
    } catch (error) {
      console.log('--Error AuthLoading screen');
      //alert(`error : ${error}`);
    }
  };
  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator
          style={styles.spinner}
          size="large"
          color={Colors.tintColor1}
        />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  spinner: {
    marginTop: 200,
  },
});
/* const mapStateToProps = state => ({
  user: state.user,
}); */
const mapDispatchToProps = dispatch => {
  return {
    onAuth: (token, number, email, fullName, id_type_user) =>
      dispatch(
        actions.authSuccess(token, id_type_user, number, fullName, email),
      ),
  };
};
export default connect(
  null,
  mapDispatchToProps,
)(AuthLoadingScreen);
