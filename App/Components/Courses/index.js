/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
	Modal,
	StatusBar,
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
			firstDay: '',
			secondDay: '',
			thirdDay: '',
			classTime: '',
			roomSize: 0,
			sectionId: '',
			roomNumber: 0,
			course: 1,
		};
	}

  componentDidMount() {
		console.log(this);
		this.props.routeTo(this.props.location.pathname);
		this.props.getCourses({token: this.props.token, user: this.props.user});
		this.props.getSections({token: this.props.token, user: this.props.user});
  }

	_showModal = () => {
		this.setState({ isModalVisible: true });
	}

	_hideModal = () => {
		this.setState({ isModalVisible: false });
	}

	_onValueChange = (course) => {
		this.setState({course});
	}

	_handleSubmit = ({active, isModalVisible, ...rest}) => {
		const auth = {token: this.props.token, user: this.props.user}
		console.log(rest)
		this.props.createSection(auth, rest);
	}

	_setTime = (classTime) => {
		this.setState({classTime})
	}


  render() {
		if(this.props.courses && this.props.sections) {
			const Courses = this.props.courses.map((course, index) => {
				return <Item value={course.id} label={course.course_id} key={index} />
			});
			console.log(this.props.sections)
			const Sections = this.props.sections.map((section, index) => {
				return (
					<ClassBar 
						classSize={sections.class_size} 
						classDayOne={sections.class_day_one}
						classDayTwo={sections.class_day_two}
					/>
				)
			});
			return (
				<View style={styles.container}>
					{Sections}
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
								this._handleSubmit(this.state)
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
									<TimePicker _setTime={this._setTime} />
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
							<ActionButton
								buttonColor={colors.primary}
								onPress={this._showModal}
								position="right"
								offsetY={70}
							>
							</ActionButton>
				</View>
			);
		} else return <Spinner />
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
