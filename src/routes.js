import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursesPage from './components/course/ManageCoursePage';

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/courses" component={CoursesPage} />
    <Route path="/course" component={ManageCoursesPage} />
    <Route path="/course/:id" component={ManageCoursesPage} />
    <Route path="/about" component={AboutPage} />
  </Switch>
);
