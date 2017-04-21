/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {baseStyles, colors} from '../Styles';

function Label(props) {
  return (
    <View style={styles.container}>
    </View>
)}
export default Label;

const styles = StyleSheet.create({
  container: {
		height: 80,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
		marginBottom: 20,
	},
});
