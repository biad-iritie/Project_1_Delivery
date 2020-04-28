/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    Modal,
    FlatList,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
//import ModalFilterPicker from 'react-native-modal-filter-picker';

import Colors from '../constants/Colors';
import MyButton from '../components/MyButton';
import ConstApp from '../constants/ConstApp';
import { Dropdown } from 'react-native-material-dropdown';
import * as actions from '../store/actions/Courses';
import { Accordion, List, NoticeBar, WhiteSpace, Radio, SearchBar } from '@ant-design/react-native';
import styles from './styles/AddCourse';
import myAlert from '../components/MyAlert';

const RadioItem = Radio.RadioItem;
//const who = "";
class AddCourseScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            /* nom:"",
            prenom:"",
            num_sender: "", */
            type_package: '',
            value_package: '',
            weight_package: '',
            place_sender: '',
            spec_place_sender: '',
            place_receiver: '',
            spec_place_receiver: '',
            name_receiver: '',
            num_receiver: '',
            type_course: '',
            libelle_package: '',
            activeSections: [2, 0],
            //part1Value: 1,
            paymentMethod: null, /* Upon receipt of the package : 1 and Upon delivery of the package : 2 */
            modalVisible: false,
            researchValues: [],
            who: '',
        };

        this.onChange = activeSections => {
            this.setState({ activeSections });
        };
        this.addCourse = this.addCourse.bind(this);
        this.searchDeliveryPrice = this.searchDeliveryPrice.bind(this);


        this.onCancel = this.onCancel.bind(this);
        this.searchStreet = this.searchStreet.bind(this);


        //this.item = this.item.bind(this);
        //const count = 0;
        console.log(props);


    }
    componentDidMount() {
        this.props.fetchPlaces();
    }
    /* shouldComponentUpdate() {
        return false
    } */
    /* static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('Title', 'Nouvelle course'),
        };
    }; */

    addCourse = () => {
        const reg_numero = new RegExp('^[0-9]{8}$');
        const { type_package, value_package, weight_package, place_sender, spec_place_sender, place_receiver,
            spec_place_receiver, name_receiver, num_receiver, type_course, paymentMethod } = this.state;
        const { navigation } = this.props;
        /* console.log(type_package, value_package, weight_package, place_sender, spec_place_sender, place_receiver,
            spec_place_receiver, name_receiver, num_receiver, type_course, paymentMethod); */
        this.props.addCourse(this.props.token, this.props.fullName, this.props.number,
            type_package, value_package, weight_package, place_sender, spec_place_sender,
            place_receiver, spec_place_receiver, name_receiver, num_receiver, type_course, paymentMethod, navigation, 'up');

        /* if (type_package == '' || value_package == '' || place_sender == '' ||
            spec_place_sender == '' || place_receiver == '' || spec_place_receiver == '' ||
            name_receiver == '' || !reg_numero.test(num_receiver) || type_course == '' || paymentMethod == '') {

            Alert.alert('Oups ! Attention', 'Renseignez convenablement les champs SVP');
            //this.setState({ loading: false })
        } else {
            this.props.addCourse(this.props.token, this.props.fullName, this.props.number,
                type_package, value_package, weight_package, place_sender, spec_place_sender,
                place_receiver, spec_place_receiver, name_receiver, num_receiver, type_course, paymentMethod, navigation);
        } */

    }
    searchDeliveryPrice = (place_sender, place_receiver) => {
        /* console.log('searchDeliveryPrice');
        console.log(place_sender);
        console.log(place_receiver);
 */

        if (place_sender !== '' && place_receiver !== '') {

            this.props.searchDeliveryPrice(place_sender, place_receiver);
        }
    }

    onCancel = () => {
        this.setState({
            visible: false,
        });
    }
    setModalVisible = (visible, who) => {
        this.setState({ modalVisible: visible });
        this.setState({ who: who });
    }

    searchStreet = () => {
        //console.log(city);

        //this.setState({ researchValues: this.state.places.filter(place => place.searchKey == city) })
        //console.log(this.state.researchValues);

    }
    cleanSearch = () => {
        //console.log(city);


    }
    render() {

        let typ_pack = [
            {
                value: 'Colis',
            },
            {
                value: 'Documents',
            }
        ];

        let typ_course = [
            {
                value: 'Normale',
            },
            {
                value: 'Importante',
            },
        ];

        const DATA = this.props.places;
        const { modalVisible } = this.state;

        //const { loading } = this.state;
        const who = this.state.who;
        //console.log(DATA);

        return (

            <ScrollView>
                {this.props.shownError === true && this.props.error !== null
                    ? myAlert(this.props.titleError, this.props.error)
                    : null}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                /* onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }} */
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            {/* <SearchBar
                                onChange={this.searchStreet}
                                placeholder="Entrer la comune"
                                cancelText="Supprimer"

                            /> */}
                            <FlatList
                                style={styles.list}
                                data={DATA}
                                renderItem={({ item }) =>
                                    <TouchableOpacity style={styles.viewList} onPress={async () => {
                                        //console.log(who);

                                        if (who === 'sender') {
                                            this.setState({
                                                place_sender: item,
                                            });
                                        } else {
                                            this.setState({
                                                place_receiver: item,
                                            });
                                        }
                                        this.setModalVisible(false);
                                        //console.log(this.state.place_sender);

                                    }}>
                                        <Text style={styles.textList} > {item.name}</Text>
                                    </TouchableOpacity>
                                }
                                keyExtractor={item => item.id.toString()}

                            />

                            <MyButton
                                nameBtn={'Retour'}
                                loading={this.props.loading}
                                onPress={() => {
                                    this.setModalVisible(!modalVisible);
                                }}
                            />



                        </View>
                    </View>
                </Modal>

                <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
                    <Accordion.Panel header="Expediteur">

                        <List style={styles.listInput}>
                            <View style={styles.InputContainer}>

                                <Dropdown
                                    label="Quel est le genre du colis"

                                    onChangeText={text => this.setState({ type_package: text })}
                                    value={this.state.type_package}
                                    placeholderTextColor={Colors.grey}
                                    underlineColorAndroid="transparent"
                                    data={typ_pack}
                                //style={styles.textSelect}
                                />
                                {/*<Picker
                                    style={styles.body}
                                    selectedValue={this.state.type_package}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Java" value="java" />
                                    <Picker.Item label="JavaScript" value="js" />
                                    <Picker.Item label="Java" value="java" />
                                </Picker> */}
                            </View>
                            <View style={styles.InputContainer}>
                                <TextInput
                                    style={styles.body}
                                    placeholder="Quelle est la valeur net du colis"
                                    onChangeText={text => this.setState({ value_package: text })}
                                    value={this.state.value_package}
                                    placeholderTextColor={Colors.grey}
                                    underlineColorAndroid="transparent"
                                    keyboardType="numeric"
                                />
                            </View>
                            <View style={styles.InputContainer}>
                                <TextInput
                                    style={styles.body}
                                    placeholder="Quel est le libellé du colis"
                                    onChangeText={text => this.setState({ libelle_package: text })}
                                    value={this.state.libelle_package}
                                    placeholderTextColor={Colors.grey}
                                    underlineColorAndroid="transparent"
                                />
                            </View>

                            <View style={styles.InputContainer}>
                                <TextInput
                                    style={styles.body}
                                    placeholder="Poids du colis en kg.(ex: 0.5 kg)"
                                    onChangeText={text => this.setState({ weight_package: text })}
                                    value={this.state.weight_package}
                                    placeholderTextColor={Colors.grey}
                                    underlineColorAndroid="transparent"
                                    keyboardType="numeric"
                                />
                            </View>
                            <View style={styles.InputContainer}>
                                <Text
                                    onPress={() => {
                                        this.setModalVisible(true, 'sender');
                                    }} style={styles.textSelect} > Selectionner la commune de votre position: {this.state.place_sender.name}
                                </Text>
                            </View>
                            <View style={styles.InputContainer}>
                                <TextInput
                                    style={styles.specify}
                                    multiline
                                    placeholder="Donner plus de precision sur votre position afin de facilité la rencontre"
                                    onChangeText={text => this.setState({ spec_place_sender: text })}
                                    value={this.state.spec_place_sender}
                                    placeholderTextColor={Colors.grey}
                                    underlineColorAndroid="transparent"
                                />
                            </View>

                        </List>


                    </Accordion.Panel>

                    <Accordion.Panel header="Destinataire">
                        <List style={styles.listInput}>
                            <View style={styles.InputContainer}>
                                <Text
                                    onPress={() => {
                                        this.setModalVisible(true, 'receiver');
                                    }} style={styles.textSelect} > Selectionner la commune de sa position: {this.state.place_receiver.name}
                                </Text>
                                {/* <TextInput
                                    multiline
                                    //numberOfLines="3"
                                    style={styles.body}
                                    placeholder="Donner la commune et le quartier où le recepteur se trouve (ex: Adjamé/Liberté)"
                                    onChangeText={text => this.setState({ place_receiver: text })}
                                    value={this.state.place_receiver}
                                    placeholderTextColor={Colors.grey}
                                    underlineColorAndroid="transparent"
                                /> */}
                            </View>
                            <View style={styles.InputContainer}>
                                <TextInput
                                    style={styles.specify}
                                    multiline
                                    placeholder="Donner plus de precision sur sa position afin de facilité la livraison"
                                    onChangeText={text =>
                                        this.setState({ spec_place_receiver: text })
                                    }
                                    value={this.state.spec_place_receiver}
                                    placeholderTextColor={Colors.grey}
                                    underlineColorAndroid="transparent"
                                    onFocus={() => this.searchDeliveryPrice(this.state.place_sender, this.state.place_receiver)}
                                />
                            </View>

                            <View style={styles.InputContainer}>
                                <TextInput
                                    style={styles.body}
                                    placeholder="Entrer son nom"
                                    onChangeText={text => this.setState({ name_receiver: text })}
                                    value={this.state.name_receiver}
                                    placeholderTextColor={Colors.grey}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <View style={styles.InputContainer}>
                                <TextInput
                                    style={styles.body}
                                    placeholder="Entrer son numero "
                                    onChangeText={text => this.setState({ num_receiver: text })}
                                    value={this.state.num_receiver}
                                    placeholderTextColor={Colors.grey}
                                    underlineColorAndroid="transparent"
                                    keyboardType="number-pad"
                                    maxLength={ConstApp.LengthTel}
                                />
                            </View>
                            <View style={styles.InputContainer}>
                                <Dropdown
                                    label="Quel est le genre de la course"
                                    style={styles.body}
                                    onChangeText={text => this.setState({ type_course: text })}
                                    value={this.state.type_course}
                                    placeholderTextColor={Colors.grey}
                                    underlineColorAndroid="transparent"
                                    data={typ_course}
                                />
                            </View>
                        </List>
                    </Accordion.Panel>

                </Accordion>
                <List>
                    <Text style={{ marginTop: 12 }}>
                        Choisissez votre mode de paiement:
                    </Text>

                    <RadioItem

                        checked={this.state.paymentMethod === 1}
                        onChange={event => {
                            if (event.target.checked) {
                                this.setState({ paymentMethod: 1 });
                            }
                        }}
                    >
                        À la reception du colis
                    </RadioItem>
                    <RadioItem
                        checked={this.state.paymentMethod === 2}
                        onChange={event => {
                            if (event.target.checked) {
                                this.setState({ paymentMethod: 2 });
                            }
                        }}
                    >
                        À la livraison du colis
                    </RadioItem>
                </List>
                <WhiteSpace size="lg" />
                {this.props.price === null ? null :
                    <NoticeBar
                        marqueeProps={{
                            loop: true, style: {
                                fontSize: 12, color: 'red', fontWeight: 'bold', lineHeight: 19,
                                textAlign: 'center',
                            }
                        }}
                    >
                        Frais de la livraison: {this.props.price} FCFA
                    </NoticeBar>
                }
                <View style={{ flex: 1, alignItems: 'center', }}>
                    <MyButton
                        nameBtn={'Envoi'}
                        loading={this.props.loading}
                        onPress={this.addCourse}
                    />
                </View>


            </ScrollView>

        );
    }
}


