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

class Courses extends Component {
  componentDidMount() {
    console.log(this)  
  }
  render() {
    return (
        <Text style={styles.text}>I'm the Courses component</Text>
    );
  }
}

function mapStateToProps(state) {
	return {
		token: state.setUser.token,
		user: state.setUser.user,
	};
}

export default connect(mapStateToProps)(Courses);
