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

	setActiveStyles(path) {
		this.state.path = path;
	}

  render() {
    const RoutesWithSubRoutes = (route) => (
      <Route path={route.path} render={props => (
        <route.component {...props} routes={route.routes} />
      )} />
    );

    return (
      <NativeRouter>
				<Route path="/" render={() => (
					!this.props.user ? (
						<View style={styles.container}>
							<View style={styles.header} />
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
										<Text style={styles.tempIcon}>🙏</Text>
										<Text style={styles.tempText}>Courses</Text>
									</View>
								</Link>

								<Link
									to="/dashboard"
									component={TouchableOpacity}
									activeOpacity={0.3}
								>
									<View style={styles.navButton}>
										<Text style={styles.tempIcon}>💩</Text>
										<Text style={styles.tempText}>Home</Text>
									</View>
								</Link>

								<Link
									to="/settings"
									component={TouchableOpacity}
									activeOpacity={0.3}
								>
									<View style={styles.navButton}>
										<Text style={styles.tempIcon}>🔥</Text>
										<Text style={styles.tempText}>Settings</Text>
									</View>
								</Link>
							</View>
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
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);
