import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { ArrowDropDown } from '@styled-icons/material/ArrowDropDown';
import { ArrowRight } from '@styled-icons/material/ArrowRight';
import { ExpandLess } from '@styled-icons/material-rounded/ExpandLess';
import { ExpandMore } from '@styled-icons/material-rounded/ExpandMore';
import React from 'react';
export const accordionDefaults = {
  density: 0,
  indicatorIcons: {
    close: React.createElement(ExpandMore, null),
    open: React.createElement(ExpandLess, null)
  },
  indicatorPosition: 'right'
};
export const accordionLeftDefaults = _objectSpread(_objectSpread({}, accordionDefaults), {}, {
  indicatorIcons: {
    close: React.createElement(ArrowRight, null),
    open: React.createElement(ArrowDropDown, null)
  },
  indicatorPosition: 'left'
});
//# sourceMappingURL=accordionDefaults.js.map