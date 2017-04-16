/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {baseStyles, colors} from '../Styles';

function AppHeader(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading} {...props}>
        Presnt
      </Text>
      <Text style={styles.subHeading}>
        Let 'em know you're here
      </Text>
    </View>
)}
export default AppHeader;

const styles = StyleSheet.create({
  container: {
		height: '25%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  heading: {
    color: colors.primary,
    fontSize: 45,
  },

  subHeading: {
    color: colors.medLight,
    fontSize: 12,
  }

});
