/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

function SubHeaderLabel(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} {...props}>
        {props.title}
      </Text>
    </View>
)}
export default SubHeaderLabel;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 30,
  },
  text: {
    color: 'white',
    fontSize: 40,
  },
});
