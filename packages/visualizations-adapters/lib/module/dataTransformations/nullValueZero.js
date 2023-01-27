import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { getMeasureNames } from '../utils';
import pick from 'lodash/pick';

export const nullValueZero = ({
  data,
  fields,
  config
}) => {
  if (config !== null && config !== void 0 && config.render_null_values) {
    const measureNames = getMeasureNames(fields);
    const draftData = data.map(d => {
      const measures = Object.entries(pick(d, measureNames)).map(([key, val]) => [key, Number(val)]);
      return _objectSpread(_objectSpread({}, d), Object.fromEntries(measures));
    });
    return {
      data: draftData,
      fields,
      config
    };
  }
  return {
    data,
    fields,
    config
  };
};
//# sourceMappingURL=nullValueZero.js.map