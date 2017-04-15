import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNavigationHelpers, StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import { ActionCreators }from '../Actions';

import DashBoard from '../Components/DashBoard';

export const AppNavigator = StackNavigator({
	DashBoard: { screen: DashBoard },
});

const AppContainer = ({ dispatch, nav }) => (
	<AppNavigator navigation={
		addNavigationHelpers({
			dispatch,
			state: nav
		})
	} 
	/>
);

AppContainer.propTypes = {
	dispatch: PropTypes.func.isRequired,
	nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	nav: state.nav,
	user: state.setUser.user,
	token: state.setUser.token
});

const mapDispatchToProps = dispatch =>  (
	bindActionCreators(ActionCreators, dispatch)
);

export default connect(mapStateToProps)(AppContainer);
