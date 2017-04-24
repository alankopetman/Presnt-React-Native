/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
	TouchableOpacity,
} from 'react-native';

import {baseStyles, colors, icons} from '../Styles';

function Label(props) {
	console.log(props);
  return (
    <View style={styles.container}>
			<View style={styles.leftContainer}>
				<Text style={styles.text}>{props.classCode}  {props.sectionId}</Text>
			</View>
			<View style={styles.rightContainer}>
				<Text style={styles.text}>7:00 AM - 8:15 AM</Text>
				{props.shouldClassStart ? 
				(props.isStudent ? 
				(<TouchableOpacity style={styles.downArrow}>
					<Text style={styles.startText}> Presnt </Text>
				</TouchableOpacity>) :
				(<TouchableOpacity style={styles.downArrow}>
					<Text style={styles.startText}> Start </Text>
				</TouchableOpacity>)) : (<View />)}
			</View>
    </View>
)}
export default Label;

const styles = StyleSheet.create({
  container: {
		height: 50,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
		marginBottom: 20,
	},

	downArrow: {
		height: 10,
		height: 10,
		marginBottom: 5,
	},

	rightContainer: {
		width: '50%',
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},

	leftContainer: {
		width: '50%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},

	startText: {
		color: colors.darkBlue,
	},

	text: {
		color: colors.medLightText,
	},
});
