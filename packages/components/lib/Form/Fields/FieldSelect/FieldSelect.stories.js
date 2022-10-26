import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["externalLabel"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import { Favorite } from '@styled-icons/material';
import chunk from 'lodash/chunk';
import React, { useMemo, useState, useEffect } from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Card, CardContent } from '../../../Card';
import { Button } from '../../../Button';
import { Dialog, DialogContent, DialogLayout } from '../../../Dialog';
import { Divider } from '../../../Divider';
import { Icon } from '../../../Icon';
import { Flex, Space, SpaceVertical } from '../../../Layout';
import { PopoverContent, usePopover } from '../../../Popover';
import { Heading, Paragraph, Text } from '../../../Text';
import { Form } from '../../';
import { Label } from '../../Label';
import { useToggle } from '../../../utils';
import { FieldToggleSwitch } from '../FieldToggleSwitch';
import { cheeseOptions, iconOptions, options, optionsWithGroups } from '../../Inputs/Select/stories/options';
import { options1k } from '../../Inputs/Select/stories/options1k';
import { FieldSelect } from './FieldSelect';

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
  }, React.createElement(FieldSelect, args));
};

export const Basic = Template.bind({});
Basic.args = {
  label: 'Label',
  options: cheeseOptions,
  placeholder: 'Placeholder'
};
export const Value = Template.bind({});
Value.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  value: 'gouda'
});
export const Disabled = Template.bind({});
Disabled.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  disabled: true
});
export const DisabledValue = Template.bind({});
DisabledValue.args = _objectSpread(_objectSpread({}, Disabled.args), {}, {
  value: 'gouda'
});
export const Detail = Template.bind({});
Detail.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  detail: '0/50'
});
export const Description = Template.bind({});
Description.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: "I'm a little teapot"
});
export const DescriptionDetailFloatingLabel = Template.bind({});
DescriptionDetailFloatingLabel.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: "I'm a little teapot",
  detail: '0/50',
  externalLabel: false
});
export const Required = Template.bind({});
Required.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  required: true
});
export const Error = Template.bind({});
Error.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  validationMessage: {
    message: 'Error Message',
    type: 'error'
  }
});
export const ErrorValue = Template.bind({});
ErrorValue.args = _objectSpread(_objectSpread({}, Error.args), {}, {
  value: 'gouda'
});
export const ErrorValueFloatingLabel = Template.bind({});
ErrorValueFloatingLabel.args = _objectSpread(_objectSpread({}, Error.args), {}, {
  externalLabel: false,
  value: 'gouda'
});
export const Inline = Template.bind({});
Inline.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  inline: true
});
export const ErrorInline = Template.bind({});
ErrorInline.args = _objectSpread(_objectSpread({}, Error.args), {}, {
  inline: true
});
export const AutoResize = Template.bind({});
AutoResize.args = _objectSpread(_objectSpread({}, Detail.args), {}, {
  autoResize: true
});
export const AutoResizeFloatingLabel = Template.bind({});
AutoResizeFloatingLabel.args = _objectSpread(_objectSpread({}, Detail.args), {}, {
  autoResize: true,
  externalLabel: false
});
const optionsWithDescriptions = options.map(option => _objectSpread(_objectSpread({}, option), {}, {
  description: `${option.label} are the best ever!`
}));

const checkOption = (option, searchTerm) => {
  return option.label && option.label.toLowerCase().includes(searchTerm.toLowerCase());
};

const optionReducer = searchTerm => {
  return (acc, option) => {
    const optionAsGroup = option;

    if (optionAsGroup.options) {
      const filteredGroupOptions = optionAsGroup.options.filter(option => checkOption(option, searchTerm));

      if (filteredGroupOptions.length > 0) {
        return [...acc, _objectSpread(_objectSpread({}, optionAsGroup), {}, {
          options: filteredGroupOptions
        })];
      }

      return acc;
    }

    if (checkOption(option, searchTerm)) {
      return [...acc, option];
    }

    return acc;
  };
};

const TestIndicator = () => {
  return React.createElement(Text, {
    color: "pink"
  }, "***");
};

