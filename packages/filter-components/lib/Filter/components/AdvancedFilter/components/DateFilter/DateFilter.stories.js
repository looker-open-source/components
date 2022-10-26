import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { i18nInit } from './../../../../../utils';
import { DateFilter } from './DateFilter';
i18nInit();

const Template = args => React.createElement(DateFilter, args);

export const Basic = Template.bind({});
Basic.args = {
  filterType: 'date',
  name: 'filtername',
  item: {
    id: '1',
    type: 'after',
    is: false
  },
  showAdd: false,
  showName: true,
  showRemove: false,
  showOperator: false,
  showMatchesAdvanced: false
};
export const Relative = Template.bind({});
Relative.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  item: {
    id: '1',
    is: false,
    endInterval: {
      type: 'interval',
      value: 3,
      unit: 'week'
    },
    intervalType: 'ago',
    startInterval: {
      type: 'interval',
      value: 3,
      unit: 'month'
    },
    type: 'relative'
  }
});
export default {
  title: 'Filters / Date Filter',
  component: DateFilter
};
//# sourceMappingURL=DateFilter.stories.js.map