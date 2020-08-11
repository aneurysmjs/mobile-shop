interface Padding {
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
}

/**
 * @link https://stackoverflow.com/a/55724273/5378393
 * @param {number} [top] padding-top
 * @param {number} [right] padding-right
 * @param {number} [bottom] padding-bottom
 * @param {number} [left] padding-left
 */
export default function padding(
  top: number,
  right?: number,
  bottom?: number,
  left?: number,
): Padding {
  return {
    paddingTop: top,
    paddingRight: right || top,
    paddingBottom: bottom || top,
    paddingLeft: left || right || top,
  };
}
