import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { FilterErrorMessage } from './FilterErrorMessage';
export default {
  title: 'Filters / FilterErrorMessage',
  component: FilterErrorMessage
};

const Template = args => {
  return React.createElement(FilterErrorMessage, args);
};

export const Basic = Template.bind({});
Basic.args = {
  filters: [{
    expression: '',
    expressionType: 'string',
    isRequired: true,
    name: 'testfilter'
  }]
};
export const UserAttributesError = Template.bind({});
UserAttributesError.args = {
  filters: [{
    expression: "{{ _user_attributes['first_name'] }}",
    expressionType: 'string',
    name: 'testfilter'
  }],
  userAttributes: [{
    name: 'first_name',
    value: ''
  }]
};
export const UserAttributesErrorLong = Template.bind({});
UserAttributesErrorLong.args = _objectSpread(_objectSpread({}, UserAttributesError.args), {}, {
  useLongMessageForm: true,
  userAttributes: [{
    name: 'first_name',
    value: ''
  }]
});
//# sourceMappingURL=FilterErrorMessage.stories.js.map