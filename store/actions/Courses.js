/* eslint-disable prettier/prettier */
import * as actionTypes from './ActionTypes';
import axios from 'axios';
//import AsyncStorage from '@react-native-community/async-storage';
import ConstApp from '../../constants/ConstApp';


axios.defaults.timeout = ConstApp.TIMEOUT_SERVER;

const startLoading = () => {
    return {
        type: actionTypes.START_LAODING,
    };
};
const disableError = () => {
    return {
        type: actionTypes.DISABLE_ERROR,
    };
};

const fetchSuccess = (courses) => {
    return {
        type: actionTypes.FETCH_SUCCESS,
        courses: courses,
    };
};
const fetchAddUp = (course) => {
    return {
        type: actionTypes.FETCH_ADD_UP,
        course: course,
    };
};


const getplaces = (places) => {
    return {
        type: actionTypes.GET_PLACES,
        places: places,
    };
};
const fetchFail = error => {
    return {
        type: actionTypes.FETCH_FAIL,
        error: error,
    };
};
const deleteCourse = numero_course => {
    return {
        type: actionTypes.DELETE_COURSE_SUCCESS,
        numero_course: numero_course,
    };
};
const deliveryPrice = price => {
    return {
        type: actionTypes.DELIVERY_PRICE,
        price: price,
    };
};
export const fetchPlaces = () => {

    return dispatch => {
        /* dispatch(getplaces([{
            id: '1',
            title: 'Adjamé',
            searchKey: 'abidjan',
        },
        {
            id: '2',
            title: 'Abobo',
            searchKey: 'abidjan',
        },
        {
            id: '3',
            title: 'Cocody',
            searchKey: 'san Pedro',
        },
        {
            id: '4',
            title: 'Treichville',
            searchKey: 'abidjan',
        },
        {
            id: '5',
            title: 'Yopougon',
            searchKey: 'abidjan',
        },
        {
            id: '6',
            title: 'Anyama',
            searchKey: 'daloa',
        },
        {
            id: '7',
            title: 'Macory',
            searchKey: 'daloa',
        },
        {
            id: '8',
            title: 'Plateau',
            searchKey: 'daloa'
        },
        {
            id: '58694a0f-3da1-sdc-bd96-145571e29d72',
            title: 'Third Item',
            searchKey: 'san Pedro'
        },
        {
            id: 'bd7acbea-c1b1sdds-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
            searchKey: 'san Pedro'
        },
        {
            id: 'sd-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
            searchKey: 'san Pedro'
        },
        {
            id: 'sddssd-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
            searchKey: 'san Pedro'
        },])); */
        axios
            .get(ConstApp.SERVER + 'list/commune')
            .then(res => {
                if (res.data.code === 1) {
                    dispatch(getplaces(res.data.data));
                } else {
                    dispatch(fetchFail(res.data.message));
                }
                dispatch(disableError());
            })
            .catch(err => {
                console.error(err);
                dispatch(fetchFail(err));
                dispatch(disableError());
            })

        //alert('OK'); 
    };
}
export const searchDeliveryPrice = (place_sender, place_receiver) => {

    return dispatch => {
        dispatch(deliveryPrice(1000));
        /* axios
            .post(ConstApp.SERVER + '', {


            })
            .then(res => {
                dispatch(deliveryPrice(res.price));
            })
            .catch(err => {
                console.error(err);
                dispatch(fetchFail(err));
            })
        dispatch(disableError());
        alert('OK'); */
    };
}
export const listCourse = (id_type_user) => {
    //alert('ok')
    return dispatch => {
        dispatch(startLoading());
        /* axios
            .post(ConstApp.SERVER + '', {


            })
            .then(res => {
                dispatch(fetchSuccess({}));
            })
            .catch(err => {
                console.error(err);
                dispatch(fetchFail(err));
            }) */
        dispatch(fetchSuccess([]));
    }
}
export const addCourse = (token, name_sender, number_sender, type_package,
    value_package,
    weight_package,
    place_sender,
    spec_place_sender,
    place_receiver,
    spec_place_receiver,
    name_receiver,
    num_receiver,
    type_course, paymentMethod, navigation, way) => {
    return dispatch => {
        dispatch(startLoading());
        console.log("addCourse");
        console.log(name_sender);
        switch (way) {
            case 'up':
                //console.log("ok");

                dispatch(fetchAddUp(
                    [{
                        numero_course: num_receiver,
                        name_sender: name_sender,
                        number_sender: number_sender,
                        type_package: type_package,
                        value_package: value_package,
                        weight_package: weight_package,
                        place_sender: place_sender,
                        spec_place_sender: spec_place_sender,
                        place_receiver: place_receiver,
                        spec_place_receiver: spec_place_receiver,
                        name_receiver: name_receiver,
                        num_receiver: num_receiver,
                        type_course: type_course,
                        paymentMethod: paymentMethod,
                    }]
                ))
                break;

            default:
                dispatch(fetchSuccess([{
                    numero_course: 'shcsveh-001',
                    name_sender: name_sender,
                    number_sender: number_sender,
                    type_package: type_package,
                    value_package: value_package,
                    weight_package: weight_package,
                    place_sender: place_sender,
                    spec_place_sender: spec_place_sender,
                    place_receiver: place_receiver,
                    spec_place_receiver: spec_place_receiver,
                    name_receiver: name_receiver,
                    num_receiver: num_receiver,
                    type_course: type_course,
                    paymentMethod: paymentMethod,
                }]));
                break;
        }

        navigation.goBack();
        /* axios
            .post(ConstApp.SERVER + '', {


            })
            .then(res => {
                dispatch(fetchSuccess({}));
            })
            .catch(err => {
                console.error(err);
                dispatch(fetchFail(err));
            }) */
        //dispatch(disableError());
        //alert('OK');
    };
};
export const acceptCourse = () => {
    return {
        //type: actionTypes.ACCEPT_COURSE,
        //courses: courses,
    };
};
export const deletingCourse = (numero_course, navigation) => {
    //alert('ok')
    return dispatch => {
        dispatch(startLoading())
        /* axios
            .post(ConstApp.SERVER + '', {


            })
            .then(res => {
                dispatch(fetchSuccess({}));
            })
            .catch(err => {
                console.error(err);
                dispatch(fetchFail(err));
            }) */
        dispatch(deleteCourse(numero_course))
        navigation.goBack();
    }
};
