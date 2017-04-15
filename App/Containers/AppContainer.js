import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators }from '../Actions';
import Routing from '../Routing';

class AppContainer extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Routing {...this.props} style={styles.container} />
        </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default connect(() => { return {} }, mapDispatchToProps)(AppContainer);
