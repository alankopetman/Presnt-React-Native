import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
		flex: 1,
		width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'black',
  },

	button: {
		borderRadius: 100/2,
		width: 100,
		height: 100,
		borderWidth: 1,
		borderColor: 'white',
		backgroundColor: 'black',
		color: 'white',
	},

	image: {
		height: 128,
		width: 128,
		borderRadius: 64,
	}
});

export default styles;
