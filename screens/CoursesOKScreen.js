import React, { Component } from 'react'
import {
    StyleSheet,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Colors from "../constants/Colors";

class CoursesOKScreen extends Component {

    render() {
        return (
            <View
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >
                <Text>OKKKKKKK</Text>
            </View>
        )
    }
}
CoursesOKScreen.navigationOptions = {
    title: 'Courses OK',
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.tintColor2
    },
    contentContainer: {
        paddingTop: 3,
        paddingBottom: 50,
    },
});
export default CoursesOKScreen;