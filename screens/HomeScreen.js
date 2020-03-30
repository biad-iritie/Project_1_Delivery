/* eslint-disable prettier/prettier */
//import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
//import { MonoText } from '../components/StyledText';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import CoursesItem from '../components/CoursesItem';
import CoursesItemCust from '../components/CoursesItemCust';
import Loading from '../components/Loading';
import ConstApp from '../constants/ConstApp';
import styles from './styles/Home';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    /* this.state = {
      courses: [],
      //idType_User: props.idType_User,
      isLoading: true,
    }; */

    //CHANGEMENT DU TITRE SI USER  est un livreur
    /* if (props.id_type_user !== 1) {
      this.changeTitleText();
    }
  }
    /*changeTitleText = () => {
     var that = this;

     that.props.navigation.setParams({
       Title: 'Le Monde des Courses',
     });
   };
   static navigationOptions = ({ navigation }) => {
     return {
       title: navigation.getParam('Title', 'Mes courses'),
     };*/
  }
  _displayLoading() {
    //console.log(this.state.isLoading);

    if (this.state.isLoading) {
      return <Loading />;
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {this.props.loading ? <Loading /> : null}
          {this.props.id_type_user === ConstApp.ID_TYPE_CUSTOMER ? (
            <CoursesItemCust />
          ) : (
              <CoursesItem />
            )}

          {/* <Text style={styles.developmentModeText}>
            Aucune course pour l'instant !
          </Text> */}
          {/* Rest of the app comes ABOVE the action button component !*/}
        </ScrollView>
        {this.props.id_type_user !== ConstApp.ID_TYPE_CUSTOMER ? null : (
          <ActionButton
            buttonColor={Colors.tintColor1}
            onPress={() => this.props.navigation.navigate('AddCourse')}
          >
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton>
        )}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  number: state.reducerAuth.number,
  fullName: state.reducerAuth.fullName,
  id_type_user: state.reducerAuth.id_type_user,
  token: state.reducerAuth.token,
  loading: state.reducerAuth.loading,
});
const mapDispatchToProps = dispatch => {
  return {
    dispatch: action => {
      dispatch(action);
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
