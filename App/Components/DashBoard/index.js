/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
	TouchableHighlight,
	TouchableOpacity,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { ActionCreators }from '../../Actions';
import { connect } from 'react-redux';

import styles from './styles';

class DashBoard extends Component {
  componentDidMount() {
    console.log(this)  
  }
  render() {
    return (
        <View style={styles.container}>
					<Text style={styles.text}>I'm the DashBoard component</Text>
					<TouchableOpacity
						style={styles.button}
						onPress={() => {console.log("create new course")}}
					>
					</TouchableOpacity>
        </View>
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

export default connect(mapStateToProps)(DashBoard);
