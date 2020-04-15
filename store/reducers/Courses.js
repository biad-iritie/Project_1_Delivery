/* eslint-disable prettier/prettier */
import * as actionTypes from '../actions/ActionTypes';
import { updateObject } from '../utility';
import treatError from '../../components/TreatError';

const initialState = {
    loading: false,
    courses: [],
    error: null,
    titleError: null,
    shownError: false,
    price: null,
    places: [],
};
const startLoading = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
        shownError: true,
    });
};
const disableError = (state, action) => {
    return updateObject(state, {
        shownError: false,
    });
};

const fetchSuccess = (state, action) => {
    //console.log('reducer');

    return updateObject(state, {
        courses: action.courses,
        error: null,
        loading: false,
    });
};
const fetchAddUp = (state, action) => {
    //console.log('reducer');

    return {
        courses: [...action.courses, ...state.courses],
        error: null,
        loading: false,
    }
};
const fetchAddDown = (state, action) => {
    //console.log('reducer');

    return updateObject(state, {
        courses: action.courses,
        error: null,
        loading: false,
    });
};

const getplaces = (state, action) => {
    //console.log('reducer');

    return updateObject(state, {
        places: action.places,
        error: null,
        loading: false,
    });
};

const fetchFail = (state, action) => {
    const { titleError, error } = treatError(action.error);
    console.log('--reducerCourse fetchFail');
    console.log(`${titleError}  ${error}`);
    return updateObject(state, {
        error: error,
        titleError: titleError,
        loading: false,
    });
};
const deliveryPrice = (state, action) => {

    return updateObject(state, {
        price: action.price,
    });
};
const reducerCourses = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_LAODING:
            return startLoading(state, action);

        case actionTypes.FETCH_SUCCESS:
            return fetchSuccess(state, action);

        case actionTypes.FETCH_FAIL:
            return fetchFail(state, action);
        case actionTypes.DISABLE_ERROR:
            return disableError(state, action);
        case actionTypes.DELIVERY_PRICE:
            return deliveryPrice(state, action);
        case actionTypes.GET_PLACES:
            return getplaces(state, action);
        case actionTypes.FETCH_ADD_DOWN:
            return fetchAddDown(state, action);
        case actionTypes.FETCH_ADD_UP:
            return fetchAddUp(state, action);

        default:
            /* console.log("--reducer");
                        console.log(state); */
            return state;
    }
};

export default reducerCourses;
