import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import { isNumeric } from '@looker/visualizations-adapters';
import { FieldSelect, FieldText } from '@looker/components';
import { LegendPie } from './LegendPie';

const legendPositions = ['left', 'right', 'top', 'bottom'];
const renderLegendFor = ['area', 'bar', 'column', 'line', 'pie', 'scatter'];
export const Legend = props => {
  const {
    config,
    onConfigChange
  } = props;
  const [width, setWidth] = useState();
  if (!renderLegendFor.includes(config.type)) {
    return null;
  }
  const {
    legend
  } = config;
  const position = config.legend ? config.legend.position : 'none';
  const handlePositionChange = draftPosition => {
    if (draftPosition === 'none') {
      onConfigChange(_objectSpread(_objectSpread({}, config), {}, {
        legend: false
      }));
    } else {
      onConfigChange(_objectSpread(_objectSpread({}, config), {}, {
        legend: _objectSpread(_objectSpread({}, legend), {}, {
          position: draftPosition
        })
      }));
    }
  };
  const handleWidthChange = e => {
    const value = e.target.value;
    onConfigChange(_objectSpread(_objectSpread({}, config), {}, {
      legend: _objectSpread(_objectSpread({}, legend), {}, {
        width: Number(isNumeric(value)) ? Number(value) : undefined
      })
    }));
    setWidth(value);
  };
  return React.createElement(React.Fragment, null, React.createElement(FieldSelect, {
    label: "Legend",
    options: ['none', ...legendPositions].map(p => ({
      value: p
    })),
    value: position,
    onChange: handlePositionChange
  }), (position === 'left' || position === 'right') && React.createElement(FieldText, {
    label: "Legend Width",
    value: width,
    onChange: handleWidthChange
  }), config.type === 'pie' && React.createElement(LegendPie, {
    config: props.config,
    onConfigChange: props.onConfigChange
  }));
};
//# sourceMappingURL=Legend.js.map