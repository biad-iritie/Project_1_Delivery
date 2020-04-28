/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style/CoursesItem';

class MycoursesItem extends Component {
    constructor(props) {
        super(props);
        //console.log(props);



    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container_info}>
                    <TouchableOpacity onPress={() => this.props.detail_Course(this.props.courses)}>
                        <View>
                            <Text style={styles.dep_arriv}>Depart: {this.props.courses.place_sender.name} </Text>

                        </View>
                        <View>
                            <Text style={styles.info} numberOfLines={1}>
                                {this.props.courses.spec_place_sender}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.dep_arriv}>Arrivée: {this.props.courses.place_receiver.name} </Text>
                        </View>
                        <View>
                            <Text style={styles.info} numberOfLines={1}>
                                {this.props.courses.spec_place_receiver}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <View>
                                <Text style={styles.type_course}>{`${this.props.courses.type_course} / ${this.props.courses.type_package}`}</Text>
                            </View>
                            <View style={styles.date_container}>
                                <Text style={styles.date_text}>12/03/2020</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>

                    <TouchableOpacity disabled={false} style={styles.status} onPress={() => console.log("ok")}>
                        <Text > Terminée </Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.button2} onPress={() => console.log("ok")} >
                        <Text > Detail  </Text>
                    </TouchableOpacity> */}
                </View>
            </View >
        );
    }
}


export default MycoursesItem;
