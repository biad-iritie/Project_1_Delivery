import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AppStyles } from '../constants/AppStyles';
import Colors from '../constants/Colors';
import Button from 'react-native-button';
import ConstApp from '../constants/ConstApp';
import { Dropdown } from 'react-native-material-dropdown';

class AddCourseScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            user_token: '',
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
        };
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('Title', 'Nouvelle course'),
        };
    };
    render() {
        let typ_pack = [
            {
                value: 'Banana',
            },
            {
                value: 'Mango',
            },
            {
                value: 'Pear',
            },
        ];
        let typ_course = [
            {
                value: 'Immediate',
            },
            {
                value: 'Lendemain',
            },
        ];
        const { loading } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
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
                    </View>
                    {/* <View style={styles.InputContainer}>
                        <TextInput

                            style={styles.body}
                            placeholder="Quel est le genre du colis"
                            onChangeText={text => this.setState({ type_package: text })}
                            value={this.state.type_package}
                            placeholderTextColor={Colors.grey}
                            underlineColorAndroid="transparent"
                        />
                    </View> */}

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
                            placeholder="Poids du colis en gramme "
                            onChangeText={text => this.setState({ weight_package: text })}
                            value={this.state.weight_package}
                            placeholderTextColor={Colors.grey}
                            underlineColorAndroid="transparent"
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.InputContainer}>
                        <TextInput
                            multiline
                            //numberOfLines="3"
                            style={styles.body}
                            placeholder="Donner la commune et le quartier (ex: Adjamé/Liberté)"
                            onChangeText={text => this.setState({ place_sender: text })}
                            value={this.state.place_sender}
                            placeholderTextColor={Colors.grey}
                            underlineColorAndroid="transparent"
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
                    <Button
                        containerStyle={styles.loginContainer}
                        style={styles.loginText}
                        disabled={loading ? true : false}
                        onPress={() => this.onPressLogin()}>
                        {loading ? (
                            <ActivityIndicator size="small" color={Colors.tintColor2} />
                        ) : (
                                'Envoi'
                            )}
                    </Button>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        /* alignItems: "center",
                            justifyContent: "center",
                     */
    },
    contentContainer: {
        //backgroundColor: 'red',
        //marginLeft: 70,
        alignItems: 'center',
        paddingTop: 3,
        paddingBottom: 200,
    },
    or: {
        //fontFamily: AppStyles.fontName.main,
        color: 'black',
        marginTop: 40,
        marginBottom: 10,
    },
    title: {
        fontSize: AppStyles.fontSize.title,
        fontWeight: 'bold',
        color: Colors.tintColor1,
        marginTop: 20,
        marginBottom: 20,
    },
    leftTitle: {
        alignSelf: 'stretch',
        textAlign: 'left',
        marginLeft: 20,
    },
    content: {
        paddingLeft: 50,
        paddingRight: 50,
        textAlign: 'center',
        fontSize: AppStyles.fontSize.content,
        color: Colors.text,
    },
    loginContainer: {
        width: AppStyles.buttonWidth.main,
        backgroundColor: Colors.tintColor1,
        borderRadius: AppStyles.borderRadius.main,
        padding: 10,
        marginTop: 30,
    },
    loginText: {
        color: Colors.white,
    },
    placeholder: {
        fontFamily: AppStyles.fontName.text,
        color: 'red',
    },
    InputContainer: {
        width: AppStyles.textInputWidth.main,
        marginTop: 30,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: Colors.grey,
        borderRadius: AppStyles.borderRadius.main,
    },
    body: {
        height: 42,
        paddingLeft: 20,
        paddingRight: 20,
        color: Colors.text,
    },
    specify: {
        height: 100,
        paddingLeft: 20,
        paddingRight: 20,
        color: Colors.text,
    },
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddCourseScreen);
