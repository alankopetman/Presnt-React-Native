import React from 'react';
import { 
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity 
} from 'react-native';
import {
  NativeRouter,
  Route,
  Link
} from 'react-router-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators }from '../Actions';
import styles from './styles';
import { baseStyles, colors } from '../Styles';
import { withRouter } from 'react-router';

import { AppHeader } from '../Resources';
import {
  Login,
  Registration,
  Home,
} from '../Components';

class Auth extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			path: ''
		}
	}

	componentDidMount(){
    console.log(this);
	}


	render() {
		return(
			<View style={styles.container}>
				<AppHeader />

				<View style={styles.navContainer}>
					<Link
						to="/login"
						underlayColor="blue"
						component={TouchableOpacity}
						activeOpacity={0.8}
					>
						<Text
							onPress={() => {
									this.state.path='/login'
									console.log(this)
								}}
								style={this.state.path == '/login' ? styles.active : styles.inactive}
						> LOGIN</Text>
					</Link>

					<Link
						to="/register"
						underlayColor="blue"
						component={TouchableOpacity}
						activeOpacity={0.8}
					>
						<Text
							style={this.state.path == 'register' ? styles.active : styles.inactive}
							onPress={() => {this.state.path='/register'}}
						> REGISTER</Text>
					</Link>
				</View>
				<Route
					exact path="/login"
					component={Login}
					{...this.props}
					loginHandler={this.loginSubmitHandler}
				 />
				<Route 
					exact path="/register" 
					component={Registration}
					{...this.props}
					loginHandler={this.loginSubmitHandler}
				/>
			</View>
			)
	}
}

const AuthRouter = withRouter(Auth);

function mapStateToProps(state) {
  return {
    token: state.setUser.token,
    user: state.setUser.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthRouter);
