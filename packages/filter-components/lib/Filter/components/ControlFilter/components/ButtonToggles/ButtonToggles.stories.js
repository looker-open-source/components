import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import { Button, Dialog, DialogLayout } from '@looker/components';
import { ButtonToggles } from './ButtonToggles';
const options = [{
  label: 'label1',
  value: 'value1'
}, {
  label: 'label2',
  value: 'value2'
}, {
  label: 'label3',
  value: 'value3'
}];

const Template = args => {
  const [value, setValue] = useState(args.value || '');

  const handleChange = newValue => {
    var _args$onChange;

    setValue(newValue);
    (_args$onChange = args.onChange) === null || _args$onChange === void 0 ? void 0 : _args$onChange.call(args, newValue);
  };

  return React.createElement(ButtonToggles, _extends({}, args, {
    value: value,
    onChange: handleChange
  }));
};

export const Basic = Template.bind({});
Basic.args = {
  options,
  value: options[1].value
};
export const InsideADialog = () => {
  const [value, setValue] = useState('');

  const handleChange = newValue => {
    setValue(newValue);
  };

  return React.createElement(Dialog, {
    content: React.createElement(DialogLayout, null, React.createElement(ButtonToggles, {
      options: options,
      value: value,
      onChange: handleChange
    }))
  }, React.createElement(Button, null, "Open"));
};
InsideADialog.parameters = {
  storyshots: {
    disable: true
  }
};
export const Loading = Template.bind({});
Loading.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  isLoading: true
});
Loading.parameters = {
  storyshots: {
    disable: true
  }
};
export default {
  title: 'Filters / ButtonToggles',
  component: ButtonToggles
};
//# sourceMappingURL=ButtonToggles.stories.js.map