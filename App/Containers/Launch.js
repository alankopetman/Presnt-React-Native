/* @flow */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
	Button,
	TouchableHighlight,
} from 'react-native';

export default class Launch extends Component {
  render() {
		const Actions = this.props.routes;

    return (
      <View style={styles.container}>
            <View style={styles.container}>
                <Text>Launch page</Text>
                <Button onPress={()=>Actions.login({data:"Custom data", title:'Custom title' })}>Go to Login page</Button>
                <Button onPress={Actions.register}>Go to Register page</Button>
                <Button onPress={()=>Actions.register2({title: 'Register 2'})}>Go to Register page without animation</Button>
                <Button onPress={()=>Actions.error("Error message")}>Go to Error page</Button>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
});
