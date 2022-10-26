import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { FieldSelect } from '@looker/components';
const renderFor = ['area', 'bar', 'column'];
const barPositions = ['grouped', 'stacked', 'percent'];
const linePositions = ['overlay', 'stacked', 'percent'];
export const Positioning = props => {
  const {
    config,
    onConfigChange
  } = props;

  if (!renderFor.includes(config.type)) {
    return null;
  }

  const handleChange = newPosition => {
    const draft = _objectSpread(_objectSpread({}, config), {}, {
      positioning: newPosition
    });

    onConfigChange(draft);
  };

  const positions = config.type === 'bar' || config.type === 'column' ? barPositions : linePositions;
  return React.createElement(FieldSelect, {
    label: "Positioning",
    value: config.positioning,
    onChange: handleChange,
    options: positions.map(p => ({
      value: p
    }))
  });
};
//# sourceMappingURL=Positioning.js.map