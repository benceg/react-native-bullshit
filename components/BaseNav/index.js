import React from 'react';
import { View, StyleSheet } from 'react-native';

const component = () => (
  <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
    <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: '33%', height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: '33%', height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: '34%', height: 50, backgroundColor: 'steelblue'}} />
      </View>
  </View>
);


export default component;
