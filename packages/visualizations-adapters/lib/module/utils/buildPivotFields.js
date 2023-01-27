import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { buildPivotMeasureName } from '.';

export const buildPivotFields = ({
  fields,
  pivots
}) => {
  const fieldsCopy = _objectSpread(_objectSpread({}, fields), {}, {
    pivots: [...((fields === null || fields === void 0 ? void 0 : fields.pivots) || [])]
  });
  fieldsCopy.measures = pivots.flatMap(({
    key,
    label: pivotLabel
  }) => {
    return fields.measures.map(measureField => {
      const pivotMeasureName = buildPivotMeasureName({
        measureName: measureField.name,
        pivotValue: key
      });
      return _objectSpread(_objectSpread({}, measureField), {}, {
        label_short: pivotLabel,
        name: pivotMeasureName,
        pivot_key: key,
        pivoted_label: `${measureField.label}: ${pivotLabel}`
      });
    });
  });
  return fieldsCopy;
};
//# sourceMappingURL=buildPivotFields.js.map