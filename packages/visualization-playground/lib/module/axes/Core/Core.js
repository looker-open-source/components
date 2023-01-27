import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import { SpaceVertical, ButtonToggle, ButtonItem, FieldText } from '@looker/components';
import partial from 'lodash/partial';
import curry from 'lodash/curry';
import { Checkbox } from '../../Checkbox';
import { TickDensity } from './TickDensity';
import { Range } from './Range';
import has from 'lodash/has';
export const Core = ({
  onAxisChange,
  axisConfig
}) => {
  const [group, setGroup] = useState('1');
  const handleLabelChange = curry((i, axis, e) => {
    const {
      value
    } = e.target;
    onAxisChange(i, _objectSpread(_objectSpread({}, axis), {}, {
      label: value.length ? value : false
    }));
  });
  return React.createElement(React.Fragment, null, axisConfig.length > 1 && React.createElement(ButtonToggle, {
    value: group,
    onChange: setGroup
  }, axisConfig.map((_, i) => React.createElement(ButtonItem, {
    key: i
  }, String(i + 1)))), axisConfig.map((axis, i) => {
    return String(i + 1) === group && React.createElement(SpaceVertical, {
      key: i
    }, has(axis, 'label') && React.createElement(FieldText, {
      label: "Label",
      value: typeof axis.label === 'string' ? axis.label : '',
      onChange: handleLabelChange(i)(axis)
    }), has(axis, 'reversed') && React.createElement(Checkbox, {
      label: "Reverse",
      checked: axis.reversed,
      onChange: checked => onAxisChange(i, _objectSpread(_objectSpread({}, axis), {}, {
        reversed: checked
      }))
    }), has(axis, 'gridlines') && React.createElement(Checkbox, {
      label: "Render Gridlines",
      checked: axis.gridlines,
      onChange: checked => onAxisChange(i, _objectSpread(_objectSpread({}, axis), {}, {
        gridlines: checked
      }))
    }), has(axis, 'values') && React.createElement(Checkbox, {
      label: "Show Values",
      checked: axis.values,
      onChange: checked => onAxisChange(i, _objectSpread(_objectSpread({}, axis), {}, {
        values: checked
      }))
    }), has(axis, 'tick_density') && React.createElement(TickDensity, {
      axis: axis,
      onAxisChange: partial(onAxisChange, i)
    }), has(axis, 'range') && React.createElement(Range, {
      axis: axis,
      onAxisChange: partial(onAxisChange, i)
    }));
  }));
};
//# sourceMappingURL=Core.js.map