import { StyleSheet } from 'react-native';
import { colors } from '../../Styles';

const styles = StyleSheet.create({
  container: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.background,
  },

  text: {
		flex: 1,
    color: 'black',
		textAlign: 'center',
  },

	button: {
		borderRadius: 100/2,
		width: 100,
		height: 100,
		borderWidth: 1,
		borderColor: 'white',
		backgroundColor: colors.primary
	},

	image: {
		height: 128,
		width: 128,
		borderRadius: 64,
	}
});

export default styles;
