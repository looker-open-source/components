import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { UnorderedList } from '../../../UnorderedList';
import { useMixedStateCheckbox } from '../../Inputs/Checkbox';
import { FieldCheckbox } from './FieldCheckbox';

const Template = args => React.createElement(FieldCheckbox, args);

export const Basic = Template.bind({});
Basic.args = {
  id: 'id',
  label: 'Example Field',
  name: 'thumbsUp'
};
export const DetailDescription = Template.bind({});
DetailDescription.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: 'describe something here.',
  detail: '4/20'
});
export const Checked = Template.bind({});
Checked.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  checked: true
});
export const DefaultChecked = Template.bind({});
DefaultChecked.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  defaultChecked: true
});
export const Disabled = Template.bind({});
Disabled.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  disabled: true
});
export const DisabledChecked = Template.bind({});
DisabledChecked.args = _objectSpread(_objectSpread({}, Checked.args), {}, {
  disabled: true
});
export const ReadOnly = Template.bind({});
ReadOnly.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  readOnly: true
});
export const Error = Template.bind({});
Error.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  validationMessage: {
    message: 'This is an error',
    type: 'error'
  }
});
export const DetailDescriptionError = Template.bind({});
DetailDescriptionError.args = _objectSpread(_objectSpread({}, DetailDescription.args), {}, {
  validationMessage: {
    message: 'This is an error',
    type: 'error'
  }
});
export const MixedState = () => {
  const [parentState, setParentState] = useState('mixed');
  const [appleState, setAppleState] = useState(true);
  const [bananaState, setBananaState] = useState(false);
  const [avocadoState, setAvocadoState] = useState(false);

  const handleAppleChange = () => setAppleState(!appleState);

  const handleBananaChange = () => setBananaState(!bananaState);

  const handleAvocadoChange = () => setAvocadoState(!avocadoState);

  const fruitTree = {
    children: [{
      setState: setAppleState,
      state: appleState
    }, {
      setState: setBananaState,
      state: bananaState
    }, {
      setState: setAvocadoState,
      state: avocadoState
    }],
    parent: {
      setState: setParentState,
      state: parentState
    }
  };
  const handleParentChange = useMixedStateCheckbox(fruitTree);
  return React.createElement(React.Fragment, null, React.createElement(FieldCheckbox, {
    id: "fruit-parent",
    name: "fruit",
    value: "all-fruit",
    onChange: handleParentChange,
    checked: parentState,
    label: "Fruit"
  }), React.createElement(UnorderedList, {
    pl: "large"
  }, React.createElement("li", null, React.createElement(FieldCheckbox, {
    id: "fruit-apple",
    name: "fruit",
    value: "apple",
    label: "Apple",
    onChange: handleAppleChange,
    checked: appleState
  })), React.createElement("li", null, React.createElement(FieldCheckbox, {
    id: "fruit-banana",
    name: "fruit",
    value: "banana",
    onChange: handleBananaChange,
    checked: bananaState,
    label: "Banana"
  })), React.createElement("li", null, React.createElement(FieldCheckbox, {
    id: "fruit-avocado",
    name: "fruit",
    value: "avocado",
    onChange: handleAvocadoChange,
    checked: avocadoState,
    label: "avocado"
  }))));
};
export default {
  argTypes,
  component: FieldCheckbox,
  title: 'FieldCheckbox'
};
//# sourceMappingURL=FieldCheckbox.stories.js.map