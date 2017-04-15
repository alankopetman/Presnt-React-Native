import React, { Component } from 'react';
import {
  View,
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

  render() {
    return (
			<View style={styles.container}>
				<ScrollView contentContainerStyle={styles.container}>
					<KeyboardAvoidingView style={styles.inputContainer} behavior="padding">
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
					</KeyboardAvoidingView>
				</ScrollView>
				<AuthButton
					onPress={() => {this.register(this.state)}}
					title="REGISTER"
					accessabilityLabel="Button for registering"
					color="white"
				/>
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
  }
}, mapStateToProps)(Registration);
