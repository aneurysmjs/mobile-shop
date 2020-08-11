import { StyleSheet } from 'react-native';

import layout from '@styles/layout';

export default StyleSheet.create({
  homeContainer: {
    ...layout.container,
    marginTop: 80,
    justifyContent: 'flex-start',
  },
  mainHeader: {
    color: '#000',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
});
