import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { connect } from 'react-redux';

import { getTheWeather, getTheMonies, updateUserCurrency } from './actions';

import Monies from '../../components/Monies';
import ColouredBar from '../../components/ColouredBar';
import BaseNav from '../../components/BaseNav';

class component extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    weather: PropTypes.object,
    monies: PropTypes.object,
    userCurrency: PropTypes.string,
    getTheWeather: PropTypes.func.isRequired,
    getTheMonies: PropTypes.func.isRequired,
    updateUserCurrency: PropTypes.func.isRequired,
  };

  static defaultProps = {
    userCurrency: 'GBP',
  };

  componentWillMount() {
    const { getTheWeather, getTheMonies } = this.props;
    getTheWeather();
    getTheMonies();
  }

  render() {
    const { name, weather, monies, userCurrency, getTheMonies, updateUserCurrency } = this.props;
    return (
      <View style={{height: '100%'}}>
         {/*TopBar*/}
        <View style={{
                backgroundColor: '#1565C0',
                paddingTop: 40,
                paddingBottom: 20,
                paddingLeft: 20,
                paddingRight: 20,
              }}>
              <Image
                style={{
                  width : 50, 
                  height: 50,
                  }}
                source={require('../../assets/react.png')} 
              />
              <Text>Hello {name}</Text>
        </View>
      <ScrollView contentContainerStyle={styles.container}>
       
        {weather && (
          <View>
            <Text>Place: {weather.name}</Text>
            <Text>Temperature: {weather.main.temp_min}/{weather.main.temp_max}</Text>
          </View>
        )}

        {monies && (
          <View>
            <TextInput
              style={styles.textInput}
              value={userCurrency}
              onChangeText={value => updateUserCurrency(value)}
            />
            <Monies
              monies={monies}
              getTheMonies={() => getTheMonies()}
              onTapMoney={currency => () => {
                updateUserCurrency(currency);
                getTheMonies();
              }}
            />
          </View>
        )}
       

      </ScrollView>
      <BaseNav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 70
  },
  textInput: {
    width: '75%',
    height: 50,
    borderWidth: 1,
  },
});

const mapStateToProps = state => ({
  name: state.FirstView.name,
  weather: state.FirstView.weather,
  monies: state.FirstView.monies,
  userCurrency: state.FirstView.userCurrency,
});

const mapDispatchToProps = {
  getTheWeather,
  getTheMonies,
  updateUserCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(component);
