/* @flow */
import React, { Component } from 'react';
import {
  View,
  Text,
	TouchableHighlight,
	TouchableOpacity,
	Modal,
	StatusBar,
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
	ActionSheet,
} from 'native-base';
import { bindActionCreators } from 'redux';
import { ActionCreators }from '../../Actions';
import { connect } from 'react-redux';
import { colors, icons } from '../../Styles';
import Label from '../../Resources/Label';
import ClassCard from '../../Resources/ClassCard';

import styles from './styles';

class DashBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalVisible: false,
		};
	}

  componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime : new Date().toLocaleString()
      })
    },30000)
		this.props.routeTo(this.props.location.pathname);
		this.props.getSections({token: this.props.token, user: this.props.user});
  }

	shouldClassStart = (time) => {
		return Date.parse('01/01/2020 ' + time) > Date.parse('01/01/2020 ' + this.state.curTime)
	}

  render() {
		if(this.props.sections) {
			const SectionLabels = this.props.sections.map((section, index) => {
				return (
					<Label 
						key={index}
						classCode={section.course_info.course_id}
						sectionId={section.section_id}
						shouldClassStart={this.shouldClassStart(section.class_time)}
					/>
				)
			});
			return (
					<View style={styles.container}>
						<Header 
							backgroundColor={colors.primary} 
							style={{backgroundColor: colors.primary}}
							iosBarStyle='light-content'
						>
							<Left/>
							<Body>
								<Title style={{color: 'white'}}>Home</Title>
							</Body>
							<Right />
						</Header>
						<ScrollView contentContainerStyle={styles.scrollStyles}>
							{SectionLabels}
						</ScrollView>
					</View>
			);
		} else return <Spinner color={colors.primary}/>
	}
}

function mapStateToProps(state) {
  return {
    token: state.setUser.token,
    user: state.setUser.user,
		prof: state.setUser.prof,
		path: state.setPath.path,
		sections: state.setSections.sections,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
