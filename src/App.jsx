import React from 'react';
import { Provider } from 'react-redux';
import store from './sore';
import AirportTAble from './flights/components/AirportTable';

const App = () => (
  <Provider store={store}>
    <AirportTAble />
  </Provider>
);

export default App;
