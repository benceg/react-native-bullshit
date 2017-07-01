import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { getTheWeather } from './actions';

import ColouredBar from '../../components/ColouredBar';

class component extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    weather: PropTypes.object,
    getTheWeather: PropTypes.func.isRequired,
  };

  componentWillMount() {
    const { getTheWeather } = this.props;
    getTheWeather();
  }

  render() {
    const { name, weather } = this.props;
    return (
      <View style={styles.container}>
        <Text>Hello {name}</Text>
        {weather && (
          <View>
            <Text>Place: {weather.name}</Text>
            <Text>Temperature: {weather.main.temp_min}/{weather.main.temp_max}</Text>
          </View>
        )}
        <ColouredBar />
      </View>
    );
  }
}

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
  weather: state.FirstView.weather,
});

const mapDispatchToProps = {
  getTheWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(component);
