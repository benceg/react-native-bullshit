import React from 'react';
import {View, Text} from 'react-native';

const component = ({monies}) => (
  <View>
    <Text>Base Currency: {monies.base}</Text>
    <View>
      {Object.keys(monies.rates).map(key => (
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

export default component;