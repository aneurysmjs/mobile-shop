/**
 * @link https://github.com/andrenerd/react-native-bootstrap-styles/blob/master/src/constants.js
 */
import { StyleSheet } from 'react-native';

/**
 * colors
 */
// base colors
const WHITE = '#ffffff';
const BLACK = '#000000';
// grays
const GRAY_100 = '#f8f9fa';
const GRAY_200 = '#e9ecef';
const GRAY_300 = '#dee2e6';
const GRAY_400 = '#ced4da';
const GRAY_500 = '#adb5bd';
const GRAY_600 = '#6c757d';
const GRAY_700 = '#495057';
const GRAY_800 = '#343a40';
const GRAY_900 = '#212529';
// theme
const TURQUOISE = '#1abc9c';
const SUN_FLOWER = '#f1c40f';
const SILVER = '#bdc3c7';
const ALIZARIN = '#e74c3c';
const EMERALD = '#2ecc71';
const WET_ASPHALT = '#34495e';
const PETER_RIVER = '#3498db';

export const COLORS = {
  ALIZARIN,
  BLACK,
  EMERALD,
  PETER_RIVER,
  SILVER,
  SUN_FLOWER,
  TURQUOISE,
  WET_ASPHALT,
  WHITE,
};

export const GRAYS = {
  100: GRAY_100,
  200: GRAY_200,
  300: GRAY_300,
  400: GRAY_400,
  500: GRAY_500,
  600: GRAY_600,
  700: GRAY_700,
  800: GRAY_800,
  900: GRAY_900,
};

const PRIMARY = TURQUOISE;
const SECONDARY = SILVER;
const SUCCESS = EMERALD;
const INFO = PETER_RIVER;
const WARNING = SUN_FLOWER;
const DANGER = ALIZARIN;

export const THEME_COLORS = {
  PRIMARY,
  SECONDARY,
  SUCCESS,
  INFO,
  WARNING,
  DANGER,
};

const REM = 14;

/**
 * spacing
 */
export const SPACER = 1;

export const SPACERS = {
  0: 0,
  1: SPACER * 0.25,
  2: SPACER * 0.5,
  3: SPACER * 1,
  4: SPACER * 1.5,
  5: SPACER * 3,
};

export const SIZES = {
  5: '5%',
  10: '20%',
  15: '15%',
  20: '20%',
  25: '25%',
  30: '30%',
  35: '35%',
  40: '40%',
  45: '45%',
  50: '50%',
  55: '55%',
  60: '60%',
  65: '65%',
  70: '70%',
  75: '75%',
  80: '80%',
  85: '85%',
  90: '90%',
  95: '95%',
  100: '100%',
  Auto: 'auto', // what??
};

/**
 * body
 */

export const BODY_BG = WHITE;
export const BODY_COLOR = WET_ASPHALT;

/**
 * components
 */

// Components
export const LINE_HEIGHT_LG = 1.5 * REM;
export const LINE_HEIGHT_SM = 1.5 * REM;

export const BORDER_WIDTH = StyleSheet.hairlineWidth; // 1
export const BORDER_COLOR = GRAY_300;

export const BORDER_RADIUS = 0.25 * REM;
export const BORDER_RADIUS_LG = 0.3 * REM;
export const BORDER_RADIUS_SM = 0.2 * REM;

export const ROUNDED_PILL = 50 * REM;

export const SHADOW_COLOR_SM = BLACK;
export const SHADOW_OPACITY_SM = 0.075;
export const SHADOW_OFFSET_SM = { width: 0, height: 0.125 * REM };
export const SHADOW_RADIUS_SM = 0.25 * REM;

export const SHADOW_COLOR = BLACK;
export const SHADOW_OPACITY = 0.15;
export const SHADOW_OFFSET = { width: 0, height: 0.5 * REM };
export const SHADOW_RADIUS = 1 * REM;

export const SHADOW_COLOR_LG = BLACK;
export const SHADOW_OPACITY_LG = 0.175;
export const SHADOW_OFFSET_LG = { width: 0, height: 1 * REM };
export const SHADOW_RADIUS_LG = 3 * REM;

export const COMPONENT_ACTIVE_COLOR = WHITE;
export const COMPONENT_ACTIVE_BG = PRIMARY;

/**
 * Fonts
 */
export const FONT_FAMILY_SANS_SERIF = 'System'; // iOS: 'San Francisco'
export const FONT_FAMILY_MONOSPACE = 'Courier New'; // iOS: 'Courier New',
export const FONT_FAMILY_BASE = 'FONT_FAMILY_BASE';
export const FONT_FAMILY_BASE_LIGHT = 'FONT_FAMILY_BASE_LIGHT';
export const FONT_FAMILY_BASE_BOLD = 'FONT_FAMILY_BASE_BOLD';

export const FONT_SIZE_BASE = REM;
export const FONT_SIZE_SM = 0.875 * REM;
export const FONT_SIZE_LG = 1.25 * REM;

export const FONT_WEIGHT_LIGHT = '300';
export const FONT_WEIGHT_NORMAL = '400';
export const FONT_WEIGHT_BOLD = '700';

export const FONT_WEIGHT_BASE = FONT_WEIGHT_NORMAL;
export const LINE_HEIGHT_BASE = 1.5 * REM;

export const H1_FONT_SIZE = 2.5 * REM;
export const H2_FONT_SIZE = 2 * REM;
export const H3_FONT_SIZE = 1.75 * REM;
export const H4_FONT_SIZE = 1.5 * REM;
export const H5_FONT_SIZE = 1.25 * REM;
export const H6_FONT_SIZE = 1 * REM;

export const HEADINGS_MARGIN_BOTTOM = (SPACER / 2) * REM;
export const HEADINGS_FONT_FAMILY = FONT_FAMILY_BASE;
export const HEADINGS_FONT_WEIGHT = FONT_WEIGHT_BASE;
// const HEADINGS_COLOR = BODY_COLOR;
