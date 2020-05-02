import React, { Component } from 'react';
import { Text, View, SafeAreaView, Alert } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles/Setting';
import { IconOutline } from '@ant-design/icons-react-native';
import * as actions from '../store/actions/Auth';

//import { ExpoConfigView } from '@expo/samples';

class SettingsScreen extends Component {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  //return <ExpoConfigView />;
  constructor(props) {
    super(props)
    this.props.navigation.setOptions({
      headerRight: () => (
        <IconOutline
          style={{ marginRight: 20 }}
          name="logout"
          size={20}
          color="red"
          onPress={() => {
            Alert.alert(
              'Voulez-vous deconnecter? ',
              '',
              [
                {
                  text: 'OUI',
                  onPress: () => {
                    this.props.logOut(this.props.token, this.props.navigation);
                  },
                },
                {
                  text: 'NON',
                  style: 'cancel',
                },
              ],
              { cancelable: true },
            );
          }}
        />
      ),
    });
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: 'orange',
            borderBottomWidth: 1,
          }}
        >
          <View style={{ flex: 10 }}>
            <View style={{ alignItems: 'center', marginBottom: 10 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>BOLI BI</Text>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <View style={{ alignItems: 'center', flex: 1, fontSize: 15 }}>
                <Text>07203382</Text>
              </View>
              <View style={{ alignItems: 'center', flex: 1 }}>
                <Text>biadboze@gmail.com</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, alignContent: 'flex-end' }}>
            <IconOutline name="edit" size={25} />
          </View>
        </View>
        <View>
          <Text>OK</Text>
        </View>
      </SafeAreaView>
    );
  }

  /* SettingsScreen.navigationOptions = {
    title: 'app.json',
  }; */
}
const mapStateToProps = state => ({
  id_type_user: state.reducerAuth.id_type_user,
  token: state.reducerAuth.token,
  loading: state.reducerCourses.loading,
});
const mapDispatchToProps = dispatch => {
  return {
    logOut: (token, navigation) =>
      dispatch(actions.authLogOut(token, navigation)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsScreen);
