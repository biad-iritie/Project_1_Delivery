import * as actionTypes from '../actions/ActionTypes';
import { updateObject } from '../utility';
import treatError from '../../components/TreatError';

const initialState = {
    loading: true,
    numero: "",
    fullName: "",
    email: "",
    token: "",
    id_type_user: 2,
    error: null,
    titleError: null

}