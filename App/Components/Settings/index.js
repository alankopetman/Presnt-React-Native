/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
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
import { bindActionCreators } from 'redux';
import { ActionCreators }from '../../Actions';
import { connect } from 'react-redux';
import { colors, icons } from '../../Styles';

import styles from './styles';

class Settings extends Component {

  componentDidMount() {
		console.log(this);
		this.props.routeTo(this.props.location.pathname);
  }

  render() {
    return (
        <View style={styles.container}>
					<Header 
						backgroundColor={colors.primary} 
						style={{backgroundColor: colors.primary}}
						iosBarStyle='light-content'
					>
						<Left/>
						<Body>
							<Title style={{color: 'white'}}>Settings</Title>
						</Body>
						<Right />
					</Header>
        </View>
    );
  }
}


function mapStateToProps(state) {
  return {
    token: state.setUser.token,
    user: state.setUser.user,
		prof: state.setUser.prof,
		path: state.setPath.path,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
