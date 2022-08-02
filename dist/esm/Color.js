/*
import { Enumerate } from './helper-types'

type RGBDigit = Enumerate<256>

type RGB = `rgb(${RGBDigit}, ${RGBDigit}, ${number})`;
type RGBA = `rgba(${RGBDigit}, ${RGBDigit}, ${number}, ${number})`;

type HexDigit =
  '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F';

type MinHexDigitColor = `${HexDigit}${HexDigit}${HexDigit}`;
type ShortHexColor = `#${MinHexDigitColor}`;
type LongHexColor = `${ShortHexColor}${MinHexDigitColor}`;
type HexColor = LongHexColor | ShortHexColor;
*/
const colors = {
  black: '#000000',
  gray: '#1B2B34',
  grayLight: '#334048',
  red: '#EC5f67',
  orange: '#F99157',
  yellow: '#FAC863',
  green: '#99C794',
  teal: '#5FB3B3',
  blue: '#6699CC',
  purple: '#C594C5',
  brown: '#AB7967',
  white: '#FFFFFF'
};
export default colors;
//# sourceMappingURL=Color.js.map