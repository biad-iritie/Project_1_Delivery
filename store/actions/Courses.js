/* eslint-disable prettier/prettier */
import * as actionTypes from './ActionTypes';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import ConstApp from '../../constants/ConstApp';

axios.defaults.timeout = ConstApp.TIMEOUT_SERVER;

export const startLoading = () => {
    return {
        type: actionTypes.START_LAODING,
    };
};
export const disableError = () => {
    return {
        type: actionTypes.DISABLE_ERROR,
    };
};

export const fetchSuccess = (courses) => {
    return {
        type: actionTypes.FETCH_SUCCESS,
        courses: courses,
    };
};
export const fetchFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    };
};

export const addCourse = (token, name_sender, number_sender, type_package,
    value_package,
    weight_package,
    place_sender,
    spec_place_sender,
    place_receiver,
    spec_place_receiver,
    name_receiver,
    num_receiver,
    type_course, navigation) => {
    return dispatch => {
        alert('OK');
    };
};
