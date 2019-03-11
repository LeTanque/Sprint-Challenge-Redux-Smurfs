import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './styles/css/index.css';

import rootReducer from './reducers';
import App from './components/App';



// this is the most basic reducer. A function that returns and object. Replace it.
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger));

const rootElement = document.getElementById('root');


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
