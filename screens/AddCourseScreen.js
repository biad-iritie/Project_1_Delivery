/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    ScrollView,
    Text,
    TouchableOpacity,
    Picker,
    View,
    Alert,
    TouchableHighlight,
    Modal,
    FlatList
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
            price: 1000,
            activeSections: [2, 0],
            part1Value: 1,
            part2Value: 1,
            modalVisible: false,
            places: [
                {
                    id: '1',
                    title: 'First Item',
                    searchKey: 'abidjan',
                },
                {
                    id: '2',
                    title: 'Second Item',
                    searchKey: 'abidjan',
                },
                {
                    id: '3',
                    title: 'Third Item',
                    searchKey: 'san Pedro',
                },
                {
                    id: '4',
                    title: 'First Item',
                    searchKey: 'abidjan',
                },
                {
                    id: '5',
                    title: 'Second Item',
                    searchKey: 'abidjan',
                },
                {
                    id: '6',
                    title: 'Third Item',
                    searchKey: 'daloa',
                },
                {
                    id: '7',
                    title: 'First Itemasdkjnasdjnasl',
                    searchKey: 'daloa',
                },
                {
                    id: '8',
                    title: 'Second Item',
                    searchKey: 'daloa'
                },
                {
                    id: '58694a0f-3da1-sdc-bd96-145571e29d72',
                    title: 'Third Item',
                    searchKey: 'san Pedro'
                },
                {
                    id: 'bd7acbea-c1b1sdds-46c2-aed5-3ad53abb28ba',
                    title: 'First Item',
                    searchKey: 'san Pedro'
                },
                {
                    id: 'sd-c605-48d3-a4f8-fbd91aa97f63',
                    title: 'Second Item',
                    searchKey: 'san Pedro'
                },
                {
                    id: 'sddssd-3da1-471f-bd96-145571e29d72',
                    title: 'Third Item',
                    searchKey: 'san Pedro'
                },
            ],
            researchValues: []
        };

        this.onChange = activeSections => {
            this.setState({ activeSections });
        };
        this.addCourse = this.addCourse.bind(this);

        this.onCancel = this.onCancel.bind(this);
        this.searchStreet = this.searchStreet.bind(this);
        this.selectPlace = this.selectPlace.bind(this);
        //this.item = this.item.bind(this);
        //const count = 0;

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
        this.props.addCourse(null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    }
    onCancel = () => {
        this.setState({
            visible: false,
        });
    }
    setModalVisible = (visible, who) => {
        this.setState({ modalVisible: visible });
        this.who = who;
    }
    selectPlace = (place) => {


        console.log("this.state.spec_place_sender");
        //console.log(this.state.spec_place_sender);

        //this.setModalVisible(false);

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
                value: 'Immediate',
            },
            {
                value: 'Lendemain',
            },
        ];

        const DATA = this.state.places;
        const { modalVisible } = this.state;

        const { loading } = this.state;
        return (

            <ScrollView>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
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
                                    <TouchableOpacity style={styles.viewList} onPress={() => {
                                        if (this.who === 'sender') {
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
                                        <Text style={styles.textList} > {item.title}</Text>
                                    </TouchableOpacity>
                                }
                                keyExtractor={item => item.id}

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
                <TouchableHighlight
                    style={styles.openButton}
                    onPress={() => {
                        this.setModalVisible(true);
                    }}
                >
                    <Text style={styles.textStyle}>Show Modal</Text>
                </TouchableOpacity>
                <Accordion onChange={this.onChange} activeSections={this.state.activeSections}>
                    <Accordion.Panel header="Expediteur">
                        <List >
                            <View style={styles.InputContainer}>

                                <Dropdown
                                    label="Quel est le genre du colis"
                                    style={styles.body}
                                    onChangeText={text => this.setState({ type_package: text })}
                                    value={this.state.type_package}
                                    placeholderTextColor={Colors.grey}
                                    underlineColorAndroid="transparent"
                                    data={typ_pack}
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
                                    placeholder="Quel la valeur approx du colis"
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
                                    placeholder="Poids du colis en kg.(ex: 0.5 kg)"
                                    onChangeText={text => this.setState({ weight_package: text })}
                                    value={this.state.weight_package}
                                    placeholderTextColor={Colors.grey}
                                    underlineColorAndroid="transparent"
                                    keyboardType="numeric"
                                />
                            </View>
                            <View style={styles.InputContainer}>
                                <TextInput
                                    //numberOfLines="3"
                                    style={styles.body}
                                    placeholder="Selectionner votre lieu"
                                    onFocus={() => {
                                        this.setModalVisible(true, 'sender')
                                    }}
                                    //onChangeText={text => this.setState({ place_sender: text })}
                                    value={"Abidjan / " + this.state.place_sender.title}
                                    placeholderTextColor={Colors.grey}
                                    underlineColorAndroid="transparent"
                                //editable="false"
                                />
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
                        <List>
                            <View style={styles.InputContainer}>
                                <TextInput
                                    multiline
                                    //numberOfLines="3"
                                    style={styles.body}
                                    placeholder="Donner la commune et le quartier où le recepteur se trouve (ex: Adjamé/Liberté)"
                                    onChangeText={text => this.setState({ place_receiver: text })}
                                    value={this.state.place_receiver}
                                    placeholderTextColor={Colors.grey}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <View style={styles.InputContainer}>
                                <TextInput
                                    style={styles.specify}
                                    multiline
                                    placeholder="Donner plus de precision sur la position du recepteur afin de facilité la livraison"
                                    onChangeText={text =>
                                        this.setState({ spec_place_receiver: text })
                                    }
                                    value={this.state.spec_place_receiver}
                                    placeholderTextColor={Colors.grey}
                                    underlineColorAndroid="transparent"
                                />
                            </View>

                            <View style={styles.InputContainer}>
                                <TextInput
                                    style={styles.body}
                                    placeholder="Entrer le nom du recepteur"
                                    onChangeText={text => this.setState({ name_receiver: text })}
                                    value={this.state.name_receiver}
                                    placeholderTextColor={Colors.grey}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <View style={styles.InputContainer}>
                                <TextInput
                                    style={styles.body}
                                    placeholder="Entrer le numero du recepteur"
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

                        checked={this.state.part2Value === 1}
                        onChange={event => {
                            if (event.target.checked) {
                                this.setState({ part2Value: 1 });
                            }
                        }}
                    >
                        À la reception du colis
                    </RadioItem>
                    <RadioItem
                        checked={this.state.part2Value === 2}
                        onChange={event => {
                            if (event.target.checked) {
                                this.setState({ part2Value: 2 });
                            }
                        }}
                    >
                        À la livraison du colis
                    </RadioItem>
                </List>
                <WhiteSpace size="lg" />
                {this.state.price === null ? null :
                    <NoticeBar
                        marqueeProps={{
                            loop: true, style: {
                                fontSize: 12, color: 'red', fontWeight: 'bold', lineHeight: 19,
                                textAlign: 'center',
                            }
                        }}
                    >
                        Frais de la livraison: {this.state.price} FCFA
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
            type_course, navigation) =>
            dispatch(actions.addCourse(token, name_sender, number_sender, type_package,
                value_package,
                weight_package,
                place_sender,
                spec_place_sender,
                place_receiver,
                spec_place_receiver,
                name_receiver,
                num_receiver,
                type_course, navigation)),
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddCourseScreen);
