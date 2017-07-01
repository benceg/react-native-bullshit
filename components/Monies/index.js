import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight} from 'react-native';

const component = ({monies, getTheMonies}) => (
  <View>
    <TouchableHighlight onPress={getTheMonies} >
      <Text>Update The currency</Text>
    </TouchableHighlight>

    <Text>Base Currency: {monies.base}</Text>

    <View>
      {monies.rates && Object.keys(monies.rates).map(key => (
        <Text key={key}>
          {key} : {monies.rates[key]}
          
        </Text>
      ))}
      <Text>____________________________</Text>
      <Text>Last updated : {monies.date}</Text>
    </View>

    {/*<Text>Debug: {JSON.stringify(monies,null,2)}</Text>*/}
  </View>
);

component.propTypes = {
  monies : PropTypes.object,
  getTheMonies : PropTypes.func.isRequired,
}

export default component;