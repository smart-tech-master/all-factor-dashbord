import React from 'react';
import { Provider } from 'react-redux';

import { store, history } from './redux/store';
import Router from './router';

import 'assets/styles/global.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history} />
    </Provider>
  );
};

export default App;
