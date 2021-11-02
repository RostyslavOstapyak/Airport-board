import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import { fetchFlightsList } from './flights/flightGateway';

const rootElement = document.querySelector('#root');
fetchFlightsList();
ReactDOM.render(<App />, rootElement);
