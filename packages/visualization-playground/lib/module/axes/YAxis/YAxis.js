import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { Core } from '../Core';
import { Fieldset } from '@looker/components';
import has from 'lodash/has';

const renderFor = ['area', 'bar', 'column', 'line', 'scatter', 'sparkline'];
export const YAxis = props => {
  const {
    config,
    config: {
      y_axis = []
    },
    onConfigChange
  } = props;
  if (!renderFor.includes(config.type) && !has(config, 'y_axis')) {
    return null;
  }
  const handleConfigChange = (axisIndex, axis) => {
    const draftYAxis = [...y_axis];
    draftYAxis[axisIndex] = axis;
    onConfigChange(_objectSpread(_objectSpread({}, config), {}, {
      y_axis: [...draftYAxis]
    }));
  };
  return React.createElement(Fieldset, {
    legend: "Y-Axis",
    defaultOpen: true,
    accordion: true
  }, React.createElement(Core, {
    axisConfig: y_axis,
    onAxisChange: handleConfigChange
  }));
};
//# sourceMappingURL=YAxis.js.map