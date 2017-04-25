/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
	TouchableOpacity, 
	Clipboard,
	ScrollView,
} from 'react-native';
import { 
	Container,
	Content, 
	Form, 
	Input,
	Button,
	Header,
	Left,
	Right,
	Body,
	Title,
	Spinner,
	Item,
	Picker,
	Toast,
	List,
	ListItem,
	Separator,
} from 'native-base';
import { bindActionCreators } from 'redux';
import { ActionCreators }from '../../Actions';
import { connect } from 'react-redux';
import { colors, icons } from '../../Styles';

import styles from './styles';

class Roster extends Component {
	constructor(props) {
		super(props);
		this.state = {
			section: this.props.sections.find(section => section.id == this.props.location.pathname.slice(9)),
			showToast: false,

		}
	}

  componentDidMount() {
		console.log(this)
		this.props.routeTo(this.props.location.pathname);
  }

	_buttonPress = () => {
		Clipboard.setString(this.state.code);
		Toast.show({
			text: 'Code copied to clipboard!',
			position: 'bottom',
			buttonText: 'Sick',
		});
	}

	_goBack = () => {
		this.props.history.goBack();
	}

  render() {

    return (
        <View style={styles.container}>
					<Header 
						backgroundColor={colors.primary} 
						style={{backgroundColor: colors.primary}}
						iosBarStyle='light-content'
					>
						<Left> 
							<TouchableOpacity onPress={this._goBack}>
								{icons.back}
							</TouchableOpacity>
						</Left>
						<Body>
							<Title style={{color: 'white'}}>Roster</Title>
						</Body>
						<Right />
					</Header>
						<Container>
							<View style={styles.buttonContainer}>
									<Text style={styles.copyLabel}>Copy your access code</Text>
									<Button 
										black
										onPress={this._buttonPress}
									>
										<Text style={styles.copyText}>{this.state.section.access_code}</Text>
									</Button>
							</View>
						</Container>
						<View style={styles.studentsContainer}>
							<View style={styles.studentLabel}>
								<Text style={styles.studentLabelText}>Students</Text>
							</View>
							<List 
								dataArray={this.state.section.detailed_roster}
								renderRow={(student) => 
									<ListItem>
										<Text>{student.first_name} {student.last_name}</Text>
									</ListItem>
								}>
							</List>
						</View>
        </View>
    );
  }
}


function mapStateToProps(state) {
  return {
    token: state.setUser.token,
    user: state.setUser.user,
		prof: state.setUser.prof,
		route: state.setPath.path,
		sections: state.setSections.sections,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Roster);
