import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';
import { generateBlendColors } from './generateBlendColors';
import { generateDerivativeColors } from './generateDerivativeColors';
import { generateStatefulColors } from './generateStatefulColors';
export const generateColors = (themeColors, customColors) => {
  const specifiable = _objectSpread(_objectSpread({}, themeColors), pickBy(customColors, identity));

  if (customColors && customColors.text) {
    if (!customColors.body) {
      specifiable.body = undefined;
    }
    if (!customColors.title) {
      specifiable.title = undefined;
    }
  }
  const blends = generateBlendColors(specifiable);
  const derivatives = generateDerivativeColors(specifiable, blends);
  const statefulColors = generateStatefulColors(specifiable, derivatives);
  return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, specifiable), derivatives), blends), statefulColors);
};
//# sourceMappingURL=generateColors.js.map