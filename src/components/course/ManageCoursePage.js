import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';


class ManageCoursePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course: Object.assign({}, props.courseData),
      errors: {},
      saving: false
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.courseData.id !== nextProps.courseData.id) {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({course: Object.assign({}, nextProps.courseData)});
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  saveCourse(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: true});
    toastr.success('Course saved');
    this.props.history.push('/courses');
  }

  render() {
    return (
        <CourseForm 
          allAuthors={this.props.authorsData}
          course={this.state.course}
          errors={this.state.errors}
          onChange={this.updateCourseState}
          onSave={this.saveCourse}
          saving={this.state.saving} />
    );
  }
}

ManageCoursePage.propTypes = {
  actions: PropTypes.object.isRequired,
  courseData: PropTypes.object.isRequired,
  authorsData: PropTypes.array.isRequired
};

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id === id);
  if (course) return course[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapState(state, ownProps) {
  const courseNamePath = ownProps.location.pathname; // from path '/course/:id'
  const courseId = courseNamePath.substring(8, courseNamePath.length); // trim '/course/'

  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  
  if(courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
  
  return {
    courseData: course,
    authorsData: authorsFormattedForDropdown
  };
};

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapState, mapDispatch)(ManageCoursePage);
