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
import reactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';


import styles from './styles';

class DashBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			curTime : new Date().toTimeString().slice(0,8)
		}
	}

  componentDidMount() {
		console.log('COMPONENT MOUNTED');
    this.setInterval( () => {
      this.setState({
        curTime : new Date().toLocaleString()
      })
    },3000)
		this.props.routeTo(this.props.location.pathname);
		this.props.getSections({token: this.props.token, user: this.props.user});
  }

	componentDidUnount() {
	}

	shouldClassStart = (time, timeEnd) => {
		const date = '01/01/2020';
		return (
			Date.parse(`${date} ${time}`) <= Date.parse(`${date} ${this.state.curTime}`)
				&&
			Date.parse(`${date} ${timeEnd}`) >= Date.parse(`${date} ${this.state.curTime}`)
		)
	}

  render() {
		if(this.props.sections) {
			const SectionLabels = this.props.sections.map((section, index) => {
				return (
					<Label 
						key={index}
						classCode={section.course_info.course_id}
						sectionId={section.section_id}
						shouldClassStart={this.shouldClassStart(section.class_time, section.class_time_end)}
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

reactMixin(DashBoard.prototype, TimerMixin);
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
