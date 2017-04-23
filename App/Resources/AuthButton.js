/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
	Animated,
	Easing,
} from 'react-native';
import { Button } from 'native-base';

import { colors } from '../Styles';

class FadeInView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),    
    };
  }
  componentWillReceiveProps(nextProps) {
		if(nextProps.disabled == false) {
			Animated.timing(                       
				this.state.fadeAnim,                  
				{
					toValue: 1,                          
				}
			).start();                                
		} else {
			Animated.timing(                       
				this.state.fadeAnim,                  
				{
					toValue: 0,                          
				}
			).start();                                
		}
  }
  render() {
    return (
      <Animated.View                            
				style={{
          ...this.props.style,
          opacity: this.state.fadeAnim
				}}>
        {this.props.children}
      </Animated.View>
    );
  }
}

function AuthButton (props) {
  return (
		<FadeInView disabled={props.disabled}>
			<Button
				full
				rounded 
				style={{
					backgroundColor: colors.primary,
					width: '70%',
					height: 40,
				}} 
				{...props}
			>
				<Text style={styles.buttonText}> {props.title} </Text>
			</Button>
		</FadeInView>
  );
}

export default AuthButton;

const styles = StyleSheet.create({
  active: {
		flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
	buttonText: {
		flex: 1,
		color: 'white',
		textAlign: 'center',
	}
});
