import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { defaultCoreColors, defaultIntentColors } from '../defaults';
import { generateBlendColors } from './generateBlendColors';

const specifiableColors = _objectSpread(_objectSpread({}, defaultCoreColors), defaultIntentColors);

describe('generateBlendColors', () => {
  test('default', () => {
    expect(generateBlendColors(specifiableColors)).toMatchInlineSnapshot({}, `
      Object {
        "text1": "#9da0a3",
        "text2": "#71767a",
        "text3": "#555b5f",
        "text4": "#40464b",
        "text5": "#262D33",
        "ui1": "#f4f4f4",
        "ui2": "#e0e0e0",
        "ui3": "#c4c4c4",
        "ui4": "#a8a8a8",
        "ui5": "#262626",
      }
    `);
  });
  test('dark mode', () => {
    expect(generateBlendColors(_objectSpread(_objectSpread({}, specifiableColors), {}, {
      background: specifiableColors.text,
      text: specifiableColors.background
    }))).toMatchInlineSnapshot({}, `
      Object {
        "text1": "#878b8e",
        "text2": "#b3b5b7",
        "text3": "#cfd0d2",
        "text4": "#e4e5e6",
        "text5": "#FFFFFF",
        "ui1": "#33393f",
        "ui2": "#4d5257",
        "ui3": "#707579",
        "ui4": "#94989b",
        "ui5": "#fff",
      }
    `);
  });
});
//# sourceMappingURL=generateBlendColors.spec.js.map