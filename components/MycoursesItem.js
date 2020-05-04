/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style/CoursesItem';
import Colors from '../constants/Colors';

class MycoursesItem extends Component {
    constructor(props) {
        super(props);
        //console.log(props);




    }
    colorStatus = () => {
        switch (this.props.status) {
            case 'Accepté':
                return Colors.tintColor1;

            default:
                break;
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container_info}>
                    <TouchableOpacity onPress={() => this.props.detail_Course(this.props.course)}>
                        <View>
                            <Text style={styles.dep_arriv}>Depart: {this.props.course.place_sender.name} </Text>

                        </View>
                        <View>
                            <Text style={styles.info} numberOfLines={1}>
                                {this.props.course.spec_place_sender}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.dep_arriv}>Arrivée: {this.props.course.place_receiver.name} </Text>
                        </View>
                        <View>
                            <Text style={styles.info} numberOfLines={1}>
                                {this.props.course.spec_place_receiver}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <View>
                                <Text style={styles.type_course}>{`${this.props.course.type_course} / ${this.props.course.type_package}`}</Text>
                            </View>
                            <View style={styles.date_container}>
                                <Text style={styles.date_text}>{this.props.course.numero_course}</Text>
                            </View>
                            <View style={styles.date_container}>
                                <Text style={styles.date_text}>12/03/2020</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    {
                        this.props.course.status === 'Acceptée' ?
                            <TouchableOpacity
                                style={styles.status} onPress={() => this.props.change_Status(this.props.course.status, this.props.course.numero_course)}>
                                <Text > {this.props.course.status} </Text>
                            </TouchableOpacity> : null

                    }
                    {
                        this.props.course.status === 'En cours' || this.props.course.status === 'En route' ?
                            <TouchableOpacity
                                style={
                                    this.props.course.status === 'En route' ? styles.statusInt1 : styles.statusInt2} onPress={() => this.props.change_Status(this.props.course.status, this.props.course.numero_course)}>
                                <Text > {this.props.course.status} </Text>
                            </TouchableOpacity> : null

                    }
                    {
                        this.props.course.status === 'Terminée' ?
                            <TouchableOpacity
                                disabled
                                style={styles.statusTermine}>
                                <Text > {this.props.course.status} </Text>
                            </TouchableOpacity> : null

                    }


                    {/* <TouchableOpacity style={styles.button2} onPress={() => console.log("ok")} >
                        <Text > Detail  </Text>
                    </TouchableOpacity> */}
                </View>
            </View >
        );
    }
}


export default MycoursesItem;
