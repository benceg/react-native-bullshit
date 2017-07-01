import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

import Sidebar from './components/Sidebar';
import FirstView from './containers/FirstView';

const App = () => (
  <Provider store={store}>
    <Sidebar>
      <FirstView />
    </Sidebar>
  </Provider>
);

export default App;
