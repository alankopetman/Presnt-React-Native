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
	Link,
	withRouter,
	Redirect,
} from 'react-router-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators }from '../Actions';

import {
  Login,
  Registration,
  DashBoard,
	Courses,
	Settings,
} from '../Components';
import { AppHeader } from '../Resources';
import styles from './styles';
import { icons } from '../Styles';

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: '',
			text: '',
    }
  }

	componentDidMount(){
    console.log(this);
	}

	componentWillUnmount() {
    console.log(this.props);
	}

	setActive = (path, activeIcon, inactiveIcon) => {
		return (this.props.route == path ?  
			activeIcon : inactiveIcon)
	}

  render() {
    return (
      <NativeRouter>
				<Route path="/" render={() => (
					this.props.user ? (
						<View style={styles.container}>
							<Route
								exact path="/courses"
								component={Courses}
								{...this.props}
							/>

							<Route
								exact path="/dashboard"
								component={DashBoard}
								{...this.props}
							/>

							<Route
								exact path="/settings"
								component={Settings}
								{...this.props}
							/>

							<View style={styles.navContainer}>
								<Link
									to="/courses"
									component={TouchableOpacity}
									activeOpacity={0.3}
								>
									<View style={styles.navButton}>
										{this.setActive(
											'/courses',
											icons.coursesActive,
											icons.coursesInactive
										)}
										<Text style={styles.tempText}>Courses</Text>
									</View>
								</Link>

								<Link
									to="/dashboard"
									component={TouchableOpacity}
									activeOpacity={0.3}
								>
									<View style={styles.navButton}>
										{this.setActive(
											'/dashboard',
											icons.homeActive,
											icons.homeInactive
										)}
										<Text style={styles.tempText}>Home</Text>
									</View>
								</Link>

								<Link
									to="/settings"
									component={TouchableOpacity}
									activeOpacity={0.3}
								>
									<View style={styles.navButton}>
										{this.setActive(
											'/settings',
											icons.settingsActive,
											icons.settingsInactive
										)}
										<Text style={styles.tempText}>Settings</Text>
									</View>
								</Link>
							</View>
						<Redirect to="/dashboard" />
						</View>
						) : (
						<View style={styles.container}>
							<AppHeader />

							<View style={styles.authContainer}>
								<Link
									to="/login"
									underlayColor="blue"
									component={TouchableOpacity}
									activeOpacity={0.8}
								>
									<Text
									> LOGIN</Text>
								</Link>

								<Link
									to="/register"
									underlayColor="blue"
									component={TouchableOpacity}
									activeOpacity={0.8}
								>
									<Text
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
				<Redirect to="/login" />
			</View>
			)
		)} />
      </NativeRouter>
    )
  }
}

function mapStateToProps(state) {
  return {
    token: state.setUser.token,
    user: state.setUser.user,
		prof: state.setUser.prof,
		route: state.setPath.path,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);
