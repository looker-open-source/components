import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState, useMemo } from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { options1kGrouped } from '../Select/stories/options1k';
import { InputSearch } from './InputSearch';

const Template = args => React.createElement(InputSearch, args);

export const Basic = Template.bind({});
Basic.args = {};
export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Type your search'
};
export const Value = Template.bind({});
Value.args = _objectSpread(_objectSpread({}, Placeholder.args), {}, {
  value: 'Search term'
});
export const Summary = Template.bind({});
Summary.args = _objectSpread(_objectSpread({}, Placeholder.args), {}, {
  summary: '5/10 results'
});
export const DefaultValue = Template.bind({});
DefaultValue.args = _objectSpread(_objectSpread({}, Placeholder.args), {}, {
  defaultValue: 'Default search term'
});
export const NoIcon = Template.bind({});
NoIcon.args = _objectSpread(_objectSpread({}, Placeholder.args), {}, {
  hideSearchIcon: true
});
export const AutoResize = Template.bind({});
AutoResize.args = {
  autoResize: true,
  maxWidth: 250,
  placeholder: 'Resizes to fit value'
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  value: 'No Search.'
};
export const ReadOnly = Template.bind({});
ReadOnly.args = {
  readOnly: true,
  value: 'Only read'
};
ReadOnly.parameters = {
  storyshots: {
    disable: true
  }
};
export const GroupedWindowing = Template.bind({});
GroupedWindowing.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  options: options1kGrouped,
  width: 300
});
GroupedWindowing.parameters = {
  storyshots: {
    disable: true
  }
};
export const Advanced = () => {
  const [value, setValue] = useState('');
  const options = useMemo(() => {
    const startingOptions = [{
      description: 'Really great description',
      detail: 'so cool',
      value: 'Foo'
    }, {
      detail: 'got details?',
      value: 'Bar'
    }];
    return startingOptions.filter(option => option.value.toUpperCase().indexOf(value.toUpperCase()) > -1);
  }, [value]);
  return React.createElement(InputSearch, {
    value: value,
    onChange: setValue,
    options: options,
    noOptionsLabel: "Nothing matched your search",
    isClearable: false,
    autoFocus: true
  });
};
export default {
  argTypes,
  component: InputSearch,
  title: 'InputSearch'
};
//# sourceMappingURL=InputSearch.stories.js.map