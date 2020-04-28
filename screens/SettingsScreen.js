import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
//import { ExpoConfigView } from '@expo/samples';

class SettingsScreen extends Component {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  //return <ExpoConfigView />;
  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
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

export default connect(
  mapStateToProps,
  null,
)(SettingsScreen);
