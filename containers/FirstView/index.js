import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const component = ({ name }) => (
  <View style={styles.container}>
    <Text>Hello {name}</Text>
  </View>
);

component.propTypes = {
  name: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  name: state.FirstView.name,
});

export default connect(mapStateToProps)(component);
