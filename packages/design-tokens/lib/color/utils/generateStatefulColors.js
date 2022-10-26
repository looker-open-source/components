import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import darken from 'polished/lib/color/darken';
import lighten from 'polished/lib/color/lighten';
import { mixScaledColors } from './mixScaledColors';
export const generateInteractive = color => lighten(0.04, color);
export const generatePressed = color => darken(0.07, color);
export const accentBlendScale = 16;
export const generateStatefulColor = (background, color) => {
  return {
    subtle: mixScaledColors(10, color, background),
    accent: mixScaledColors(accentBlendScale, color, background),
    focus: mixScaledColors(60, color, background),
    interactive: generateInteractive(color),
    pressed: generatePressed(color),
    text: background,
    border: color
  };
};
export const generateExtendedStatefulColors = specifiable => {
  const {
    background,
    calculation,
    dimension,
    measure
  } = specifiable;
  const calculationColors = generateStatefulColor(background, calculation);
  const dimensionColors = generateStatefulColor(background, dimension);
  const measureColors = generateStatefulColor(background, measure);
  return {
    calculationSubtle: calculationColors.subtle,
    calculationAccent: calculationColors.accent,
    calculationFocus: calculationColors.focus,
    calculationInteractive: calculationColors.interactive,
    calculationPressed: calculationColors.pressed,
    calculationText: calculationColors.text,
    calculationBorder: calculationColors.border,
    dimensionSubtle: dimensionColors.subtle,
    dimensionAccent: dimensionColors.accent,
    dimensionFocus: dimensionColors.focus,
    dimensionInteractive: dimensionColors.interactive,
    dimensionPressed: dimensionColors.pressed,
    dimensionText: dimensionColors.text,
    dimensionBorder: dimensionColors.border,
    measureSubtle: measureColors.subtle,
    measureAccent: measureColors.accent,
    measureFocus: measureColors.focus,
    measureInteractive: measureColors.interactive,
    measurePressed: measureColors.pressed,
    measureText: measureColors.text,
    measureBorder: measureColors.border
  };
};
export const generateStatefulColors = (specifiable, derivatives) => {
  const {
    background,
    key,
    critical
  } = specifiable;
  const {
    neutral
  } = derivatives;
  const extendedStatefulColors = generateExtendedStatefulColors(specifiable);
  const keyColors = generateStatefulColor(background, key);
  const criticalColors = generateStatefulColor(background, critical);
  const neutralColors = generateStatefulColor(background, neutral);
  return _objectSpread({
    keySubtle: keyColors.subtle,
    keyAccent: keyColors.accent,
    keyFocus: keyColors.focus,
    keyInteractive: keyColors.interactive,
    keyPressed: keyColors.pressed,
    keyText: keyColors.text,
    keyBorder: keyColors.border,
    criticalSubtle: criticalColors.subtle,
    criticalAccent: criticalColors.accent,
    criticalFocus: criticalColors.focus,
    criticalInteractive: criticalColors.interactive,
    criticalPressed: criticalColors.pressed,
    criticalText: criticalColors.text,
    criticalBorder: criticalColors.border,
    neutralSubtle: neutralColors.subtle,
    neutralAccent: neutralColors.accent,
    neutralFocus: neutralColors.focus,
    neutralInteractive: neutralColors.interactive,
    neutralPressed: neutralColors.pressed,
    neutralText: neutralColors.text,
    neutralBorder: neutralColors.border
  }, extendedStatefulColors);
};
//# sourceMappingURL=generateStatefulColors.js.map