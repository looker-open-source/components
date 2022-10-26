import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { Home } from '@styled-icons/material-outlined';
import React from 'react';
import { VIEWPORT_MAP } from '../../utils-storybook';
import { Icon } from '../../Icon';
import { Box } from './Box';
export default {
  component: Box,
  title: 'Box'
};

const Template = _ref => {
  let {
    children
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(React.Fragment, null, React.createElement(Box, args, children), React.createElement(Box, args, children));
};

const responsiveArgs = {
  border: true,
  borderRadius: 'medium',
  children: React.createElement(React.Fragment, null, React.createElement(Icon, {
    display: "inline-flex",
    icon: React.createElement(Home, null),
    size: "medium"
  }), " Looker"),
  color: 'key',
  display: ['block', 'inline-block'],
  fontFamily: 'brand',
  fontSize: ['small', 'large'],
  fontWeight: 'bold',
  height: ['100px', '200px', '50vh'],
  letterSpacing: '10',
  lineHeight: ['small', 'large'],
  m: ['none', null, 'u4', 'u8'],
  maxHeight: '500px',
  maxWidth: '500px',
  textAlign: ['left', 'center', 'right'],
  width: ['100px', '200px', '50vw']
};
export const MobileLayout = Template.bind({});
MobileLayout.args = _objectSpread({}, responsiveArgs);
MobileLayout.parameters = {
  storyshots: {
    disable: true
  },
  viewport: {
    defaultViewport: 'mobile',
    viewports: VIEWPORT_MAP
  }
};
export const TabletLayout = Template.bind({});
TabletLayout.args = _objectSpread({}, responsiveArgs);
TabletLayout.parameters = {
  storyshots: {
    disable: true
  },
  viewport: {
    defaultViewport: 'tablet',
    viewports: VIEWPORT_MAP
  }
};
export const DesktopLayout = Template.bind({});
DesktopLayout.args = _objectSpread({}, responsiveArgs);
DesktopLayout.parameters = {
  storyshots: {
    disable: true
  },
  viewport: {
    defaultViewport: 'desktop',
    viewports: VIEWPORT_MAP
  }
};
const absolutePositioned = {
  alignContent: 'flex-end',
  alignItems: 'baseline',
  bg: 'key',
  children: React.createElement(React.Fragment, null, "A Box"),
  color: 'text1',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  height: '50px',
  justifyContent: 'center',
  position: 'absolute',
  width: '50vw'
};
export const Positioning = () => React.createElement(React.Fragment, null, React.createElement(Box, _extends({}, absolutePositioned, {
  top: "1rem",
  left: "1rem"
})), React.createElement(Box, {
  bg: "ui3",
  alignItems: "center",
  justifyItems: "center",
  justifyContent: "center",
  flexBasis: "1",
  display: "flex",
  order: "unset",
  height: "100vh"
}, React.createElement(Box, {
  textAlign: "center"
}, "Background box")), React.createElement(Box, _extends({}, absolutePositioned, {
  bottom: "1rem",
  right: "1rem"
})));
Positioning.parameters = {
  storyshots: {
    disable: true
  },
  viewport: {
    defaultViewport: 'mobile',
    viewports: VIEWPORT_MAP
  }
};
//# sourceMappingURL=Box.stories.js.map