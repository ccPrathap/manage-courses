import { expect } from 'chai';
import { createStore } from 'redux';
import rootReducer from '../../src/reducers/index';
import initialState from '../../src/reducers/initialState';
import * as courseActions from '../../src/actions/courseActions';

describe('Store', function() {
  it('Should handle creating courses', function() {
    // arrange
    const store = createStore(rootReducer, initialState);
    const course = {
      title: "Clean Code"
    };

    // act
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);

    // assert
    const actual = store.getState().courses.length;
    // const expected = {
    //   title: "Clean Code"
    // };

    expect(actual).to.equal(1);
  });
});
