import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import { Slider, FieldRadio, Field, useID } from '@looker/components';
export const TickDensity = props => {
  const {
    axis,
    onAxisChange
  } = props;
  const [densityToggle, setDensityToggle] = useState();

  const handleSliderChange = e => {
    const draft = _objectSpread(_objectSpread({}, axis), {}, {
      tick_density: parseInt(e.target.value)
    });

    onAxisChange(draft);
  };

  const handleToggleChange = e => {
    const {
      value
    } = e.target;
    setDensityToggle(value);
  };

  const groupID = useID();
  return React.createElement(React.Fragment, null, React.createElement(Field, {
    id: groupID,
    label: "Tick Density"
  }, React.createElement(FieldRadio, {
    name: `${groupID}-default`,
    label: "Default",
    value: "default",
    checked: densityToggle === 'default',
    onChange: handleToggleChange
  }), React.createElement(FieldRadio, {
    name: `${groupID}-custom`,
    label: "Custom",
    value: "custom",
    checked: densityToggle === 'custom',
    onChange: handleToggleChange
  })), densityToggle === 'custom' && React.createElement(Slider, {
    min: 0,
    max: 100,
    onChange: handleSliderChange
  }));
};
//# sourceMappingURL=TickDensity.js.map