export const SelectContent = () => {
  const [value, setValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleClick = e => {
    const fruit = e.currentTarget.getAttribute('data-fruit') || '';
    setValue(fruit);
  };

  const handleChange = value => {
    setValue(value);
  };

  const handleFilter = term => {
    setSearchTerm(term);
  };

  const newOptions = useMemo(() => {
    if (searchTerm === '') return options1k;
    return options1k.reduce(optionReducer(searchTerm), []);
  }, [searchTerm]);
  const unMemoizedOptions = [{
    value: 'Cheddar'
  }, {
    value: 'Gouda'
  }];
  return React.createElement(SpaceVertical, {
    align: "start",
    maxWidth: 600
  }, React.createElement(Heading, null, "Select"), React.createElement(FieldSelect, {
    label: "1k (windowed) options",
    width: 300,
    options: options1k,
    "aria-label": "Fruits",
    placeholder: "Select Brand",
    defaultValue: "Boulder Creek",
    autoFocus: true
  }), React.createElement(Label, null, "Use alignSelf=\"flex-start\" to avoid filling height as a flex child"), React.createElement(Flex, null, React.createElement(Flex, {
    height: 200,
    width: 200,
    bg: "ui3",
    alignItems: "center",
    justifyContent: "center",
    mr: "small"
  }, "200 x 200"), React.createElement(FieldSelect, {
    width: 300,
    options: newOptions,
    "aria-label": "Fruits",
    placeholder: "Controlled, searchable, clearable",
    isClearable: true,
    value: value,
    onChange: handleChange,
    onFilter: handleFilter,
    isFilterable: true,
    alignSelf: "flex-start"
  })), React.createElement(Button, {
    mt: "medium",
    mr: "small",
    "data-fruit": "5",
    onClick: handleClick
  }, "Kiwis"), React.createElement(Button, {
    mt: "medium",
    "data-fruit": "3",
    onClick: handleClick
  }, "Oranges"), React.createElement(Divider, {
    my: "xlarge"
  }), React.createElement(FieldSelect, {
    label: "Default Value",
    options: options,
    "aria-label": "Fruits",
    defaultValue: "1"
  }), React.createElement(FieldSelect, {
    label: "Groups",
    options: optionsWithGroups,
    "aria-label": "Fruits",
    defaultValue: "1"
  }), React.createElement(FieldSelect, {
    label: "Descriptions",
    options: optionsWithDescriptions,
    "aria-label": "Fruits",
    defaultValue: "1"
  }), React.createElement(FieldSelect, {
    label: "Error",
    options: options,
    "aria-label": "Fruits",
    placeholder: "Select One",
    defaultValue: "1",
    validationMessage: {
      message: 'An error message',
      type: 'error'
    }
  }), React.createElement(FieldSelect, {
    label: "Disabled",
    options: options,
    "aria-label": "Fruits",
    placeholder: "Select One",
    disabled: true,
    defaultValue: "1"
  }), React.createElement(FieldSelect, {
    label: "Indicator",
    options: [...options, {
      indicator: TestIndicator,
      label: 'I have my own indicator',
      value: 'indicator'
    }],
    "aria-label": "Fruits",
    defaultValue: "1",
    indicator: React.createElement(Icon, {
      icon: React.createElement(Favorite, null)
    })
  }), React.createElement(FieldSelect, {
    label: "Test option re-render bug",
    options: unMemoizedOptions
  }));
};
SelectContent.parameters = {
  storyshots: {
    disable: true
  }
};

const SelectDemoInner = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const {
    popover,
    domProps
  } = usePopover({
    content: React.createElement(PopoverContent, null, React.createElement(SelectContent, null))
  });
  return React.createElement(SpaceVertical, {
    align: "start"
  }, popover, React.createElement(Dialog, {
    isOpen: isOpen,
    onClose: handleClose
  }, React.createElement(DialogContent, null, React.createElement(SelectContent, null))), React.createElement(Space, null, React.createElement(Button, domProps, "Open Popover"), React.createElement(Button, {
    onClick: handleClick
  }, "Open Dialog")), React.createElement(Card, {
    maxWidth: "500px",
    maxHeight: "300px"
  }, React.createElement(CardContent, null, React.createElement(Form, {
    validationMessages: {
      fruitGroups: {
        message: 'This is an error',
        type: 'error'
      }
    }
  }, React.createElement(Heading, null, "Error State"), React.createElement(FieldSelect, {
    label: "Fruit Groups",
    name: "fruitGroups",
    width: 300,
    options: optionsWithGroups,
    "aria-label": "Fruits",
    defaultValue: "1"
  }), React.createElement(FieldSelect, {
    label: "Another Grouped Dropdown",
    name: "anotherGroup",
    width: 300,
    options: optionsWithGroups,
    "aria-label": "Fruits",
    defaultValue: "1",
    isClearable: true,
    autoFocus: true
  })))));
};

