import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import App from './App';
import * as serviceWorker from './serviceWorker';

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 0,
  offset: '32px',
  type: 'success',
  transition: transitions.FADE
}

ReactDOM.render(
  // <React.StrictMode>
  <AlertProvider template={AlertTemplate} {...options}>
    <App className='App'/>
    </AlertProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
