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
  child1: {
    flex: 1,
    backgroundColor: 'blue',
    width: '100%'
  },
  child2: {
    flex: 1,
    backgroundColor: 'green',
    width: '100%'
  },
  child3: {
    flex: 2,
    backgroundColor: 'red',
    width: '100%'
  },
});

export default styles;
