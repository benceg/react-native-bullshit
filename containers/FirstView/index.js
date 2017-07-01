import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Text, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { getTheWeather, getTheMonies } from './actions';
import Monies from '../../components/Monies';
import ColouredBar from '../../components/ColouredBar';

class component extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    weather: PropTypes.object,
    monies: PropTypes.object,
    getTheWeather: PropTypes.func.isRequired,
    getTheMonies: PropTypes.func.isRequired,

  };

  componentWillMount() {
    const { getTheWeather, getTheMonies } = this.props;
    getTheWeather();
    getTheMonies();
  }

  render() {
    const { name, weather, monies, getTheMonies } = this.props;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Hello {name}</Text>
        {weather && (
          <View>
            <Text>Place: {weather.name}</Text>
            <Text>Temperature: {weather.main.temp_min}/{weather.main.temp_max}</Text>
          </View>
        )}

        {monies && (
          <View>

            <Monies monies={monies} getTheMonies={() => getTheMonies()}/>
          </View>
        )}
        <ColouredBar />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
});

const mapStateToProps = state => ({
  name: state.FirstView.name,
  weather: state.FirstView.weather,
  monies: state.FirstView.monies,
});

const mapDispatchToProps = {
  getTheWeather,
  getTheMonies,
};

export default connect(mapStateToProps, mapDispatchToProps)(component);
