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

export const authLogin = (number, password, navigation) => {

    return dispatch => {
        dispatch(authStart());

        //console.log(navigation);
        /* try {
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
        } */
        axios
            .post(ConstApp.SERVER + 'user/login', {
                phone: number,
                password: password,
            })
            .then(res => {
                if (res.data.code === 1) {
                    const token = res.data.token;
                    try {
                        //ADD the information on Local storage
                        AsyncStorage.setItem('@User:token', token);
                        AsyncStorage.setItem('@User:id_type_user', res.data.id_type_user);
                        AsyncStorage.setItem('@User:number', res.data.numero);
                        AsyncStorage.setItem('@User:email', res.data.email);
                        AsyncStorage.setItem('@User:fullName', res.data.name);

                        dispatch(
                            authSuccess(
                                token,
                                res.data.id_type_user,
                                res.data.numero,
                                res.data.fullName,
                                res.data.email,
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

            })
            .catch(err => {
                console.log('error catch');
                //console.log(err);
                dispatch(authFail(err));

            });
        dispatch(disableError());
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
                console.log('RES');
                console.log(typeof res.data.code);
                if (res.data.code === 1) {
                    const token = res.data.token;
                    try {
                        //ADD the information on Local storage
                        AsyncStorage.setItem('@User:token', token);
                        AsyncStorage.setItem('@User:id_type_user', id_type_user);
                        AsyncStorage.setItem('@User:number', number);
                        AsyncStorage.setItem('@User:email', email);
                        AsyncStorage.setItem('@User:fullName', fullName);

                        dispatch(authSuccess(token, id_type_user, number, fullName, email));

                        navigation.navigate('Main');
                    } catch (error) {
                        console.log('Local storage');
                        console.log(error);
                        dispatch(authFail(error));
                    }
                } else {
                    console.log('res.data.status == error');
                    dispatch(authFail(res.data.message));
                }
                //dispatch(disableError());
            })
            .catch(err => {
                console.log('error catch');
                console.log(err);
                dispatch(authFail(err));
                //dispatch(disableError());
            });
        dispatch(disableError());
    };
};
