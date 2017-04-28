import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootResucer = combineReducers({
  courses
});

export default rootResucer;