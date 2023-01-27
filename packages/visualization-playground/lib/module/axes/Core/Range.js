import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { isNumeric } from '@looker/visualizations-adapters';
import { FieldText, Fieldset } from '@looker/components';
import { FieldInfo } from '../../FieldInfo';
export const Range = props => {
  const {
    axis,
    axis: {
      range = ['auto', 'auto']
    },
    onAxisChange
  } = props;
  const [yMin, yMax] = range;
  const deriveRangeValue = e => {
    const {
      value
    } = e.target;
    switch (true) {
      case isNumeric(value):
        return Number(value);
      case value === '-':
        return value;
      default:
        return 'auto';
    }
  };
  const handleMinChange = e => {
    onAxisChange(_objectSpread(_objectSpread({}, axis), {}, {
      range: [deriveRangeValue(e), yMax]
    }));
  };
  const handleMaxChange = e => {
    onAxisChange(_objectSpread(_objectSpread({}, axis), {}, {
      range: [yMin, deriveRangeValue(e)]
    }));
  };
  return React.createElement(Fieldset, {
    inline: true
  }, React.createElement(FieldText, {
    label: "Y-min",
    value: yMin,
    onChange: handleMinChange,
    detail: React.createElement(FieldInfo, {
      content: "Number or 'auto'"
    })
  }), React.createElement(FieldText, {
    label: "Y-max",
    value: yMax,
    onChange: handleMaxChange,
    detail: React.createElement(FieldInfo, {
      content: "Number or 'auto'"
    })
  }));
};
//# sourceMappingURL=Range.js.map