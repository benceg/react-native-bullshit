import React from 'react';
import { Provider } from 'react-redux';
import { NativeRouter, Route } from 'react-router-native';

import store from './redux/store';

import Sidebar from './components/Sidebar';
import SecondView from './components/SecondView';

import FirstView from './containers/FirstView';

const App = () => (
  <Provider store={store}>
    <NativeRouter>
      <Sidebar>
        <Route exact path="/" component={FirstView} />
        <Route exact path="/second" component={SecondView} />
      </Sidebar>
    </NativeRouter>
  </Provider>
);

export default App;
