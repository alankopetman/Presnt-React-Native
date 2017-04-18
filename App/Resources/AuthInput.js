/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import { colors } from '../Styles';

export default class AuthInput extends React.Component {
	constructor(props){
		super(props);
		console.log(props)
	}
	componentDidMount(){
		console.log("component mounted")
	}
  render () {
		return (
			<View style={styles.container}>
						<TextInput
							style={styles.input}
							autoCorrect={false}
							autoCapitalize="none"
							{...this.props}
						/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '70%',
    borderColor: colors.primary,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 15,
  },

  input: {
    paddingLeft: 10,
    height: 40,
    color: 'black',
  },
});
