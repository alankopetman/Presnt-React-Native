import { StyleSheet } from 'react-native';
import { colors } from '../../Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    width: '100%',
    backgroundColor: colors.background,
  },

	header: {
		backgroundColor: colors.primary,
	},

	studentsContainer: {
		flex: 4,
		width: '100%',
		backgroundColor: 'white',
	},

	studentLabel: {
		height: 50,
		width: '100%',
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: StyleSheet.hairlineWidth,
		shadowColor: 'black',
		shadowOffset: { width: 100, height: 3 },
		shadowRadius: 30,
	},

	studentLabelText: {
		color: colors.darkBlue,
		fontSize: 20,
	},

	actionButtonWrapper: {
		position: 'absolute',
		borderRadius: 28,
		height: 56,
		width: 56,
		backgroundColor: colors.primary,
		bottom: 0,
		right: 0,
	},

	scrollStyles: {
    justifyContent: 'center',
    alignItems: 'center',
	},

	buttonContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		backgroundColor: 'black',
	},

	copyLabel: {
		fontSize: 20,
		opacity: .8,
		textAlign: 'center',
		color: 'white',
		paddingBottom: 5,
	},

	copyText: {
		flex: 1,
		color: 'white',
		textAlign: 'center',
	}
});

export default styles;
