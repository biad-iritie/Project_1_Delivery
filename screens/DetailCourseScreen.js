/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
    Text, View, TouchableOpacity, Alert, ScrollView, Platform, Linking
} from 'react-native';
import { connect } from 'react-redux';
import { Card, WhiteSpace, NoticeBar } from '@ant-design/react-native';
import styles from './styles/DetailCourse';
import MyButton from '../components/MyButton';
import ConstApp from '../constants/ConstApp';
import * as actions from '../store/actions/Courses';

class DetailCourseScreen extends Component {
    constructor(props) {
        super(props);
        console.log('DetailCourseScreen');
        console.log(props.route.params);
        this.state = props.route.params.course;
        //console.log(this.state);
        this.acceptanceQuestion = this.acceptanceQuestion.bind(this);
        this.deletionQuestion = this.deletionQuestion.bind(this);
        this.deletingCourse = this.deletingCourse.bind(this);
    }

    acceptCourse = () => {

    }
    acceptanceQuestion = () => {

    }
    deletionQuestion = () => {
        const { navigation } = this.props;
        Alert.alert(
            'Etes-vous sure de vouloir annuler votre demande de livraison: ',
            "",
            [
                {
                    text: "OUI",
                    onPress: () => {
                        this.props.deletingCourse(this.state.numero_course, navigation)
                    },
                },
                {
                    text: "NON",
                    style: "cancel"
                },
            ],
            { cancelable: true }
        );
    }
    deletingCourse = () => {
        alert('ok')

        //this.props.deletingCourse(this.state.numero_course, navigation)
    }
    makeCall = (number) => {
        let phoneNumber = '';
        if (Platform.OS === 'android') {
            phoneNumber = `tel:+225${number}`;
        } else {
            phoneNumber = `telprompt:+225${number}`;
        }
        Linking.openURL(phoneNumber);
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
                                extra={`nᵒ: ${this.state.numero_course}`}
                            />
                            <Card.Body>
                                <View>

                                    <Text style={styles.dep_arriv}>Depart: {this.state.place_sender.name} </Text>
                                    {
                                        this.props.id_type_user === ConstApp.ID_TYPE_CUSTOMER ? (
                                            <TouchableOpacity onPress={() => this.makeCall(this.state.number_sender)}>
                                                <Text style={styles.info}>
                                                    Nom : {this.state.name_sender} / {this.state.number_sender}
                                                </Text>
                                            </TouchableOpacity>
                                        ) : null
                                    }



                                    <Text style={styles.info}>
                                        Type du colis : {this.state.type_package}
                                    </Text>
                                    <Text style={styles.info} >
                                        Valeur : {this.state.value_package}
                                    </Text>
                                    <Text style={styles.info} >
                                        Poids approximatif : {this.state.weight_package} KG
                                    </Text>
                                    <Text style={styles.info}>
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
                                    <Text style={styles.dep_arriv}>Arrivée: {this.state.place_receiver.name} </Text>
                                    <Text style={styles.info}>
                                        Precision du lieu : {this.state.spec_place_receiver}
                                    </Text>
                                    {
                                        this.props.id_type_user === ConstApp.ID_TYPE_CUSTOMER ? (
                                            <TouchableOpacity onPress={() => this.makeCall(this.state.num_receiver)}>
                                                <Text style={styles.info}>
                                                    Nom / Numero : {this.state.name_receiver} / {this.state.num_receiver}
                                                </Text>
                                            </TouchableOpacity>
                                        ) : null
                                    }
                                </View>
                            </Card.Body>

                        </Card>
                        <View>
                            <Text style={styles.info} >
                                Type de la course : {this.state.type_course}
                            </Text>

                            <Text style={styles.info} >
                                Methode de paiement : {this.state.paymentMethod === 1 ? 'A la reception du colis' : 'A la livraison du colis'}
                            </Text>
                        </View>
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
                                nameBtn={this.props.id_type_user === ConstApp.ID_TYPE_DELIVER ? 'Accepter' : 'Annuler'}
                                loading={this.props.loading}
                                onPress={this.props.id_type_user === ConstApp.ID_TYPE_DELIVER ? this.acceptanceQuestion : this.deletionQuestion}
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
const mapDispatchToProps = dispatch => {
    return {
        deletingCourse: (numero_course, navigation) =>
            dispatch(actions.deletingCourse(numero_course, navigation)),
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DetailCourseScreen)