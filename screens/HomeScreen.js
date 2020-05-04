/* eslint-disable prettier/prettier */
//import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
//import { MonoText } from '../components/StyledText';
import ActionButton from 'react-native-action-button';
import * as actions from '../store/actions/Courses';
//import Icon from 'react-native-vector-icons/Ionicons';
//import { IconFill, IconOutline } from '@ant-design/icons-react-native';
import Colors from '../constants/Colors';
import CoursesItem from '../components/CoursesItem';
import CoursesItemCust from '../components/CoursesItemCust';
import Loading from '../components/Loading';
import ConstApp from '../constants/ConstApp';
import styles from './styles/Home';
import myAlert from '../components/MyAlert';

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
    this.detail_Course = this.detail_Course.bind(this);

  }
  componentDidMount() {
    //this.props.listCourse(this.props.id_type_user);
  }
  detail_Course = (data) => {
    //alert('okiii');
    this.props.navigation.navigate('DetailCourse', { course: data });
  }


  render() {
    console.log(this.props.courses);
    console.log('Home');
    return (
      <SafeAreaView style={styles.container}>

        {this.props.loading ? <Loading /> : null}
        {this.props.shownError === true && this.props.error !== null
          ? myAlert(this.props.titleError, this.props.error)
          : null}
        {this.props.id_type_user === ConstApp.ID_TYPE_CUSTOMER && this.props.courses.length !== 0 ? (
          <FlatList
            style={styles.list}
            data={this.props.courses}
            renderItem={({ item }) =>
              <CoursesItemCust courses={item} detail_Course={this.detail_Course} delete_Course={this.delete_Course} />
            }
            keyExtractor={item => item.numero_course.toString()}

          />
        ) : null}
        {this.props.id_type_user === ConstApp.ID_TYPE_DELIVER && this.props.courses.length !== 0 ? (
          <FlatList
            style={styles.list}
            data={this.props.courses}
            renderItem={({ item }) =>
              <CoursesItem courses={item} detail_Course={this.detail_Course} />
            }
            keyExtractor={item => item.numero_course.toString()}
          />
        ) : null}
        {this.props.courses.length === 0 ? (
          <Text style={styles.developmentModeText}>
            Aucune course pour l'instant !
          </Text>
        ) : null}

        {/* Rest of the app comes ABOVE the action button component !*/}

        {this.props.id_type_user === ConstApp.ID_TYPE_DELIVER ? null : (
          <ActionButton
            buttonColor={Colors.tintColor1}
            onPress={() => this.props.navigation.navigate('AddCourse')}
          />
        )}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  number: state.reducerAuth.number,
  fullName: state.reducerAuth.fullName,
  id_type_user: state.reducerAuth.id_type_user,
  error: state.reducerCourses.error,
  shownError: state.reducerCourses.shownError,
  token: state.reducerAuth.token,
  loading: state.reducerCourses.loading,
  courses: state.reducerCourses.courses,
});
const mapDispatchToProps = dispatch => {
  return {
    listCourse: (id_type_user) => dispatch(actions.listCourse(id_type_user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
