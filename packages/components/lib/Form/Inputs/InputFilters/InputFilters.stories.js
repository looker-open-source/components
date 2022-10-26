import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["filters"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { filters } from '../../../fixtures/filters';
import { InputText } from '../InputText';
import { InputFilters } from './';

const Template = _ref => {
  let {
    filters
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  const [controlledFilters, setControlledFilters] = useState(filters);
  return React.createElement(InputFilters, _extends({}, args, {
    filters: controlledFilters,
    onChange: setControlledFilters
  }));
};

const withValue = {
  field: 'status',
  formatValue: value => value.toUpperCase(),
  options: ['Failed', 'Success'],
  value: 'Success'
};

const EditorComponent = ({
  closeEditor,
  onChange,
  value: _value = ''
}) => {
  const handleChange = event => {
    onChange(event.currentTarget.value);
  };

  return React.createElement(InputText, {
    "data-autofocus": "true",
    value: _value,
    onChange: handleChange,
    onBlur: closeEditor
  });
};

const customFilters = [{
  editor: EditorComponent,
  field: 'important',
  label: 'Important'
}];

const CustomTemplate = _ref2 => {
  let args = _extends({}, _ref2);

  const [controlledFilters, setControlledFilters] = useState(customFilters);
  return React.createElement(InputFilters, _extends({}, args, {
    filters: controlledFilters,
    onChange: setControlledFilters
  }));
};

export const Basic = Template.bind({});
Basic.args = {
  filters
};
Basic.args = {
  filters
};
export const FilterSelected = Template.bind({});
FilterSelected.args = {
  filters: [withValue, ...filters]
};
export const HideFilterIcon = Template.bind({});
HideFilterIcon.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  hideFilterIcon: true
});
export const CustomEditor = CustomTemplate.bind({});
CustomEditor.args = {
  filters: customFilters
};
CustomEditor.parameters = {
  storyshots: {
    disable: true
  }
};
export default {
  argTypes,
  component: InputFilters,
  title: 'InputFilters'
};
//# sourceMappingURL=InputFilters.stories.js.map