export const SelectDemo = () => React.createElement(SelectDemoInner, null);
SelectDemo.parameters = {
  storyshots: {
    disable: true
  }
};
export const UpdateOptions = () => {
  const [value, setValue] = useState('second');
  const {
    value: isPlural,
    toggle
  } = useToggle();
  const s = isPlural ? 's' : '';
  const options = useMemo(() => [{
    label: `Second${s}`,
    value: 'second'
  }, {
    label: `Hour${s}`,
    value: 'hour'
  }], [s]);
  return React.createElement(Space, null, React.createElement(Button, {
    onClick: toggle
  }, "Use ", isPlural ? 'singular' : 'plural'), React.createElement(FieldSelect, {
    autoResize: true,
    options: options,
    value: value,
    onChange: setValue
  }));
};
UpdateOptions.parameters = {
  storyshots: {
    disable: true
  }
};
export const EmptyValue = () => {
  const [value, setValue] = useState(false);

  const handleToggle = e => {
    setValue(e.currentTarget.checked);
  };

  const [selectValue, setSelectValue] = useState('Option A');
  const options = [{
    value: 'Option A'
  }, {
    value: 'Option B'
  }];
  return React.createElement(Space, {
    p: "u5"
  }, React.createElement(FieldToggleSwitch, {
    label: "Use empty value",
    on: value,
    onChange: handleToggle
  }), React.createElement(FieldSelect, {
    value: value ? '' : selectValue,
    placeholder: "Can't change me when toggle is on",
    onChange: setSelectValue,
    options: options
  }), React.createElement(FieldSelect, {
    value: value ? '' : selectValue,
    onChange: setSelectValue,
    options: [{
      label: 'Option with empty string value',
      value: ''
    }, ...options]
  }));
};
EmptyValue.parameters = {
  storyshots: {
    disable: true
  }
};
export const OptionIcons = () => {
  const [filterTerm, setFilterTerm] = useState('');
  const newOptions = useMemo(() => {
    return iconOptions.filter(iconOption => iconOption.label.toLowerCase().indexOf(filterTerm.toLowerCase()) > -1);
  }, [filterTerm]);
  return React.createElement(Space, null, React.createElement(FieldSelect, {
    label: "With Filtering",
    options: newOptions,
    placeholder: "Search visualizations",
    isFilterable: true,
    onFilter: setFilterTerm,
    isClearable: true
  }), React.createElement(FieldSelect, {
    label: "No Filtering",
    options: iconOptions,
    placeholder: "Select a visualization"
  }), React.createElement(FieldSelect, {
    label: "Descriptions",
    options: iconOptions.map(option => _objectSpread(_objectSpread({}, option), {}, {
      description: 'This is a description'
    })),
    placeholder: "Select a visualization"
  }), React.createElement(FieldSelect, {
    label: "Groups",
    options: chunk(iconOptions, 5).map((arr, index) => ({
      label: `Group ${index + 1}`,
      options: arr
    })),
    placeholder: "Select a visualization"
  }), React.createElement(FieldSelect, {
    label: "Custom Artwork",
    options: [{
      icon: React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1000 1187.198",
        width: "1000",
        height: "1187.198"
      }, React.createElement("path", {
        d: "m 979.04184,925.18785 c -17.95397,41.47737 -39.20563,79.65705 -63.82824,114.75895 -33.56298,47.8528 -61.04356,80.9761 -82.22194,99.3698 -32.83013,30.192 -68.00529,45.6544 -105.67203,46.5338 -27.04089,0 -59.6512,-7.6946 -97.61105,-23.3035 -38.08442,-15.5358 -73.08371,-23.2303 -105.08578,-23.2303 -33.56296,0 -69.55888,7.6945 -108.06101,23.2303 -38.5608,15.6089 -69.62484,23.7432 -93.37541,24.5493 -36.12049,1.5389 -72.1237,-14.3632 -108.06101,-47.7796 -22.93711,-20.0059 -51.62684,-54.3017 -85.99592,-102.8874 C 92.254176,984.54592 61.937588,924.38175 38.187028,855.7902 12.750995,781.70252 0,709.95986 0,640.50361 0,560.94181 17.191859,492.32094 51.626869,434.81688 78.689754,388.62753 114.69299,352.19192 159.75381,325.44413 c 45.06086,-26.74775 93.74914,-40.37812 146.18212,-41.25019 28.68971,0 66.3125,8.8744 113.06613,26.31542 46.62174,17.49964 76.55727,26.37404 89.68198,26.37404 9.8124,0 43.06758,-10.37669 99.4431,-31.06405 53.31237,-19.18512 98.30724,-27.12887 135.16787,-23.99975 99.8828,8.06098 174.92313,47.43518 224.82789,118.37174 -89.33023,54.12578 -133.51903,129.93556 -132.63966,227.18753 0.8061,75.75115 28.28668,138.78795 82.2952,188.8393 24.47603,23.23022 51.81008,41.18421 82.22186,53.93522 -6.59525,19.12648 -13.557,37.44688 -20.95846,55.03446 z M 749.96366,23.751237 c 0,59.37343 -21.69138,114.810233 -64.92748,166.121963 -52.17652,60.99961 -115.28658,96.24803 -183.72426,90.68597 -0.87204,-7.12298 -1.37769,-14.61967 -1.37769,-22.49743 0,-56.99843 24.81315,-117.99801 68.87738,-167.873453 21.99909,-25.25281 49.978,-46.25018 83.90738,-63.00018 C 686.57507,10.688027 718.59913,1.5631274 748.71783,5.2734376e-4 749.59727,7.9378274 749.96366,15.875627 749.96366,23.750467 Z",
        id: "path4"
      })),
      label: 'iOS',
      value: 'iOS'
    }, {
      icon: React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        width: "48px",
        height: "48px"
      }, React.createElement("path", {
        fill: "#7cb342",
        d: "M12 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM40 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM22 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40zM30 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40z"
      }), React.createElement("path", {
        fill: "#7cb342",
        d: "M14 18v15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V18H14zM24 8c-6 0-9.7 3.6-10 8h20C33.7 11.6 30 8 24 8zM20 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C21 13.1 20.6 13.6 20 13.6zM28 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C29 13.1 28.6 13.6 28 13.6z"
      }), React.createElement("path", {
        fill: "#7cb342",
        d: "M28.3 10.5c-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l1.7-2.5c.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4l-1.7 2.5C29 10.3 28.7 10.5 28.3 10.5zM19.3 10.1c-.3 0-.7-.2-.8-.5l-1.3-2.1c-.3-.5-.2-1.1.3-1.4.5-.3 1.1-.2 1.4.3l1.3 2.1c.3.5.2 1.1-.3 1.4C19.7 10 19.5 10.1 19.3 10.1z"
      })),
      label: 'Android',
      value: 'Android'
    }],
    placeholder: "Select a mobile platform"
  }));
};
OptionIcons.parameters = {
  storyshots: {
    disable: true
  }
};
export const CreateOption = () => {
  const [filterTerm, setFilterTerm] = useState('');
  const newOptions = useMemo(() => {
    return options.filter(option => option.label.toLowerCase().indexOf(filterTerm.toLowerCase()) > -1);
  }, [filterTerm]);

  const formatCreateLabel = inputValue => {
    return `Create a fruit: ${inputValue}`;
  };

  return React.createElement(FieldSelect, {
    label: "showCreate & formatCreateLabel",
    options: newOptions,
    isFilterable: true,
    onFilter: setFilterTerm,
    showCreate: true,
    formatCreateLabel: formatCreateLabel,
    width: 300
  });
};
CreateOption.parameters = {
  storyshots: {
    disable: true
  }
};
export const DelayUpdate = () => {
  const [value, setValue] = useState('1');
  const [tempValue, setTempValue] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => {
      setValue(tempValue);
    }, 0);
    return () => {
      clearTimeout(t);
    };
  }, [tempValue]);
  return React.createElement(SpaceVertical, {
    align: "start",
    width: 450
  }, React.createElement(FieldSelect, {
    label: "Controlled with Delayed Update",
    description: "Select should not lose focus when picking from the list",
    options: options,
    value: value,
    onChange: setTempValue
  }), React.createElement(Button, {
    onClick: () => setTempValue('3')
  }, "Oranges"), React.createElement(Paragraph, null, "Select should not gain focus after clicking this button"));
};
DelayUpdate.parameters = {
  storyshots: {
    disable: true
  }
};

const LabelFocusColorTestLayout = ({
  children,
  version
}) => React.createElement(SpaceVertical, null, children, React.createElement(FieldSelect, {
  label: `Label ${version}`,
  defaultValue: options[0].value,
  options: options
}), React.createElement(Button, null, "Button ", version));

export const LabelFocusColorTest = () => {
  return React.createElement(ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: false
      }
    }
  }, React.createElement(LabelFocusColorTestLayout, {
    version: "Initial"
  }, React.createElement(Dialog, {
    content: React.createElement(DialogLayout, null, React.createElement(LabelFocusColorTestLayout, {
      version: "Dialog"
    }))
  }, React.createElement(Button, null, "Open Dialog"))));
};
LabelFocusColorTest.parameters = {
  storyshots: {
    disable: true
  }
};
export default {
  argTypes,
  component: FieldSelect,
  title: 'FieldSelect'
};
//# sourceMappingURL=FieldSelect.stories.js.map