import { StyleSheet } from 'react-native';
import padding from '@styles/utils/padding';

export default StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'center',
    ...padding(0, 10),
  },
});
