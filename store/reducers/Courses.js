/* eslint-disable prettier/prettier */
import * as actionTypes from '../actions/ActionTypes';
import { updateObject } from '../utility';
import treatError from '../../components/TreatError';

const initialState = {
    loading: false,
    courses: [{ 'libelle_package': 'Chaussure', 'name_receiver': 'Bah Alain', 'name_sender': 'BIAD', 'num_receiver': '03438844', 'number_sender': '12345678', 'numero_course': '034388shxb4', 'paymentMethod': 1, 'place_receiver': { 'createdAt': '2020-04-21T00:00:00.000Z', 'id': 2, 'name': 'Abobo', 'quartiers': [Array], 'updatedAt': '2020-04-21T00:00:00.000Z', 'ville_id': 1 }, 'place_sender': { 'createdAt': '2020-04-21T00:00:00.000Z', 'id': 1, 'name': 'Adjamé', 'quartiers': [Array], 'updatedAt': '2020-04-21T00:00:00.000Z', 'ville_id': 1 }, 'spec_place_receiver': 'kewhbjdkwe wekhbfdjehwfb wejhfwjhef wejhfwjehf jwehfjwhef ejwfh wejhf efjhef qjwhvdqjhwvd qjwdvjqhwdv qjwhdqjwhdv qjwdjqvwd qjvqjwd qwjdhvqwdh qwjdhvqjwhd wjdhvqjwhd ', 'spec_place_sender': 'wdkwkc kjhcbqwe ckhebc cwjehfbwehjb jehcwjhef qwejdhvqwduyqw dqwvduyqwdhqwd qwdyw dqwyvdyqwdb', 'type_course': 'Normale', 'type_package': 'Colis', 'value_package': '20000', 'weight_package': '1' },
    { 'name_receiver': 'Bah Alain', 'name_sender': 'BIAD', 'num_receiver': '03438844', 'number_sender': '12345678', 'numero_course': '03438844', 'paymentMethod': 1, 'place_receiver': { 'createdAt': '2020-04-21T00:00:00.000Z', 'id': 2, 'name': 'Abobo', 'quartiers': [Array], 'updatedAt': '2020-04-21T00:00:00.000Z', 'ville_id': 1 }, 'place_sender': { 'createdAt': '2020-04-21T00:00:00.000Z', 'id': 1, 'name': 'Adjamé', 'quartiers': [Array], 'updatedAt': '2020-04-21T00:00:00.000Z', 'ville_id': 1 }, 'spec_place_receiver': 'kewhbjdkwe wekhbfdjehwfb wejhfwjhef wejhfwjehf jwehfjwhef ejwfh wejhf efjhef qjwhvdqjhwvd qjwdvjqhwdv qjwhdqjwhdv qjwdjqvwd qjvqjwd qwjdhvqwdh qwjdhvqjwhd wjdhvqjwhd ', 'spec_place_sender': 'wdkwkc kjhcbqwe ckhebc cwjehfbwehjb jehcwjhef qwejdhvqwduyqw dqwvduyqwdhqwd qwdyw dqwyvdyqwdb', 'type_course': 'Normale', 'type_package': 'Colis', 'value_package': '20000', 'weight_package': '1' }],
    myCourses: [{ 'libelle_package': 'Vetements', 'name_receiver': 'Bah Alain', 'name_sender': 'BIAD', 'num_receiver': '03438844', 'number_sender': '12345678', 'numero_course': '03438844', 'paymentMethod': 1, 'place_receiver': { 'createdAt': '2020-04-21T00:00:00.000Z', 'id': 2, 'name': 'Abobo', 'quartiers': [Array], 'updatedAt': '2020-04-21T00:00:00.000Z', 'ville_id': 1 }, 'place_sender': { 'createdAt': '2020-04-21T00:00:00.000Z', 'id': 1, 'name': 'Adjamé', 'quartiers': [Array], 'updatedAt': '2020-04-21T00:00:00.000Z', 'ville_id': 1 }, 'spec_place_receiver': 'kewhbjdkwe wekhbfdjehwfb wejhfwjhef wejhfwjehf jwehfjwhef ejwfh wejhf efjhef qjwhvdqjhwvd qjwdvjqhwdv qjwhdqjwhdv qjwdjqvwd qjvqjwd qwjdhvqwdh qwjdhvqjwhd wjdhvqjwhd ', 'spec_place_sender': 'wdkwkc kjhcbqwe ckhebc cwjehfbwehjb jehcwjhef qwejdhvqwduyqw dqwvduyqwdhqwd qwdyw dqwyvdyqwdb', 'type_course': 'Normale', 'type_package': 'Colis', 'value_package': '20000', 'weight_package': '1', 'status': 'Acceptée' },
    { 'name_receiver': 'Jacque iVANE', 'name_sender': 'BIAD', 'num_receiver': '03438844', 'number_sender': '12345678', 'numero_course': '3273200', 'paymentMethod': 1, 'place_receiver': { 'createdAt': '2020-04-21T00:00:00.000Z', 'id': 2, 'name': 'Abobo', 'quartiers': [Array], 'updatedAt': '2020-04-21T00:00:00.000Z', 'ville_id': 1 }, 'place_sender': { 'createdAt': '2020-04-21T00:00:00.000Z', 'id': 1, 'name': 'Adjamé', 'quartiers': [Array], 'updatedAt': '2020-04-21T00:00:00.000Z', 'ville_id': 1 }, 'spec_place_receiver': 'kewhbjdkwe wekhbfdjehwfb wejhfwjhef wejhfwjehf jwehfjwhef ejwfh wejhf efjhef qjwhvdqjhwvd qjwdvjqhwdv qjwhdqjwhdv qjwdjqvwd qjvqjwd qwjdhvqwdh qwjdhvqjwhd wjdhvqjwhd ', 'spec_place_sender': 'wdkwkc kjhcbqwe ckhebc cwjehfbwehjb jehcwjhef qwejdhvqwduyqw dqwvduyqwdhqwd qwdyw dqwyvdyqwdb', 'type_course': 'Normale', 'type_package': 'Colis', 'value_package': '20000', 'weight_package': '1', 'status': 'Acceptée' }],
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
    //console.log(action);

    return {
        courses: [...action.course, ...state.courses],
        error: null,
        loading: false,
        shownError: false,
    };
};
const fetchAddDown = (state, action) => {
    //console.log('reducer');

    return updateObject(state, {
        courses: [...state.courses, ...action.courses],
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
const deleteCourse = (state, action) => {

    return updateObject(state, {
        myCourses: state.courses.filter(course => course.numero_course !== action.numero_course),
        error: null,
        loading: false,
    });
};
const changeStatus = (state, action) => {
    //alert('ok')
    return updateObject(state, {
        myCourses: state.myCourses.map(course => {
            course.numero_course === action.data.numero_course ? course.status = action.data.status : null;
            return course;
        }),
        error: null,
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
        case actionTypes.DELIVERY_PRICE:
            return deliveryPrice(state, action);
        case actionTypes.GET_PLACES:
            return getplaces(state, action);
        case actionTypes.FETCH_ADD_DOWN:
            return fetchAddDown(state, action);
        case actionTypes.FETCH_ADD_UP:
            return fetchAddUp(state, action);
        case actionTypes.DELETE_COURSE_SUCCESS:
            return deleteCourse(state, action);
        case actionTypes.CHANGE_STATUS:
            return changeStatus(state, action);

        default:
            /* console.log("--reducer");
                        console.log(state); */
            return state;
    }
};

export default reducerCourses;
