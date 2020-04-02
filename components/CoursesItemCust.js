/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style/CoursesItem';

class CoursesItemCust extends Component {
    constructor(props) {
        super(props);
    }
    Answer_Course() {
        alert('okiii');
        //this.props.navigation.navigate("AnswerCourse")
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container_info}>
                    <View>
                        <Text style={styles.dep_arriv}>Depart: Adjamé/Paillet </Text>
                    </View>
                    <View>
                        <Text style={styles.info}>
                            jndjcn dcjn dkcncsdsdv qwadsd av qfwefsd qwda sfasc qwfqf dkjcd
                            dsvsdv
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.dep_arriv}>Arrivée: Adjamé/Locodjro </Text>
                    </View>
                    <View>
                        <Text style={styles.info}>
                            jndjcn dcjn dkcncsdsdv qwadsdav qfwefsd qwdasfasc qwfqf
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View>
                            <Text style={styles.type_course}>Course Immediate</Text>
                        </View>
                        <View style={styles.date_container}>
                            <Text style={styles.date_text}>12/03/2020</Text>
                        </View>
                    </View>
                </View>
                <View>

                    <TouchableOpacity style={styles.button} onPress={this.Answer_Course}>
                        <Text > Detail </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={this.Answer_Course}>
                        <Text > Supprimer  </Text>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}


export default CoursesItemCust;
