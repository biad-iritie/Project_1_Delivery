/* eslint-disable prettier/prettier */
import * as actionTypes from './ActionTypes';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import ConstApp from '../../constants/ConstApp';

axios.defaults.timeout = ConstApp.TIMEOUT_SERVER;

export const fetchStart = () => {
    return {
        type: actionTypes.AUTH_START,
    };
};

export const authSuccess = (courses) => {
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
