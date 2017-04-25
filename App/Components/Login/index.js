import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  Animated,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators }from '../../Actions';

import {
  AuthInput,
  AuthButton,
  SubHeaderLabel,
} from '../../Resources';

import styles from './styles';
import { baseStyles, colors } from '../../Styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

	componentDidMount(){
		this.props.loginRequest('mross@fiu.edu', 'pass1234');
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.errors) 
			this.loginFailureAlert(nextProps);
	}
	
	loginFailureAlert = ({errors}) => {
		let errorToShow = '';
		for(let error in errors){
			if(errors[error] !== undefined)
				errorToShow = errors[error];
		}
		return Alert.alert('Invalid Credentials', errorToShow[0]);
	}

	handleInput = (type, input) => {
		this.setState({ [type]: input});
	}

	loginSubmit = ({email, password}) => {
		this.props.loginRequest(email, password);
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.inputContainer} behavior="padding">
          <AuthInput
            value={this.state.email}
            placeholder="email"
            onChangeText={(email) => this.setState({email})}
          />

          <AuthInput
            value={this.state.password}
            placeholder="password"
            secureTextEntry
            onChangeText={(password) => this.setState({password})}
          />

					<AuthButton
						onPress={() => {
							this.loginSubmit(this.state)
							}
						}
						disabled={!(this.state.email && this.state.password)}
						title="LOGIN"
						accessabilityLabel="Button for logging in"
						color="white"
					/>
        </KeyboardAvoidingView>
      </View>
 )
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
		},
  }
}, mapStateToProps)(Login);
