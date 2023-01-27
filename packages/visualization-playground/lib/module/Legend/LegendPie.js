import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import React from 'react';
import { FieldSelect, Fieldset } from '@looker/components';
const legendTypes = ['legend', 'labels'];
const legendValues = ['label', 'label_percent', 'label_value', 'percent', 'value'];
export const LegendPie = ({
  onConfigChange,
  config
}) => {
  const {
    legend
  } = config;
  if (!legend) return null;
  const handleTypeChange = newType => {
    const draft = _objectSpread(_objectSpread({}, config), {}, {
      legend: _objectSpread(_objectSpread({}, legend), {}, {
        type: newType
      })
    });
    onConfigChange(draft);
  };
  const handleValuesChange = newVal => {
    const draft = _objectSpread(_objectSpread({}, config), {}, {
      legend: _objectSpread(_objectSpread({}, legend), {}, {
        value: newVal
      })
    });
    onConfigChange(draft);
  };
  return React.createElement(Fieldset, {
    legend: "Legend Options",
    accordion: true,
    defaultOpen: true
  }, Object.prototype.hasOwnProperty.call(legend, 'type') && React.createElement(FieldSelect, {
    label: "Legend Type",
    options: legendTypes.map(t => ({
      value: t
    })),
    value: legend.type,
    onChange: handleTypeChange
  }), Object.prototype.hasOwnProperty.call(legend, 'value') && React.createElement(FieldSelect, {
    label: "Legend Values",
    options: legendValues.map(v => ({
      value: v
    })),
    value: legend.value,
    onChange: handleValuesChange
  }));
};
//# sourceMappingURL=LegendPie.js.map