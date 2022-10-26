import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import { DashboardFilter } from './DashboardFilter';

const Template = args => {
  const [expression, setExpression] = useState(args.expression);

  const handleChange = newExpression => {
    var _args$onChange;

    setExpression(newExpression);
    (_args$onChange = args.onChange) === null || _args$onChange === void 0 ? void 0 : _args$onChange.call(args, newExpression);
  };

  return React.createElement(DashboardFilter, _extends({}, args, {
    expression: expression,
    onChange: handleChange
  }));
};

export const Basic = Template.bind({});
Basic.args = {
  expression: '',
  filter: {
    field: {
      is_numeric: true
    },
    name: 'Cost',
    type: 'field_filter',
    allow_multiple_values: true
  }
};
export const Suggestions = Template.bind({});
Suggestions.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  filter: {
    field: {
      suggestable: typeof jest === 'undefined'
    },
    name: 'Status',
    type: 'field_filter',
    ui_config: {
      type: 'button_group'
    },
    allow_multiple_values: true
  },
  sdk: {
    ok: value => value,
    get: () => ({
      suggestions: ['complete', 'pending', 'cancelled']
    })
  }
});
export const Validation = Template.bind({});
Validation.args = _objectSpread(_objectSpread({}, Suggestions.args), {}, {
  filter: _objectSpread(_objectSpread({}, Suggestions.args.filter), {}, {
    required: true,
    allow_multiple_values: true
  })
});
export default {
  title: 'Filters / DashboardFilter',
  component: DashboardFilter
};
//# sourceMappingURL=DashboardFilter.stories.js.map