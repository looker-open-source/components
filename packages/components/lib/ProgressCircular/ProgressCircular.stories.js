import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { defaultArgTypes } from '@looker/storybook';
import { ProgressCircular } from './ProgressCircular';

const Template = args => React.createElement(ProgressCircular, args);

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  size: 'large'
};
Indeterminate.argTypes = {
  progress: {
    table: {
      disable: true
    }
  }
};
Indeterminate.parameters = {
  storyshots: {
    disable: true
  }
};
export const Determinate = Template.bind({});
Determinate.args = {
  size: 'large',
  progress: 0.5
};
export default {
  component: ProgressCircular,
  title: 'ProgressCircular',
  argTypes: _objectSpread(_objectSpread({}, defaultArgTypes), {}, {
    size: {
      control: {
        type: 'select',
        options: ['xsmall', 'small', 'medium', 'large']
      }
    },
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1
      }
    }
  })
};
//# sourceMappingURL=ProgressCircular.stories.js.map