const mapStateToProps = state => ({
    number: state.reducerAuth.number,
    fullName: state.reducerAuth.fullName,
    token: state.reducerAuth.token,
    loading: state.reducerCourses.loading,
    error: state.reducerCourses.error,
    titleError: state.reducerCourses.titleError,
    shownError: state.reducerCourses.shownError,
    price: state.reducerCourses.price,
    places: state.reducerCourses.places,

});
const mapDispatchToProps = dispatch => {
    return {
        addCourse: (token, name_sender, number_sender, type_package,
            value_package,
            weight_package,
            place_sender,
            spec_place_sender,
            place_receiver,
            spec_place_receiver,
            name_receiver,
            num_receiver,
            type_course, paymentMethod, navigation, way) =>
            dispatch(actions.addCourse(token, name_sender, number_sender, type_package,
                value_package,
                weight_package,
                place_sender,
                spec_place_sender,
                place_receiver,
                spec_place_receiver,
                name_receiver,
                num_receiver,
                type_course, paymentMethod, navigation, way)),
        searchDeliveryPrice: (place_sender, place_receiver) =>
            dispatch(actions.searchDeliveryPrice(place_sender, place_receiver)),
        fetchPlaces: () => dispatch(actions.fetchPlaces()),
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddCourseScreen);
