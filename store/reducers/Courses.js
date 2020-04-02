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

const fetchFail = (state, action) => {
    const { titleError, error } = treatError(action.error);
    console.log('--reducerCourse authFail');
    console.log(`${titleError}  ${error}`);
    return updateObject(state, {
        error: error,
        titleError: titleError,
        loading: false,
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

        default:
            /* console.log("--reducer");
                        console.log(state); */
            return state;
    }
};

export default reducerCourses;
