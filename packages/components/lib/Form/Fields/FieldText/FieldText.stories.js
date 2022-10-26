import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["externalLabel"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { AccountCircle, Settings } from '@styled-icons/material-outlined';
import { AddAlert, Favorite } from '@styled-icons/material';
import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Button } from '../../../Button';
import { Icon } from '../../../Icon';
import { Space, SpaceVertical } from '../../../Layout';
import { Text } from '../../../Text';
import { Tooltip } from '../../../Tooltip';
import { useToggle } from '../../../utils';
import { FieldCheckbox } from '../FieldCheckbox';
import { FieldRadio } from '../FieldRadio';
import { FieldToggleSwitch } from '../FieldToggleSwitch';
import { FieldText } from './FieldText';
export default {
  argTypes,
  component: FieldText,
  title: 'FieldText'
};

const Template = _ref => {
  let {
    externalLabel = true
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel
      }
    }
  }, React.createElement(FieldText, args));
};

export const Basic = Template.bind({});
Basic.args = {
  label: 'Text Input'
};
export const NoLabel = Template.bind({});
NoLabel.args = {};
export const Detail = Template.bind({});
Detail.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  detail: '0/50'
});
export const Description = Template.bind({});
Description.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: 'Some important information about this field'
});
export const Inline = Template.bind({});
Inline.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  detail: 'Detail inline looks like this',
  inline: true
});
export const Disabled = Template.bind({});
Disabled.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  disabled: true
});
export const Required = Template.bind({});
Required.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  required: true
});
export const Placeholder = Template.bind({});
Placeholder.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  placeholder: 'Placeholder text here'
});
export const Value = Template.bind({});
Value.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  value: 'Text here'
});
export const Error = Template.bind({});
Error.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  validationMessage: {
    message: 'Error Message',
    type: 'error'
  }
});
export const Before = Template.bind({});
Before.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  before: '$',
  label: 'Dollars'
});
export const After = Template.bind({});
After.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  after: '%',
  label: 'Percent'
});
export const IconBefore = Template.bind({});
IconBefore.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  iconBefore: React.createElement(Settings, null),
  label: 'Settings'
});
export const IconAfter = Template.bind({});
IconAfter.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  iconAfter: React.createElement(Settings, null),
  label: 'Settings'
});
export const FloatingLabel = Template.bind({});
FloatingLabel.args = {
  description: 'Some important information about this field',
  detail: '0/50',
  externalLabel: false,
  label: 'Floating Label'
};
export const FloatingLabelValue = Template.bind({});
FloatingLabelValue.args = _objectSpread(_objectSpread({}, FloatingLabel.args), {}, {
  defaultValue: 'Value'
});
export const FloatingLabelIcon = Template.bind({});
FloatingLabelIcon.args = _objectSpread(_objectSpread({}, FloatingLabel.args), {}, {
  iconBefore: React.createElement(Settings, null)
});
export const FloatingLabelValidation = Template.bind({});
FloatingLabelValidation.args = _objectSpread(_objectSpread({}, FloatingLabel.args), {}, {
  validationMessage: {
    message: 'Error Message',
    type: 'error'
  }
});
export const FloatingLabelNoLabel = Template.bind({});
FloatingLabelNoLabel.args = {
  externalLabel: false
};
export const Toggles = () => React.createElement(React.Fragment, null, React.createElement(FieldCheckbox, {
  label: "Checkbox"
}), React.createElement(FieldCheckbox, {
  required: true,
  label: "Checkbox",
  validationMessage: {
    message: 'validation Message',
    type: 'error'
  }
}), React.createElement(FieldCheckbox, {
  disabled: true,
  label: "Checkbox"
}), React.createElement(FieldCheckbox, {
  required: true,
  label: "Checkbox"
}), React.createElement(FieldRadio, {
  label: "Radio"
}), React.createElement(FieldRadio, {
  disabled: true,
  label: "Radio"
}), React.createElement(FieldToggleSwitch, {
  label: "Toggle Switch"
}), React.createElement(FieldToggleSwitch, {
  required: true,
  label: "Toggle Switch",
  validationMessage: {
    message: 'validation Message',
    type: 'error'
  }
}), React.createElement(FieldToggleSwitch, {
  disabled: true,
  label: "Toggle Switch"
}), React.createElement(FieldToggleSwitch, {
  required: true,
  label: "Toggle Switch"
}));
Toggles.parameters = {
  storyshots: {
    disable: true
  }
};
export const AutoResize = () => {
  return React.createElement(Space, {
    align: "end"
  }, React.createElement(FieldText, {
    autoResize: true,
    placeholder: "Start typing to resize me"
  }), React.createElement(FieldText, {
    label: "I also resize",
    autoResize: true,
    defaultValue: "Some default text",
    detail: "Detail lines up"
  }), React.createElement(FieldText, {
    label: "Inline autoResize",
    inline: true,
    autoResize: true,
    defaultValue: "Some default text",
    detail: "Detail text"
  }));
};
AutoResize.parameters = {
  storyshots: {
    disable: true
  }
};
export const BeforeAfterValidation = () => {
  const {
    value,
    toggle
  } = useToggle(true);
  const validation = value ? {
    validationMessage: {
      message: 'Oops!',
      type: 'error'
    }
  } : {};
  return React.createElement(SpaceVertical, {
    align: "start"
  }, React.createElement(Button, {
    onClick: toggle
  }, "Toggle error state"), React.createElement(Space, null, React.createElement(FieldText, _extends({
    label: "iconBefore",
    iconBefore: React.createElement(Favorite, null)
  }, validation)), React.createElement(FieldText, _extends({
    label: "iconAfter",
    iconAfter: React.createElement(AccountCircle, null)
  }, validation)), React.createElement(FieldText, _extends({
    label: "before string",
    before: "$"
  }, validation)), React.createElement(FieldText, _extends({
    label: "after string",
    after: "%"
  }, validation)), React.createElement(FieldText, _extends({
    label: "before & after",
    before: React.createElement(Tooltip, {
      content: "Some very important info"
    }, React.createElement(Icon, {
      icon: React.createElement(AddAlert, null),
      size: "small",
      style: {
        cursor: 'default'
      }
    })),
    after: React.createElement(Text, {
      fontSize: "small",
      color: value ? 'critical' : 'info'
    }, "Helper text")
  }, validation))));
};
BeforeAfterValidation.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=FieldText.stories.js.map