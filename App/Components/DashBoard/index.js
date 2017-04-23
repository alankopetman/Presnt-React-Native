/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
	TouchableHighlight,
	TouchableOpacity,
	Modal,
	StatusBar,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { ActionCreators }from '../../Actions';
import { connect } from 'react-redux';

import styles from './styles';

class DashBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalVisible: false,
		};
	}

  componentDidMount() {
		console.log(this);
		this.props.routeTo(this.props.location.pathname);
  }

  render() {
    return (
        <View style={styles.container}>
					<Text style={styles.text}>I'm the DashBoard component</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
