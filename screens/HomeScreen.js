//import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
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
import Loading from '../components/Loading';
class HomeScreen extends React.Component {
  /* constructor() {
    
    
    this.state = {
      courses: [],
      //idType_User: props.idType_User,
      isLoading: true,
    }; */

  //CHANGEMENT DU TITRE SI USER  est un livreur
  /* if (props.id_type_user !== 1) {
    this.changeTitleText();
  } 
}*/
  /*changeTitleText = () => {
   var that = this;

   that.props.navigation.setParams({
     Title: 'Le Monde des Courses',
   });
 };
 static navigationOptions = ({ navigation }) => {
   return {
     title: navigation.getParam('Title', 'Mes courses'),
   };
 }; */
  _displayLoading() {
    //console.log(this.state.isLoading);

    if (this.state.isLoading) {
      return <Loading />;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.loading ? <Loading /> : null}

        {/* <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <CoursesItem />
          <CoursesItem />
          <CoursesItem />


        </ScrollView> */}
        <Text style={styles.developmentModeText}>
          Aucune course pour l'instant !
        </Text>
        {/* Rest of the app comes ABOVE the action button component !*/}
        {this.props.id_type_user !== 1 ? null : (
          <ActionButton
            buttonColor={Colors.tintColor1}
            onPress={() => this.props.navigation.navigate('AddCourse')}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
            {/*<ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>*/}
          </ActionButton>
        )}
      </View>
    );
  }
}

/* function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
} */

/* function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
} */

/* function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
} */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.tintColor2,

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  developmentModeText: {
    //flexDirection: 'column',
    //marginBottom: 20,
    color: Colors.tintColor1,
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 3,
    paddingBottom: 50,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 10,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: '#fff',
  },
});

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
