import { StyleSheet } from 'react-native';

import padding from '@styles/utils/padding';
import { BORDER_COLOR, BORDER_RADIUS, BORDER_WIDTH } from '@styles/variables';

export default StyleSheet.create({
  input: {
    height: 40,
    borderRadius: BORDER_RADIUS,
    borderColor: BORDER_COLOR,
    borderWidth: BORDER_WIDTH,
    width: '100%',
    ...padding(0, 5),
  },
});
