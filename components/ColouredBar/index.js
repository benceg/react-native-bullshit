import React from 'react';
import { View, StyleSheet } from 'react-native';

const component = () => (
  <View style={styles.colouredBar} />
);

const styles = StyleSheet.create({
  colouredBar: {
    width: '100%',
    height: 2,
    backgroundColor: 'lightblue',
  },
});

export default component;
