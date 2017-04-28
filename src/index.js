/*eslint-disable import/default */
import 'object-assign';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import './assets/styles.css';
import routes from './routes';
import App from './components/App';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>{routes}</App>
    </Router>
  </Provider>,
  document.getElementById('root')

);
