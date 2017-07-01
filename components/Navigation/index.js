import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

const component = () => (
  <View style={styles.navigation}>
    <Link to="/">
      <Text>First View</Text>
    </Link>
    <Link to="/second">
      <Text>Second View</Text>
    </Link>
  </View>
);

const styles = StyleSheet.create({
  navigation: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default component;
