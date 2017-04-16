import { StyleSheet } from 'react-native';

const colors = {
  primary: '#65C5FF',
	darkBlue: '#0076FF',
  light: '#D6D6D6',
  medLight: '#979797',
  background: '#F0F0F0',
  backgroundLight: 'white',
	navBar: '#FAFAFA',
	navBarBorder: '#B2B2B2',
	inactivePrimary: '#A0C8E1',
}

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.backgroundLight,
  },

  inputContainer: {
    padding: 20,
    width: '100%',
  },

  input: {
    textAlign: 'center',
    height: 40,
    color: '#333333',
  },

  authInput: {
    textAlign: 'center',
    height: 40,
    color: '#333333',
    borderBottomColor: 'black',
    borderBottomWidth: 20
  },
});
module.exports = { baseStyles, colors };
