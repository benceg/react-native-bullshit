import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

import FirstView from './containers/FirstView';

const App = () => (
  <Provider store={store}>
    <FirstView />
  </Provider>
);

export default App;
