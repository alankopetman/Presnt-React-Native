/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
	TouchableOpacity,
} from 'react-native';

import {baseStyles, colors, icons} from '../Styles';

function ClassCard(props) {
  return (
    <View style={styles.container}>

			<View style={styles.leftOuterContainer}>
				<View style={styles.leftInnerTopContainer}>
					<Text> COP 4110 U01 </Text>
				</View>

				<View style={styles.leftInnerBottomContainer}>
					<View style={styles.leftInnerBottomLeftContainer}>
						<Text> Tuesday | Thursday </Text>
						<Text> 5:00 PM - 6:15 PM</Text>
						<Text> Signed In 15/32 </Text>
					</View>

					<View style={styles.leftInnerBottomRightContainer}>
						<Text> 5:00 </Text>
					</View>
				</View>

				<View style={styles.rightOuterContainer}>
					<View style={styles.rightInnerTopContainer}>
						<Text> REFRESH </Text>
					</View>
					<View style={styles.rightInnerBottomContainer}>
						<Text> PLAY </Text>
					</View>
				</View>
			</View>
    </View>
)}
export default ClassCard;

const styles = StyleSheet.create({
  container: {
		flex: 1,
		width: '100%',
		height: 150,
    backgroundColor: 'white',
		flexWrap: 'wrap',
  },

	leftOuterContainer: {
		flex: 2,
		width: '100%',
		flexWrap: 'wrap',
	},

	leftInnerTopContainer: {
		flex: 1,
	},

	leftInnerBottomContainer: {
		flex: 1,
	},

	leftInnerBottomLeftContainer: {
		flex: 1,
	},

	leftInnerBottomRightContainer: {
		flex: 1,
	},

	rightOuterContainer: {
		flex: 1,
		width: '100%',
	},

	rightInnerTopContainer: {
		flex: 1,
	},

	rightInnerBottomContainer: {
		flex: 1,
	},
});
