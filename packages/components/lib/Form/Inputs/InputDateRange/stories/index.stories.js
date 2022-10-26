import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["value"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { InputDateRange } from '../InputDateRange';
export { default as Popover } from './Popover';
export default {
  argTypes,
  component: InputDateRange,
  title: 'Stories/Form/Inputs/InputDateRange'
};

const Template = _ref => {
  let {
    value
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  const [range, setRange] = useState(value);
  return React.createElement(InputDateRange, _extends({}, args, {
    value: range,
    onChange: setRange
  }));
};

export const Basic = Template.bind({});
Basic.args = {
  value: {}
};
export const Value = Template.bind({});
Value.args = {
  value: {
    from: new Date('June 3, 2019'),
    to: new Date('June 9, 2019')
  }
};
export const Error = Template.bind({});
Error.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  validationType: 'error'
});
export const Disabled = Template.bind({});
Disabled.args = _objectSpread(_objectSpread({}, Value.args), {}, {
  disabled: true
});
export const ReadOnly = Template.bind({});
ReadOnly.args = _objectSpread(_objectSpread({}, Value.args), {}, {
  readOnly: true
});
export const ExternalUpdates = () => {
  const [value, setValue] = useState({
    from: new Date('June 3, 2019'),
    to: new Date('June 9, 2019')
  });
  return React.createElement(React.Fragment, null, React.createElement("button", {
    onClick: () => setValue({
      from: new Date('June 5, 2019'),
      to: new Date('June 15, 2019')
    })
  }, "June 5 - 15, 2019"), React.createElement("button", {
    onClick: () => setValue({
      from: new Date('January 1, 2012'),
      to: new Date('February 15, 2012')
    })
  }, "January 1 - February 15, 2012"), React.createElement("button", {
    onClick: () => setValue({
      from: new Date('February 9, 2021')
    })
  }, "From: February 9, 2021"), React.createElement("button", {
    onClick: () => setValue({
      to: new Date('February 9, 2021')
    })
  }, "To: February 9, 2021"), React.createElement(InputDateRange, {
    value: value,
    onChange: setValue
  }));
};
ExternalUpdates.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=index.stories.js.map