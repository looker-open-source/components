import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import { TagList } from './TagList';
const options = [{
  label: 'label1',
  value: 'value1'
}, {
  label: 'label2',
  value: 'value2'
}, {
  label: 'label3',
  value: 'value3'
}, {
  label: 'label11',
  value: 'value11'
}, {
  label: 'label22',
  value: 'value22'
}, {
  label: 'label33',
  value: 'value33'
}, {
  label: 'label111',
  value: 'value111'
}, {
  label: 'label222',
  value: 'value222'
}, {
  label: 'label333',
  value: 'value333'
}];

const Template = args => {
  const [value, setValue] = useState(args.value || []);

  const handleChange = newValue => {
    var _args$onChange;

    setValue(newValue);
    (_args$onChange = args.onChange) === null || _args$onChange === void 0 ? void 0 : _args$onChange.call(args, newValue);
  };

  return React.createElement(TagList, _extends({}, args, {
    value: value,
    onChange: handleChange
  }));
};

export const Basic = Template.bind({});
Basic.args = {
  options,
  value: []
};
export const WithValues = Template.bind({});
WithValues.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  value: options.map(x => x.value)
});
export default {
  title: 'Filters / Tag List Filter',
  component: TagList,
  argTypes: {
    onChange: {
      action: 'onChange'
    }
  }
};
//# sourceMappingURL=TagList.stories.js.map