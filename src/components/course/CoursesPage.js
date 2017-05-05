import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import toastr from 'toastr';

class CoursesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course: Object.assign({}, props.courseListdata)
    };

    this.redirectToAddCourse = this.redirectToAddCourse.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
  }
  
  redirectToAddCourse() {
    this.props.history.push('/course');
  }

  deleteCourse(course) {
    this.props.actions.deleteCourse(course)
      .then(toastr.success('Course deleted!'))
      .catch(error => {
        toastr.error(error);
      });
  }

  render() {
    const {courseListdata} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCourse} />
        <CourseList courses={courseListdata} onDelete={this.deleteCourse} />
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
