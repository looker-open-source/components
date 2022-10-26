import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { FieldCheckbox } from '@looker/components';
const renderFor = ['table'];
export const ShowTotals = props => {
  const {
    config,
    onConfigChange
  } = props;
  const {
    show_totals
  } = config;

  if (!renderFor.includes(config.type)) {
    return null;
  }

  const handleChange = e => {
    const {
      checked
    } = e.target;

    const draft = _objectSpread(_objectSpread({}, config), {}, {
      show_totals: checked
    });

    onConfigChange(draft);
  };

  return React.createElement(FieldCheckbox, {
    label: "Show totals",
    checked: show_totals,
    onChange: handleChange
  });
};
//# sourceMappingURL=ShowTotals.js.map