import React from 'react';
import { DrawerLayoutAndroid } from 'react-native';

import Navigation from '../Navigation';

const component = ({ children }) => (
  <DrawerLayoutAndroid
    drawerWidth={300}
    drawerPosition={DrawerLayoutAndroid.positions.Left}
    renderNavigationView={Navigation}>
    {children}
  </DrawerLayoutAndroid>
);

export default component;
