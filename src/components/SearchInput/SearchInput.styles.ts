import { StyleSheet } from 'react-native';

import padding from '@styles/utils/padding';

export default StyleSheet.create({
  input: {
    height: 40,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    ...padding(0, 5),
  },
});
