import React, { Component } from 'react'
import Colors from "../constants/Colors";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
class CoursesItem extends Component {
    constructor(props) {
        super(props)
    }
    Answer_Course() {
        alert('okiii')
        //this.props.navigation.navigate("AnswerCourse")
    }
    render() {

        return (

            <View style={styles.container}>
                <View style={styles.container_info}>
                    <View >
                        <Text style={styles.dep_arriv}>Depart: Adjamé/Paillet  </Text>
                    </View>
                    <View>
                        <Text style={styles.info}>jndjcn dcjn dkcncsdsdv qwadsd av qfwefsd qwda sfasc qwfqf dkjcd  dsvsdv</Text>
                    </View>
                    <View >
                        <Text style={styles.dep_arriv}>Arrivée: Adjamé/Locodjro  </Text>
                    </View>
                    <View>
                        <Text style={styles.info}>jndjcn dcjn dkcncsdsdv qwadsdav qfwefsd qwdasfasc qwfqf</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View>
                            <Text style={styles.type_course}>Course Immediate</Text>
                        </View>
                        <View style={styles.date_container}>
                            <Text style={styles.date_text}>Publiée le 00/00/0000</Text>
                        </View>
                    </View>

                </View >
                <View >
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.Answer_Course}>
                        <Text> Allez ! </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

        flexDirection: 'row',
        borderBottomColor: Colors.tintColor2,
        borderBottomWidth: 0.5,
        marginBottom: 10,
        borderRadius: 10,
        marginLeft: 5,
        backgroundColor: '#fff',


    },
    container_info: {
        flex: 4,
    },
    date_container: {
        flex: 1
    },
    date_text: {
        textAlign: 'right',
        fontSize: 14
    },
    type_course: {
        textAlign: 'left',
        fontSize: 14,
        color: 'red'
    },
    button: {
        backgroundColor: '#DDDDDD',
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        backgroundColor: Colors.tintColor1,
    },
    dep_arriv: {
        fontWeight: "bold",
        textAlign: 'center'
    },
    info: { fontStyle: 'italic' }

})
export default CoursesItem;