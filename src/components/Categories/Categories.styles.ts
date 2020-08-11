import { StyleSheet } from 'react-native';

import { THEME_COLORS, COLORS, FONT_WEIGHT_BOLD } from '@styles/variables';

export default StyleSheet.create({
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  categoryItem: {
    backgroundColor: THEME_COLORS.PRIMARY,
    padding: 8,
    flexBasis: 190,
    marginTop: 10,
    borderRadius: 2,
  },
  categoryItemText: {
    color: COLORS.WHITE,
    fontWeight: FONT_WEIGHT_BOLD,
  },
});
