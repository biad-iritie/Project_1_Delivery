import * as actionTypes from './ActionTypes';
import axios from 'axios';
//import AsyncStorage from "@react-native-community/async-storage";
import ConstApp from '../../constants/ConstApp';

axios.defaults.timeout = ConstApp.TIMEOUT_SERVER;

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
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
        //dispatch(authSuccess(123, 1, number, 'Boli'))
        //console.log(navigation);
        axios
            .post(ConstApp.SERVER + '/user/login', {
                telephone: number,
                password: password,
            })
            .then(res => {
                if (res.data.status == 'error') {
                    console.log('res.data.status == error');
                    dispatch(authFail(res.data.messages));
                } else {
                    const token = res.data.token;
                    try {
                        //ADD the information on Local storage
                        // eslint-disable-next-line no-undef
                        AsyncStorage.setItem('@User:token', token);
                        // eslint-disable-next-line no-undef
                        AsyncStorage.setItem('@User:id_type_user', res.data.id_type_user);
                        // eslint-disable-next-line no-undef
                        AsyncStorage.setItem('@User:number', res.data.numero);
                        // eslint-disable-next-line no-undef
                        AsyncStorage.setItem('@User:email', res.data.email);
                        // eslint-disable-next-line no-undef
                        AsyncStorage.setItem('@User:fullName', res.data.fullName);

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
                        dispatch(authFail(err));
                    }
                }
            })
            .catch(err => {
                console.log('error catch');
                console.log(err);
                dispatch(authFail(err));
            });
    };
};

export const authSignUp = (
    number,
    fullName,
    email,
    password,
    re_password,
    id_type_user,
    navigation,
) => {
    return dispatch => {
        dispatch(authStart());
        //dispatch(authSuccess(123, id_type_user, number, fullName))
        //console.log(navigation);
        //navigation.navigate('Main');
        try {
            //appel de l api

            // eslint-disable-next-line no-undef
            AsyncStorage.setItem('@User:token', '143124325454d45354bSX');
            // eslint-disable-next-line no-undef
            AsyncStorage.setItem('@User:typeUser', id_type_user);
            // eslint-disable-next-line no-undef
            AsyncStorage.setItem('@User:number', number);
            // eslint-disable-next-line no-undef
            AsyncStorage.setItem('@User:email', email);
            // eslint-disable-next-line no-undef
            AsyncStorage.setItem('@User:fullName', fullName);

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
        }
        //full code
        /* dispatch(authStart())
                axios.post(ConstApp.SERVER + "user/create", {
                    telephone: number,
                    fullName: fullName,
                    email: email,
                    password: password,
                    password2: re_password
                })
                    .then(res => {
                        if (res.data.status == "error") {
                            console.log('res.data.status == error');
                            dispatch(authFail(res.data.messages))
                        } else {
                            const token = res.data.token;
                            try {
    
                                //ADD the information on Local storage
                                AsyncStorage.setItem('@User:token', token);
                                AsyncStorage.setItem('@User:id_type_user', id_type_user);
                                AsyncStorage.setItem('@User:number', number);
                                AsyncStorage.setItem('@User:email', email);
                                AsyncStorage.setItem('@User:fullName', fullName);
    
                                dispatch(authSuccess(token, id_type_user, number, fullName, email))
    
                                navigation.navigate('Main');
                            } catch (error) {
                                console.log('Local storage');
                                console.log(error);
                                dispatch(authFail(err))
    
                            }
                        }
    
    
                    })
                    .catch(err => {
                        console.log('error catch');
                        console.log(err);
                        dispatch(authFail(err))
                    }) */
    };
};
