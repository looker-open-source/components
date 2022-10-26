import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { generateColors } from '../../color';
import { defaultFontFallbacks } from '../../tokens';
import { generateDefaults } from '../../defaults';
import { generateFontFamilies } from '../../utils/typography';
export const generateTheme = (theme, customizations) => {
  if (!customizations) {
    return theme;
  }

  const {
    fontSources
  } = customizations;
  const fonts = customizations.fontFamilies ? generateFontFamilies(theme.fonts, defaultFontFallbacks, customizations.fontFamilies) : theme.fonts;
  const colors = customizations.colors ? generateColors(theme.colors, customizations.colors) : theme.colors;
  const defaults = customizations.defaults ? generateDefaults(theme.defaults, customizations.defaults) : theme.defaults;
  return _objectSpread(_objectSpread({}, theme), {}, {
    colors,
    defaults,
    fontSources,
    fonts
  });
};
//# sourceMappingURL=generateTheme.js.map