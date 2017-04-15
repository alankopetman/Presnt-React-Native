/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
	TouchableHighlight,
	Image,
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
					<View style={styles.button}>
						<TouchableHighlight
							onPress={() => {console.log("create new course")}}
						>
							<Image style={ styles.image } source={{ uri: 'http://www.free-avatars.com/data/media/37/cat_avatar_0597.jpg' }} /> 
						</TouchableHighlight>
					</View>
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
