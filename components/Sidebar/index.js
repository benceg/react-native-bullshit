import React from 'react';
import PropTypes from 'prop-types';
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
      renderNavigationView={Navigation}
    >
      {children}
    </DrawerLayoutAndroid>
  )
);

component.propTypes = {
  children: PropTypes.node.isRequired,
};

export default component;
