/* eslint-disable no-unreachable */
/* eslint-disable prettier/prettier */
import * as actionTypes from './ActionTypes';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import ConstApp from '../../constants/ConstApp';


axios.defaults.timeout = ConstApp.TIMEOUT_SERVER;

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    };
};
export const disableError = () => {
    return {
        type: actionTypes.DISABLE_ERROR,
    };
};
export const authSuccess = (token, id_type_user, number, fullName, email) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        id_type_user: id_type_user,
        number: number,
        fullName: fullName,
        email: email,
    };
};

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    };
};

export const authCheckState = () => {
    return dispatch => { };
};

export const authLogin = (who, number, password, navigation) => {

    return dispatch => {
        dispatch(authStart());

        //console.log(navigation);
        /*try {
            //appel de l api
            AsyncStorage.setItem('token', '143124325454d45354bSX');
            AsyncStorage.setItem('type', JSON.stringify(1));
            AsyncStorage.setItem('number', JSON.stringify(12345678));
            AsyncStorage.setItem('email', 'b@df.com');
            AsyncStorage.setItem('fullName', 'Boli');

            dispatch(authSuccess('143124325454d45354bSX', '1', 12345678, 'Boli', 'b@df.com'));

            navigation.navigate('Main');
        } catch (error) {
            // Error saving data
            console.log(error);

            dispatch(authFail(error));
        }*/

        axios
            .post(ConstApp.SERVER + 'user/login', {
                phone: number,
                password: password,
            })
            .then(res => {
                console.log(res.data);
                if (res.data.code === 1) {
                    const token = res.data.token;
                    const name = res.data.data.name;
                    const email = res.data.data.email;
                    //console.log("Local storage");

                    try {
                        //ADD the information on Local storage
                        AsyncStorage.setItem('token', token);
                        AsyncStorage.setItem('type', who);
                        AsyncStorage.setItem('number', number);
                        AsyncStorage.setItem('email', email);
                        AsyncStorage.setItem('fullName', name);

                        dispatch(
                            authSuccess(
                                token,
                                who,
                                number,
                                name,
                                email,
                            ),
                        );

                        navigation.navigate('Main');
                    } catch (error) {
                        console.log('Local storage');
                        console.log(error);
                        dispatch(authFail(error));
                    }
                }
                else {
                    console.log('res.data.status == 0');

                    dispatch(authFail(res.data.message));
                }
                dispatch(disableError());
            })
            .catch(err => {
                console.log('error catch');
                //console.log(err);
                dispatch(authFail(err));
                dispatch(disableError());
            });

    };
};
const logOut = () => {
    return {
        type: actionTypes.LOGOUT,
    };
};
export const authLogOut = (token, navigation) => {
    return dispatch => {
        dispatch(authStart());

        //console.log(navigation);
        try {
            //appel de l api
            AsyncStorage.removeItem('token');
            AsyncStorage.removeItem('type');
            AsyncStorage.removeItem('number');
            AsyncStorage.removeItem('email');
            AsyncStorage.removeItem('fullName');

            dispatch(logOut());
            navigation.reset({
                index: 0,
                routes: [{ name: 'Welcome' }],
            });
            //navigation.navigate('Welcome');
        } catch (error) {
            // Error saving data
            console.log(error);

            dispatch(authFail(error));
        }

        /* axios
            .post(ConstApp.SERVER + 'user/login', {
                phone: number,
                password: password,
            })
            .then(res => {
                console.log(res.data);
                if (res.data.code === 1) {
                    const token = res.data.token;
                    const name = res.data.data.name;
                    const email = res.data.data.email;
                    //console.log("Local storage");

                    try {
                        //ADD the information on Local storage
                        AsyncStorage.setItem('token', token);
                        AsyncStorage.setItem('type', who);
                        AsyncStorage.setItem('number', number);
                        AsyncStorage.setItem('email', email);
                        AsyncStorage.setItem('fullName', name);

                        dispatch(
                            authSuccess(
                                token,
                                who,
                                number,
                                name,
                                email,
                            ),
                        );

                        navigation.navigate('Main');
                    } catch (error) {
                        console.log('Local storage');
                        console.log(error);
                        dispatch(authFail(error));
                    }
                }
                else {
                    console.log('res.data.status == 0');

                    dispatch(authFail(res.data.message));
                }
                dispatch(disableError());
            })
            .catch(err => {
                console.log('error catch');
                //console.log(err);
                dispatch(authFail(err));
                dispatch(disableError());
            }); */

    };
};

export const authSignUp = (
    number,
    fullName,
    email,
    password,
    id_type_user,
    navigation,
) => {
    return dispatch => {

        //dispatch(authSuccess(123, id_type_user, number, fullName))
        //console.log('Action Auth');

        //console.log(navigation);
        //navigation.navigate('Main');
        /* dispatch(authStart());
        try {
            //appel de l api
            AsyncStorage.setItem('token', '143124325454d45354bSX');
            AsyncStorage.setItem('type', JSON.stringify(id_type_user));
            AsyncStorage.setItem('number', number);
            AsyncStorage.setItem('email', email);
            AsyncStorage.setItem('fullName', fullName);

            dispatch(
                authSuccess(
                    '143124325454d45354bSX',
                    id_type_user,
                    number,
                    fullName,
                    email,
                ),
            );

            navigation.navigate('Main');
        } catch (error) {
            // Error saving data
            console.log(error);

            dispatch(authFail(error));
        } */
        //full code
        dispatch(authStart());
        axios.post(ConstApp.SERVER + 'user/register', {
            phone: number,
            name: fullName,
            email: email,
            password: password,
        })
            .then(res => {
                //console.log('RES');
                //console.log(typeof res.data.code);
                if (res.data.code === 1) {
                    const token = res.data.token;
                    try {
                        //ADD the information on Local storage
                        AsyncStorage.setItem('token', JSON.stringify(token));
                        AsyncStorage.setItem('type', JSON.stringify(ConstApp.ID_TYPE_CUSTOMER));
                        AsyncStorage.setItem('number', JSON.stringify(number));
                        AsyncStorage.setItem('email', JSON.stringify(email));
                        AsyncStorage.setItem('fullName', JSON.stringify(fullName));

                        dispatch(authSuccess(token, id_type_user, number, fullName, email));

                        navigation.navigate('Main');
                    } catch (error) {
                        console.log('Local storage');
                        console.log(error);
                        dispatch(authFail(error));
                    }
                } else {
                    console.log('res.data.code === 0');
                    console.log(res.data.message);

                    dispatch(authFail(res.data.message));
                }
                dispatch(disableError());
            })
            .catch(err => {
                console.log('error catch');
                console.log(err);
                dispatch(authFail(err));
                dispatch(disableError());
            });

    };
};
