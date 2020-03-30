/* eslint-disable prettier/prettier */
import reducerAuth from './Auth';
import reducerCourses from './Courses';
import { combineReducers } from 'redux';

const AppReducer = combineReducers({
    reducerAuth,
    reducerCourses,
});

export default AppReducer;
