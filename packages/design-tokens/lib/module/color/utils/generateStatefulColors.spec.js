import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { colors } from '../colors';
import { defaultCoreColors, defaultIntentColors } from '../defaults';
import { fallbackBlends } from '../fallbacks';
import { generateDerivativeColors } from './generateDerivativeColors';
import { generateStatefulColor, generateStatefulColors } from './generateStatefulColors';
const {
  background,
  key
} = colors;
const specifiableColors = _objectSpread(_objectSpread({}, defaultCoreColors), defaultIntentColors);
const derivedColors = generateDerivativeColors(specifiableColors, fallbackBlends);
describe('generateStatefulColors', () => {
  describe('generateStatefulColor', () => {
    test('text1', () => {
      expect(generateStatefulColor(background, key)).toMatchInlineSnapshot({}, `
        Object {
          "accent": "#e7e0fa",
          "border": "#6C43E0",
          "focus": "#a68eec",
          "interactive": "#7a55e3",
          "pressed": "#5424db",
          "subtle": "#f0ecfb",
          "text": "#FFFFFF",
        }
      `);
    });
  });
  describe('enerateStatefulColors', () => {
    test('text1', () => {
      expect(generateStatefulColors(specifiableColors, derivedColors)).toMatchInlineSnapshot({}, `
        Object {
          "calculationAccent": "#deeddb",
          "calculationBorder": "#319220",
          "calculationFocus": "#83bd79",
          "calculationInteractive": "#37a324",
          "calculationPressed": "#27751a",
          "calculationSubtle": "#eaf4e8",
          "calculationText": "#FFFFFF",
          "criticalAccent": "#f6dbde",
          "criticalBorder": "#CC1F36",
          "criticalFocus": "#e07886",
          "criticalInteractive": "#dd223b",
          "criticalPressed": "#ad1a2e",
          "criticalSubtle": "#f9e8ea",
          "criticalText": "#FFFFFF",
          "dimensionAccent": "#dee6ef",
          "dimensionBorder": "#31689E",
          "dimensionFocus": "#83a4c4",
          "dimensionInteractive": "#3672ae",
          "dimensionPressed": "#295683",
          "dimensionSubtle": "#eaeff5",
          "dimensionText": "#FFFFFF",
          "keyAccent": "#e7e0fa",
          "keyBorder": "#6C43E0",
          "keyFocus": "#a68eec",
          "keyInteractive": "#7a55e3",
          "keyPressed": "#5424db",
          "keySubtle": "#f0ecfb",
          "keyText": "#FFFFFF",
          "measureAccent": "#f5e9dd",
          "measureBorder": "#C2772E",
          "measureFocus": "#daad81",
          "measureInteractive": "#cf8135",
          "measurePressed": "#a56527",
          "measureSubtle": "#f8f1ea",
          "measureText": "#FFFFFF",
          "neutralAccent": "#e8e9e9",
          "neutralBorder": "#71767a",
          "neutralFocus": "#a9acaf",
          "neutralInteractive": "#7b8085",
          "neutralPressed": "#606467",
          "neutralSubtle": "#f0f1f1",
          "neutralText": "#FFFFFF",
        }
      `);
    });
  });
});
//# sourceMappingURL=generateStatefulColors.spec.js.map