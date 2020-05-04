/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
    Text,
    SafeAreaView,
    FlatList,
    Alert
} from 'react-native';
//import Colors from '../constants/Colors';
import styles from './styles/Home';
import myAlert from '../components/MyAlert';
import { connect } from 'react-redux';
import MycoursesItem from '../components/MycoursesItem';
//import ConstApp from '../constants/ConstApp';
import Loading from '../components/Loading';
import * as actions from '../store/actions/Courses';

class MyCoursesScreen extends Component {
    constructor(props) {
        super(props)


    }
    detail_Course = (data) => {
        //alert('okiii');
        this.props.navigation.navigate('DetailCourse', { from: 'MyCoursesScreen', course: data });
    }
    change_Status = (status, numero_course) => {
        //alert('okiii');
        const T_status = ['Acceptée', 'En route', 'En cours', 'Terminée'];
        const index = T_status.indexOf(status);

        Alert.alert(
            `Êtes-vous prêt à entamer le status " ${T_status[index + 1]} "`,
            '',
            [
                {
                    text: 'OUI',
                    onPress: () => {
                        this.props.changingStatus(this.props.token, numero_course, T_status[index + 1]);
                    },
                },
                {
                    text: 'NON',
                    style: 'cancel',
                },
            ],
            { cancelable: true },
        );

    }
    render() {
        //console.log("MyCoursesScreen");
        console.log(this.props.myCourses);
        return (
            <SafeAreaView style={styles.container}>
                {this.props.loading ? <Loading /> : null}
                {this.props.shownError === true && this.props.error !== null
                    ? myAlert(this.props.titleError, this.props.error)
                    : null}

                {this.props.myCourses.length !== 0 ? (
                    <FlatList
                        style={styles.list}
                        data={this.props.myCourses}
                        renderItem={({ item }) =>
                            <MycoursesItem loading={this.props.loading} course={item} detail_Course={this.detail_Course} change_Status={this.change_Status} />
                        }
                        keyExtractor={item => item.numero_course.toString()}

                    />
                ) : <Text style={styles.developmentModeText}>
                        Aucune course pour l'instant !
            </Text>}
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => ({
    number: state.reducerAuth.number,
    fullName: state.reducerAuth.fullName,
    id_type_user: state.reducerAuth.id_type_user,
    shownError: state.reducerCourses.shownError,
    error: state.reducerCourses.error,
    token: state.reducerAuth.token,
    loading: state.reducerCourses.loading,
    myCourses: state.reducerCourses.myCourses,
});
const mapDispatchToProps = dispatch => {
    return {
        changingStatus: (token, numero_course, status) =>
            dispatch(actions.changingStatus(token, numero_course, status)),
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MyCoursesScreen);
