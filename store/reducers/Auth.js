/* eslint-disable prettier/prettier */
import * as actionTypes from '../actions/ActionTypes';
import { updateObject } from '../utility';
import treatError from '../../components/TreatError';
import ConstApp from '../../constants/ConstApp';
const initialState = {
    loading: false,
    numero: '',
    fullName: '',
    email: '',
    token: '',
    id_type_user: ConstApp.ID_TYPE_CUSTOMER,
    error: null,
    titleError: null,
    shownError: false,
};

const authStart = (state, action) => {
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

const authSuccess = (state, action) => {
    //console.log('reducer');

    return updateObject(state, {
        number: action.number,
        fullName: action.fullName,
        email: action.email,
        token: action.token,
        id_type_user: action.id_type_user,
        error: null,
        loading: false,
    });
};
const authFail = (state, action) => {

    const { titleError, error } = action.error !== null ? treatError(action.error) : null;
    if (action.error === null) {
        this.titleError = null;
        this.error = null;
    }
    console.log('--reducer authFail');
    //console.log(`${titleError}  ${error}`);
    return updateObject(state, {
        error: error,
        titleError: titleError,
        loading: false,
    });
};

const reducerAuth = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action);

        case actionTypes.AUTH_SUCCESS:

            return authSuccess(state, action);

        case actionTypes.AUTH_FAIL:
            return authFail(state, action);

        case actionTypes.DISABLE_ERROR:
            return disableError(state, action);

        default:
            /* console.log("--reducer");
                        console.log(state); */
            return state;
    }
};


export default reducerAuth;
