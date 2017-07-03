import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

const component = ({ monies, getTheMonies, onTapMoney }) => (
  <View>
    <TouchableHighlight onPress={getTheMonies} style={styles.button} >
      <Text style={styles.btnText}>Update The currency</Text>
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
      <View style={styles.hrBar}></View>
      <Text>Last updated : {monies.date}</Text>
    </View>
  </View>
);

component.propTypes = {
  monies : PropTypes.object,
  getTheMonies : PropTypes.func.isRequired,
  onTapMoney: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  button: {
    width: '60%',
    height: 40,
    backgroundColor : '#880E4F',
    borderRadius: 5,
    flex: 1, flexDirection: 'row',  alignItems: 'center', justifyContent: 'center'
  },
  btnText : {
    justifyContent: 'center',
    color: '#fff',
    fontSize : 16,
    fontWeight : '700'
  },
  hrBar : {
    width: '100%',
    height: 2,
    marginTop: 10,
    backgroundColor: '#BBDEFB'
  }
});

export default component;
