import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { i18nInit } from '../../../../../utils';
import { NumberFilter } from './NumberFilter';
i18nInit();

const Template = args => React.createElement(NumberFilter, args);

export const Basic = Template.bind({});
Basic.args = {
  allowMultipleOptions: true,
  filterType: 'number',
  name: 'filtername',
  item: {
    id: '1',
    type: '=',
    is: true,
    value: []
  },
  showAdd: false,
  showName: true,
  showRemove: false,
  showOperator: false,
  showMatchesAdvanced: false
};
export const Error = Template.bind({});
Error.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  validationMessage: {
    type: 'error'
  }
});
export const GreaterThan = Template.bind({});
GreaterThan.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  item: {
    id: '1',
    is: true,
    type: '>',
    value: [99]
  }
});
export const GreaterThanError = Template.bind({});
GreaterThanError.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  item: {
    id: '1',
    is: true,
    type: '>',
    value: []
  },
  validationMessage: {
    type: 'error'
  }
});
export const Between = Template.bind({});
Between.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  item: {
    high: 10,
    id: '1',
    is: true,
    low: 5,
    type: 'between'
  }
});
export const BetweenError = Template.bind({});
BetweenError.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  item: {
    id: '1',
    is: true,
    type: 'between'
  },
  validationMessage: {
    type: 'error'
  }
});
export default {
  title: 'Filters / Number Filter',
  component: NumberFilter
};
//# sourceMappingURL=NumberFilter.stories.js.map