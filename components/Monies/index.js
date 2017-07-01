import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight} from 'react-native';

const component = ({ monies, getTheMonies, onTapMoney }) => (
  <View>
    <TouchableHighlight onPress={getTheMonies} >
      <Text>Update The currency</Text>
    </TouchableHighlight>
    <Text>Base Currency: {monies.base}</Text>
    <View>
      {monies.rates && Object.keys(monies.rates).map(key => (
        <TouchableHighlight key={key} onPress={onTapMoney(key)}>
          <Text>
            {key} : {monies.rates[key]}
          </Text>
        </TouchableHighlight>
      ))}
      <Text>____________________________</Text>
      <Text>Last updated : {monies.date}</Text>
    </View>
  </View>
);

component.propTypes = {
  monies : PropTypes.object,
  getTheMonies : PropTypes.func.isRequired,
  onTapMoney: PropTypes.func.isRequired,
}

export default component;
