import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends Component {

  render() {
    const {courseListdata} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courseListdata} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courseListdata: PropTypes.array.isRequired
};

function mapState(state, ownProps) {
  return {
    courseListdata: state.courses
  };
};

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapState, mapDispatch)(CoursesPage);
