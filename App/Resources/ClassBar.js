/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {baseStyles, colors} from '../Styles';

function ClassBar(props) {
  return (
    <View style={styles.container}>
      <View style={styles.courseLeftContainer}>
        <Text style={styles.courseLeftTextTop}>
          COP 4110 UO1
        </Text>
        <Text style={styles.courseLeftTextBottom}>
					Class Size <Text style={styles.sizeText}> 32 </Text>
        </Text>
      </View>
      <View style={styles.courseRightContainer}>
				<Text style={styles.courseRightText}>Tuesdays | Thursdays</Text>
				<Text style={styles.courseRightText, styles.sizeText}>11:00 AM - 12:15 PM</Text>
      </View>
    </View>
)}
export default ClassBar;

const styles = StyleSheet.create({
  container: {
		height: 80,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
		marginBottom: StyleSheet.hairlineWidth,
  },
  courseLeftContainer: {
    width: '50%',
    height: '100%',
  },
  courseRightContainer: {
    width: '50%',
    height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
  },
  courseLeftTextTop: {
    color: 'black',
		fontSize: 23,
    paddingTop: 18,
    paddingLeft: 20,
  },
	courseRightText: {
		color: colors.medLightText,
		paddingBottom: 4,
	},
  courseLeftTextBottom: {
    color: colors.darkBlue,
    paddingLeft: 20,
		paddingTop: 5,
  },
	sizeText: {
		fontSize: 12,
		color: colors.medLightText,
	},
});
