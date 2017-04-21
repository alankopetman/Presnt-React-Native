import { StyleSheet } from 'react-native';
import { colors } from '../../Styles';

const styles = StyleSheet.create({
	container: {
    flex: 1,
    paddingBottom: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
	},

	swipeContainer: {
		flex: 1,
    alignItems: 'center',
	},

	swipeControl: {
    alignItems: 'flex-start',
	},

  contentContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 50,
  },

  inputContainer: {
    flex: 1,
    marginTop: 25,
		width: '100%',
    alignItems: 'center',
  },

  login: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

	slide1: {
		alignItems: 'center',
	},

	slide2: {
		alignItems: 'center',
	},

  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    borderRadius: 20,
    backgroundColor: colors.primary,
  },

  button: {
		height: 30,
    backgroundColor: colors.primary,
    color: 'white',
  },

});

export default styles;
