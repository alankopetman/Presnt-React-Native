/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

import { colors } from '../Styles';

function AuthButton (props) {
  return (
    <View style={styles.container}>
      <Button style={styles.button} {...props} />
    </View>
  );
}

export default AuthButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    borderRadius: 20,
    backgroundColor: colors.primary,
  },
  button: {
    backgroundColor: 'white',
    color: 'white',
  }
});
