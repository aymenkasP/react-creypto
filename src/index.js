import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './app/store';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import 'antd/dist/antd.css';   


ReactDOM.render(
  <React.StrictMode>
     <Router>
     <Provider store={store}>
        <App />
        </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

