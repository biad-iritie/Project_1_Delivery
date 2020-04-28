/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
} from 'react-native';
import Colors from '../constants/Colors';
import styles from './styles/Home';
import myAlert from '../components/MyAlert';
import { connect } from 'react-redux';
import MycoursesItem from '../components/MycoursesItem';
import ConstApp from '../constants/ConstApp';
import Loading from '../components/Loading';

class MyCoursesScreen extends Component {
    constructor(props) {
        super(props)


    }
    detail_Course = (data) => {
        //alert('okiii');
        this.props.navigation.navigate('DetailCourse', { course: data });
    }
    render() {
        console.log("MyCoursesScreen");
        console.log(this.props);
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
                            <MycoursesItem courses={item} detail_Course={this.detail_Course} />
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
    token: state.reducerAuth.token,
    loading: state.reducerCourses.loading,
    myCourses: state.reducerCourses.myCourses,
});
const mapDispatchToProps = dispatch => {
    return {

    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MyCoursesScreen);
