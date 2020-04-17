/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
    Text, View, TouchableOpacity, ScrollView
} from 'react-native';
import { Card, WhiteSpace, NoticeBar } from '@ant-design/react-native';
import styles from './styles/DetailCourse';
import MyButton from '../components/MyButton';
import ConstApp from '../constants/ConstApp';

class DetailCourseScreen extends Component {
    constructor(props) {
        super(props);
        console.log('DetailCourseScreen');
        //console.log(props.route.params);
        this.state = props.route.params.course;
        console.log(this.state);
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ flex: 1 }}>
                        <Card full>
                            <Card.Header
                                title="Expediteur"
                                thumbStyle={{ width: 30, height: 30 }}
                                extra="Numero livraison: 001"
                            />
                            <Card.Body>
                                <View>
                                    <Text style={styles.dep_arriv}>Depart: {this.state.place_sender.title} </Text>
                                    <Text style={styles.info}>
                                        Type du colis : {this.state.type_package}
                                    </Text>
                                    <Text style={styles.info} >
                                        Valeur : {this.state.value_package}
                                    </Text>
                                    <Text style={styles.info} >
                                        Poids approximatif : {this.state.weight_package} KG
                                    </Text>
                                    <Text style={styles.info} >
                                        Precision du lieu : {this.state.spec_place_sender}
                                    </Text>
                                </View>

                            </Card.Body>
                        </Card>
                        <WhiteSpace size="lg" />
                        <Card full>
                            <Card.Header
                                title="Destinataire"
                                thumbStyle={{ width: 30, height: 30 }}

                            />
                            <Card.Body>
                                <View>
                                    <Text style={styles.dep_arriv}>Arrivée: {this.state.place_receiver.title} </Text>
                                    <Text style={styles.info} >
                                        Precision du lieu : {this.state.spec_place_receiver}
                                    </Text>
                                    <Text style={styles.info}>
                                        Nom : {this.state.name_receiver}
                                    </Text>
                                    <Text style={styles.info}>
                                        Numero : {this.state.num_receiver}
                                    </Text>
                                    <Text style={styles.info} >
                                        Type de la course : {this.state.type_course}
                                    </Text>
                                    <Text style={styles.info} >
                                        Methode de paiement : {this.state.paymentMethod === 1 ? 'A la reception du colis' : 'A la livraison du colis'}
                                    </Text>
                                </View>
                            </Card.Body>

                        </Card>
                        <NoticeBar
                            marqueeProps={{
                                loop: true, style: {
                                    fontSize: 12, color: 'red', fontWeight: 'bold', lineHeight: 19,
                                    textAlign: 'center',
                                }
                            }}
                        >
                            Frais de la livraison: 1000 FCFA
                    </NoticeBar>
                        <View style={{ flex: 1, alignItems: 'center', }}>
                            <MyButton
                                nameBtn={this.props.id_type_user === ConstApp.ID_TYPE_DELIVER ? 'Accepter' : 'Supprimer'}
                                loading={this.props.loading}
                                onPress={this.addCourse}
                            />
                        </View>
                        <WhiteSpace size="xl" />
                    </View>


                    {/* <View style={styles.container_info}>
                    <View>
                        <Text style={styles.dep_arriv}>Depart: {this.state.place_sender.title} </Text>
                    </View>
                    <View>
                        <Text style={styles.info} numberOfLines={1}>
                            {this.state.spec_place_sender}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.dep_arriv}>Arrivée: {this.state.place_receiver.title} </Text>
                    </View>
                    <View>
                        <Text style={styles.info} numberOfLines={1}>
                            {this.state.spec_place_receiver}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View>
                            <Text style={styles.type_course}>{`${this.state.type_course} / ${this.state.type_package}`}</Text>
                        </View>
                        <View style={styles.date_container}>
                            <Text style={styles.date_text}>12/03/2020</Text>
                        </View>
                    </View>
                </View>
                <View> 

                </View>*/}
                </View >
            </ScrollView>
        )
    }
}
const mapStateToProps = state => ({
    id_type_user: state.reducerAuth.id_type_user,
    token: state.reducerAuth.token,
    loading: state.reducerCourses.loading,
});
export default DetailCourseScreen