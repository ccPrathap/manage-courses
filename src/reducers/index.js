import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootResucer = combineReducers({
  courses,
  authors
});

export default rootResucer;