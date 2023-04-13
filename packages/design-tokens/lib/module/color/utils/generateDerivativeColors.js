import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { textBlends } from '../blendPoints';
import { accentBlendScale, generateInteractive } from './generateStatefulColors';
import { mixColors } from './mixColors';
import { mixScaledColors } from './mixScaledColors';
export const generateDerivativeColors = ({
  background,
  inform,
  link,
  positive,
  text,
  warn,
  title,
  body
}, {
  text5
}) => {
  const accents = {
    informAccent: mixScaledColors(accentBlendScale, inform, background),
    positiveAccent: mixScaledColors(accentBlendScale, positive, background),
    warnAccent: mixScaledColors(accentBlendScale, warn, background)
  };
  return _objectSpread({
    body: body || text5,
    field: background,
    inverse: text,
    inverseOn: background,
    linkInteractive: generateInteractive(link),
    neutral: mixColors(textBlends[1], text, background),
    title: title || text5
  }, accents);
};
//# sourceMappingURL=generateDerivativeColors.js.map