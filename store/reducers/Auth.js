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
};

const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
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
    const { titleError, error } = treatError(action.error);
    console.log('--reducer authFail');
    console.log(`${titleError}  ${error}`);
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

        default:
            /* console.log("--reducer");
                        console.log(state); */
            return state;
    }
};
/* function auth(state = initialState, action) {
    let nextState
    switch (action.type) {
        case "Login":
            return {
                ...state,
                isLoggedIn: true,
                numero: action.user.numero,
                fullName: action.user.fullName,
                email: action.user.email,
                idType_User: action.user.idType_User,
            };
        default:
            return state
    }
} */

//export default auth;

export default reducerAuth;
