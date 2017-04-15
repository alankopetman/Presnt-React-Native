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

import {
  Login,
  Registration,
  Home,
} from '../Components';
import { AppHeader } from '../Resources';
import { authRoutes, anonRoutes } from './routes';
import styles from './styles';
import { baseStyles, colors } from '../Styles';

class MainRoutes extends React.Component {
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

  render() {
    const RoutesWithSubRoutes = (route) => (
      <Route path={route.path} render={props => (
        <route.component {...props} routes={route.routes} />
      )} />
    );

    return (
			<View style={styles.navContainer}>

				<Link
					to="/home"
					underlayColor="blue"
				>
					<Text>Home</Text>
				</Link>

				{authRoutes().map((authRoutes, i) => (
					<RoutesWithSubRoutes key={i} {...authRoutes} />
				))}
			</View>
    )
  }
}

function mapStateToProps(state) {
  return {
    token: state.setUser.token,
    user: state.setUser.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainRoutes);
