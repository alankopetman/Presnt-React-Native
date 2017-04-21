import { StyleSheet } from 'react-native';
import { colors } from '../Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.backgroundLight,
  },

  authContainer: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 10,
    padding: 10,
    alignItems: 'baseline',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },

	header: {
		width: '100%',
		height: 60,
		backgroundColor: colors.primary,
	},

	navContainer: {
		flex: 1,
		position: 'absolute',
		height: 50,
		backgroundColor: colors.navBar,
		borderColor: colors.navBarBorder,
		borderTopWidth: StyleSheet.hairlineWidth,
		bottom: 0,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-around',
	},

	tempIcon: {
		height: "50%",
		textAlign: 'center',
	},

	tempText: {
		height: '50%',
		textAlign: 'center',
		color: colors.darkBlue,
	},

	navButton: {
		flex: 1,
		height: '100%',
		alignItems: 'center',
	},

  active: {
    color: colors.primary,
    fontFamily: 'Avenir Next',
    fontSize: 25,
    marginTop: 10,
  },

  inactive: {
    color: colors.light,
    fontFamily: 'Avenir Next',
    fontSize: 10,
    marginTop: 10,
  },

});

export default styles;
