import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
const _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Box2 } from '../Box2';
import { Grid } from './Grid';
export default {
  argTypes,
  component: Grid,
  title: 'Grid'
};

const Placeholder = props => React.createElement(Box2, _extends({
  color: "white",
  bg: "key",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  display: "flex",
  minHeight: "3rem"
}, props));

const Template = _ref => {
  let {
    children
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Grid, args, children);
};

export const Basic = Template.bind({});
Basic.args = {
  children: React.createElement(React.Fragment, null, React.createElement(Placeholder, {
    minHeight: "5rem"
  }, "A"), React.createElement(Placeholder, null, "B"), React.createElement(Placeholder, null, "C"), React.createElement(Placeholder, null, "D"))
};
export const Columns = Template.bind({});
Columns.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  columns: 4
});
export const GapSize = Template.bind({});
GapSize.args = {
  children: React.createElement(React.Fragment, null, React.createElement(Placeholder, null, "C"), React.createElement(Placeholder, null, "D")),
  gap: 'u10'
};
export const VerticalGrid = () => React.createElement(Grid, {
  columns: 4
}, React.createElement(Grid, {
  columns: 1,
  gap: "u10"
}, React.createElement(Placeholder, {
  minHeight: "5rem"
}, "A"), React.createElement(Placeholder, null, "B"), React.createElement(Placeholder, null, "C"), React.createElement(Placeholder, null, "D")));
//# sourceMappingURL=Grid.stories.js.map