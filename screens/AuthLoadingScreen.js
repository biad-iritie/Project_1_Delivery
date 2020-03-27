import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Colors from '../constants/Colors';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }
  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    //const userToken = await AsyncStorage.getItem('@User');
    try {
      const user = await AsyncStorage.getItem('@User');
      /* if (user) {
        this.setState({
          userToken: user.userToken
            numero: ,
          fullName: "",
          email: "",
          user: user
        })
      } else {

      } */
      if (user) {
        /* navigation.dispatch({
          type: 'Login',
          user: user,
        }); */
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate('Main');
      } else {
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.replace('Welcome');
      }

      //console.log(user);
    } catch (error) {
      alert('error :' + error);
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
const mapStateToProps = state => ({
  user: state.user,
});
export default connect(mapStateToProps)(AuthLoadingScreen);
