import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { defaultArgTypes } from '@looker/storybook';
import { DialogLongContent } from '../../fixtures/DialogLongContent';
import { dialogSizes } from '../../Dialog/dialogWidth';
import { Drawer } from '../Drawer';
import { ButtonOutline } from '../../Button';
export * from './useDrawer.stories';
export * from './renderProps.stories';

const Template = args => React.createElement(Drawer, _extends({}, args, {
  content: React.createElement(DialogLongContent, null)
}), React.createElement(ButtonOutline, null, "Open Drawer"));

export const Basic = Template.bind({});
Basic.args = {};
Basic.parameters = {
  storyshots: {
    disable: true
  }
};
export const Open = Template.bind({});
Open.args = {
  defaultOpen: true
};
Open.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
export const PlacementLeft = Template.bind({});
PlacementLeft.args = {
  defaultOpen: true,
  placement: 'left'
};
PlacementLeft.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
export const Width = Template.bind({});
Width.args = _objectSpread(_objectSpread({}, Open.args), {}, {
  width: '50rem'
});
Width.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
export const AnimationCallbacks = Template.bind({});
AnimationCallbacks.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  onAfterClose: () => {
    console.log('Close');
  },
  onAfterOpen: () => {
    console.log('Open');
  }
});
AnimationCallbacks.parameters = {
  storyshots: {
    disable: true
  }
};
export default {
  argTypes: _objectSpread(_objectSpread({}, defaultArgTypes), {}, {
    width: {
      control: {
        options: Object.keys(dialogSizes),
        type: 'radio'
      }
    }
  }),
  component: Drawer,
  title: 'Drawer'
};
//# sourceMappingURL=Drawer.stories.js.map