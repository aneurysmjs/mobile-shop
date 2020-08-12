import { StyleSheet } from 'react-native';

import { H1_FONT_SIZE, THEME_COLORS, COLORS } from '@styles/variables';

import layout from '@styles/layout';

export default StyleSheet.create({
  homeContainer: {
    ...layout.container,
    marginTop: 80,
    justifyContent: 'flex-start',
  },
  mainHeader: {
    color: COLORS.WET_ASPHALT,
    fontSize: H1_FONT_SIZE,
    textAlign: 'center',
    marginBottom: 20,
  },
});
