/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { ActionCreators }from '../../Actions';
import { connect } from 'react-redux';
import ClassBar from '../../Resources/ClassBar';
import styles from './styles';

class Courses extends Component {

  componentDidMount() {
		console.log(this);
		this.props.routeTo(this.props.location.pathname);
  }

  render() {
    return (
      <View style={styles.container}>
        <ClassBar />
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

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
