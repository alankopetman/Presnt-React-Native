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

});

export default styles;
