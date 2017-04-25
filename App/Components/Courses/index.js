/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
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
} from 'native-base';
import ActionButton from 'react-native-action-button';
import { bindActionCreators } from 'redux';
import { ActionCreators }from '../../Actions';
import { connect } from 'react-redux';
import ClassBar from '../../Resources/ClassBar';
import TimePicker from '../../Resources/TimePicker';
import styles from './styles';
import { colors, icons } from '../../Styles';


class Courses extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: true,
			isModalVisible: false,
			isStudentModalVisible: false,
			editting: false,
			firstDay: '',
			secondDay: '',
			thirdDay: '',
			classTime: '',
			classTimeEnd: '',
			roomSize: 0,
			sectionId: '',
			roomNumber: 0,
			course: 1,
			code: '',
		};
	}

  componentDidMount() {
		console.log(this);
		this.props.routeTo(this.props.location.pathname);
		this.props.getCourses({token: this.props.token, user: this.props.user});
		if(this.props.prof) {
			this.props.getSections({token: this.props.token, user: this.props.user});
		}
		else {
			this.props.getSectionsStudent({token: this.props.token, user: this.props.user});
		}
  }

	_showModal = () => {
		this.setState({ isModalVisible: true });
	}

	_hideModal = () => {
		this.setState({ isModalVisible: false });
	}

	_showStudentModal = () => {
		this.setState({ isStudentModalVisible: true });
	}

	_hideStudentModal = () => {
		this.setState({ isStudentModalVisible: false });
	}

	_onValueChange = (course) => {
		this.setState({course});
	}

	_setTime = (classTime) => {
		this.setState({classTime})
	}

	_setTimeEnd = (classTimeEnd) => {
		this.setState({classTimeEnd})
	}

	_register = () => {
		const auth = {token: this.props.token, user: this.props.user};
		this.props.sectionRegister(auth, this.state.code);
	}

	_createSection = ({active, isModalVisible, ...rest}) => {
		const auth = {token: this.props.token, user: this.props.user}
		this.props.createSection(auth, rest);
	}

	_deleteSection = (sectionId) => {
		const auth = {token: this.props.token, user: this.props.user}
		this.props.deleteSection(auth, sectionId);
	};

  render() {
		if(this.props.courses && this.props.sections) {
			const Courses = this.props.courses.map((course, index) => {
				return <Item value={course.id} label={course.course_id} key={index} />
			});
			const Sections = this.props.sections.map((section, index) => {
				return (
					<ClassBar 
						key={index}
						classCode={section.course_info.course_id}
						classSize={section.room_size} 
						classDayOne={section.class_day_one}
						classDayTwo={section.class_day_two}
						sectionId={section.section_id}
						startTime={section.class_time}
						endTime={section.class_time_end}
						sid={section.id}
						editMode={this.state.editting}
						deleteSection={this._deleteSection}
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
							<Title style={{color: 'white'}}>Courses</Title>
						</Body>
						<Right>
							{this.props.prof ?
								(<Button 
									transparent
									onPress={() =>{
									this.state.editting ? 
										this.setState({editting: false}) : this.setState({editting: true});
									}}
								>
									<Text 
										style={this.state.editting ? styles.editting : styles.notEditting}
									> {this.state.editting ? "Done" : "Edit"}</Text>
								</Button>) :
								(<Button 
									transparent
									onPress={this._showStudentModal}
								>
									<Text style={styles.notEditting}>Register</Text>
								</Button>)}
						</Right>
					</Header>
					<ScrollView contentContainerStyle={styles.scrollStyles}>
						{Sections}
					</ScrollView>
						<Modal 
							style={styles.modal} 
							visible={this.state.isStudentModalVisible}
							animationType={"slide"}
						>
								 <StatusBar barStyle="dark-content" />
						<Header>
							<Left>
								<Button
									onPress={this._hideStudentModal}
									transparent
								>
									<Text style={styles.modalText}>Cancel</Text>
								</Button>
							</Left>
							<Body>
								<Title>Register</Title>
							</Body>
							<Right>
								<Button 
									transparent
									onPress={() =>{
									this._register()
									this._hideModal()
									}}
								>
									<Text style={styles.modalText}>Submit</Text>
								</Button>
							</Right>
						</Header>
								<Form>
									<Item last>
										<Input 
											placeholder="Enter Class Code" 
											onChangeText={(code) => this.setState({code})}
										/>
									</Item>
								</Form>
						</Modal>
						<Modal 
							style={styles.modal} 
							visible={this.state.isModalVisible}
							animationType={"slide"}
						>
								 <StatusBar barStyle="dark-content" />
						<Header>
							<Left>
								<Button
									onPress={this._hideModal}
									transparent
								>
									<Text style={styles.modalText}>Cancel</Text>
								</Button>
							</Left>
							<Body>
								<Title>Create a Class</Title>
							</Body>
							<Right>
								<Button 
									onPress={() =>{
									this._createSection(this.state)
									this._hideModal()
									}}
									transparent
								>
									<Text style={styles.modalText}>Submit</Text>
								</Button>
							</Right>
						</Header>
								<Form>
									<Item>
										<Input 
											placeholder="Class day of week" 
											onChangeText={(firstDay) => this.setState({firstDay})}
										/>
									</Item>
									<Item>
										<Input 
											placeholder="Class day of week (optional)" 
											onChangeText={(secondDay) => this.setState({secondDay})}
										/>
									</Item>
									<Item>
										<Input 
											placeholder="Class day of week (optional)" 
											onChangeText={(thirdDay) => this.setState({thirdDay})}
										/>
									</Item>
									<Item>
										<TimePicker 
											_setTime={this._setTime} 
											placeholder="Select a start time"
										/>
									</Item>
									<Item>
										<TimePicker 
											_setTime={this._setTimeEnd} 
											placeholder="Select an end time"
										/>
									</Item>
									<Item>
										<Input 
											placeholder="Room size" 
											onChangeText={(roomSize) => this.setState({roomSize})}
										/>
									</Item>
									<Item>
										<Input 
											placeholder="Room number" 
											onChangeText={(roomNumber) => this.setState({roomNumber})}
										/>
									</Item>
									<Item>
										<Input 
											placeholder="Section ID" 
											onChangeText={(sectionId) => this.setState({sectionId})}
										/>
									</Item>
									<Item last>
										<Picker
											iosHeader="Courses"
											mode="dropdown"
											selectedValue={this.state.course}
											onValueChange={this._onValueChange}
											textStyle={{color:colors.darkBlue, padding: 0 }}
										>
											{Courses}
										</Picker>
									</Item>
								</Form>
						</Modal>
						{this.state.editting ? 
							(<ActionButton
								buttonColor={colors.primary}
								onPress={this._showModal}
								position="right"
								offsetY={70}
							>
							</ActionButton>) :
							(<View />)
						}
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
		courses: state.setCourses.courses,
		sections: state.setSections.sections,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
