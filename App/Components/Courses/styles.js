import { StyleSheet } from 'react-native';
import { colors } from '../../Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    width: '100%',
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },

	fabWrapper: {
		flex: 1,
	},

	modal: {
		flex: 1,
		backgroundColor: colors.modal,
	},

	modalText: {
		color: colors.darkBlue,
	},

	spinnerContainer: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default styles;
