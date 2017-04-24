/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
	TouchableOpacity,
	Alert,
} from 'react-native';
import {
	Link,
} from 'react-router-native';

import {baseStyles, colors, icons} from '../Styles';

class ClassBar extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.container}>
					<Link
						to={`/section/${this.props.sid}`}
						key={this.props.sid}
						component={TouchableOpacity}
					>
					<View style={styles.courseLeftContainer}>
							<Text style={styles.courseLeftTextTop}>
								{this.props.classCode}&nbsp;{this.props.sectionId}
							</Text>
						<Text style={styles.courseLeftTextBottom}>
							Class Size <Text style={styles.sizeText}> {this.props.classSize} </Text>
						</Text>
					</View>
				</Link>
					<View style={styles.courseRightContainer}>
						<View style={styles.courseTextContainer}>
							<Text style={styles.courseRightText}>{this.props.classDayOne} | {this.props.classDayTwo}</Text>
							<Text style={styles.courseRightText, styles.sizeText}>11:00 AM - 12:15 PM</Text>
						</View>
						{this.props.editMode ? 
						(<TouchableOpacity
							onPress={() => Alert.alert(
								'Are you sure?',
								'Delete section',
								[
									{ text: 'Cancel', onPress: () => console.log('canceled') },
									{ text: 'Delete', onPress: () => {
									this.props.deleteSection(this.props.sid)} }
								]
							)}
							style={styles.editting}>
							{icons.remove}
						</TouchableOpacity>) : (<View />)}
					</View>
				</TouchableOpacity>
			</View>
		)}
	}
export default ClassBar;

const styles = StyleSheet.create({
  container: {
		flex: 1,
		height: 80,
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
		marginBottom: StyleSheet.hairlineWidth,
  },

  courseLeftContainer: {
		flex: 4,
  },

	courseRightContainer: {
		flex: 5,
		flexDirection: 'row',
	},

  courseTextContainer: {
		flex: 4,
		alignItems: 'center',
		justifyContent: 'center',
  },


  courseLeftTextTop: {
    color: 'black',
		fontSize: 20,
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

	delete: {
		color: 'red',
	},

	editting: {
		flex: 1,
	},
});
