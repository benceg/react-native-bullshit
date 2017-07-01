import React from 'react';
import { DrawerLayoutAndroid, Platform } from 'react-native';

import Navigation from '../Navigation';

const component = ({ children }) => (
  (
    Platform.iOS
  ?
    children
  :
    <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={Navigation}>
      {children}
    </DrawerLayoutAndroid>
  )
);

export default component;
