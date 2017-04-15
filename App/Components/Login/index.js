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
    console.log(this);
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
            key={'email'}
            value={this.state.email}
            placeholder="email"
            onChangeText={(email) => this.setState({email})}
          />

          <AuthInput
            key={'password'}
            value={this.state.password}
            placeholder="password"
            secureTextEntry
            onChangeText={(password) => this.setState({password})}
          />

        </KeyboardAvoidingView>
        <AuthButton
          onPress={() => {
            this.loginSubmit(this.state)
            }
          }
          title="LOGIN"
          accessabilityLabel="Button for logging in"
          color="white"
        />
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
  }
}, mapStateToProps)(Login);
