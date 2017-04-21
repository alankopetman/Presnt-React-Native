
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {baseStyles, colors} from '../Styles';

function DropDown(props) {
  return (
    <View style={styles.container}>
    </View>
)}
export default DropDown;

const styles = StyleSheet.create({
  container: {
		height: 80,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
		marginBottom: StyleSheet.hairlineWidth,
  },
});
