/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { ActionCreators }from '../../Actions';
import { connect } from 'react-redux';

import styles from './styles';

class Settings extends Component {
  componentDidMount() {
    console.log(this)  
  }
  render() {
    return (
        <Text style={styles.text}>I'm the Settings component</Text>
    );
  }
}

function mapStateToProps(state) {
	return {
		token: state.setUser.token,
		user: state.setUser.user,
		prof: state.setUser.prof,
	};
}


export default connect(mapStateToProps)(Settings);
