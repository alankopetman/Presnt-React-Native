import React, { Component } from 'react';
import {
  View,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  KeyboardAvoidingView,
	ScrollView,
} from 'react-native';
import { Redirect } from 'react-router-native';

import {
  AuthInput,
  AuthButton,
  SubHeaderLabel,
  AppHeader,
} from '../../Resources';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators }from '../../Actions';

import styles from './styles';
import {baseStyles, colors} from '../../Styles';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConf: '',
			pid: '',
    };
  }

  register = ({email, password, passwordConf, firstName, lastName, pid}) => {
    this.props.register(firstName, lastName, pid, email, password, passwordConf);
  }

	componentWillReceiveProps(nextProps){
		if(nextProps.errors) 
			this.registrationFailureAlert(nextProps);
	}
	
	registrationFailureAlert = ({errors}) => {
		let errorToShow = '';
		for(let error in errors){
			if(errors[error] !== undefined)
				errorToShow = errors[error];
		}
		return Alert.alert('Invalid Credentials', errorToShow[0]);
	}


  render() {
    return (
			<View style={styles.container}>
					<KeyboardAvoidingView style={styles.inputContainer} >
						<AuthInput
							onChangeText={(firstName) => this.setState({firstName})}
							value={this.state.firstName}
							placeholder="first name"
						/>
				
						<AuthInput
							onChangeText={(lastName) => this.setState({lastName})}
							value={this.state.lastName}
							placeholder="last name"
						/>
				
						<AuthInput
							onChangeText={(email) => this.setState({email})}
							value={this.state.email}
							placeholder="email"
							keyboardType="email-address"
						/>
				
						<AuthInput
							onChangeText={(pid) => this.setState({pid})}
							value={this.state.pid}
							placeholder="Panther ID"
							keyboardType="number-pad"
						/>
				
						<AuthInput
							onChangeText={(password) => this.setState({password})}
							value={this.state.password}
							placeholder="password"
							secureTextEntry
						/>
				
						<AuthInput
							onChangeText={(passwordConf) => this.setState({passwordConf})}
							value={this.state.passwordConf}
							placeholder="confirm password"
							secureTextEntry
						/>
						<AuthButton
							onPress={() => {
							if(this.state.password != this.state.passwordConf) {
								Alert.alert('Invalid Credentials', 'Passwords do not match');
							} else {
									this.register(this.state)
								}
							}}
							title="REGISTER"
							disabled={!(
								this.state.email && 
								this.state.password &&
								this.state.passwordConf &&
								this.state.pid &&
								this.state.firstName &&
								this.state.lastName
							)}
							accessabilityLabel="Button for registering"
							color="white"
						/>
					</KeyboardAvoidingView>
			</View>
    );
  }
}

function mapStateToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
  return {
    token: state.setUser.token,
    user: state.setUser.user,
		prof: state.setUser.prof,
		errors: {
			email: state.setFailure.email,
			password: state.setFailure.password,
			other: state.setFailure.other,
		}
  }
}, mapStateToProps)(Registration);
