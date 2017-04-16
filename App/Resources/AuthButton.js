/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
	Animated,
	Easing,
} from 'react-native';

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
			<View style={styles.active}>
				<Button style={styles.button} {...props} />
			</View>
		</FadeInView>
  );
}

export default AuthButton;

const styles = StyleSheet.create({
  active: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    borderRadius: 20,
    backgroundColor: colors.primary,
  },
  button: {
    backgroundColor: 'white',
    color: 'white',
  }
});
