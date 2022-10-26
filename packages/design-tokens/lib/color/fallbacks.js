import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { charcoal000, charcoal100, charcoal200, charcoal300, charcoal400, charcoal500, charcoal600, charcoal700, charcoal800, purple000, purple100, purple300, purple400, red000, red100, red300, red400, red500, white } from '../legacy/palette';
import { defaultSpecifiableColors } from './defaultSpecifiableColors';
import { generateInteractive, generatePressed } from './utils';
import { generateExtendedStatefulColors } from './utils/generateStatefulColors';
export const fallbackBlends = {
  ui1: charcoal100,
  ui2: charcoal200,
  ui3: charcoal300,
  ui4: charcoal400,
  ui5: charcoal800,
  text1: charcoal400,
  text2: charcoal500,
  text3: charcoal600,
  text4: charcoal700,
  text5: charcoal800
};
export const fallbackStateful = _objectSpread({
  keySubtle: purple000,
  keyAccent: purple100,
  keyFocus: purple300,
  keyInteractive: generateInteractive(purple400),
  keyPressed: generatePressed(purple400),
  keyText: white,
  keyBorder: purple400,
  criticalSubtle: red000,
  criticalAccent: red100,
  criticalFocus: red300,
  criticalInteractive: generateInteractive(red500),
  criticalPressed: generatePressed(red500),
  criticalText: white,
  criticalBorder: red400,
  neutralSubtle: charcoal000,
  neutralAccent: charcoal100,
  neutralFocus: charcoal300,
  neutralInteractive: generateInteractive(charcoal500),
  neutralPressed: generatePressed(charcoal500),
  neutralText: white,
  neutralBorder: charcoal400
}, generateExtendedStatefulColors(defaultSpecifiableColors));
//# sourceMappingURL=fallbacks.js.map