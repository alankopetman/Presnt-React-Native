import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
    flex: 1,
    paddingBottom: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
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
});

export default styles;
