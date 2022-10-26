import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["externalLabel"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import React, { useMemo, useState, useEffect } from 'react';
import { Favorite } from '@styled-icons/material';
import { ChevronRight, ExpandMore } from '@styled-icons/material-rounded';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Button } from '../../../Button';
import { Dialog, DialogLayout } from '../../../Dialog';
import { Icon } from '../../../Icon';
import { Space, SpaceVertical } from '../../../Layout';
import { UnorderedList } from '../../../UnorderedList';
import { Heading, Text } from '../../../Text';
import { parseOption } from '../../Inputs/Combobox';
import { cheeseOptions } from '../../Inputs/Select/stories/options';
import { options1k } from '../../Inputs/Select/stories/options1k';
import { FieldSelectMulti } from './FieldSelectMulti';

const Template = _ref => {
  let {
    externalLabel
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel
      }
    }
  }, React.createElement(FieldSelectMulti, args));
};

const selectOptions = [{
  value: 'Apples'
}, {
  value: 'Bananas'
}, {
  value: 'Oranges'
}, {
  value: 'Pineapples'
}, {
  value: 'Kiwis'
}, {
  value: 'Apples2'
}, {
  value: 'Bananas2'
}, {
  value: 'Oranges2'
}, {
  value: 'Pineapples2'
}, {
  value: 'Kiwis2'
}, {
  value: 'Apples3'
}, {
  value: 'Bananas3'
}, {
  value: 'Oranges3'
}, {
  value: 'Pineapples3'
}, {
  value: 'Kiwis3'
}];
export const Basic = Template.bind({});
Basic.args = {
  description: 'this is the description',
  detail: '5/50',
  externalLabel: true,
  isFilterable: true,
  label: 'Label',
  options: selectOptions,
  placeholder: 'Search fruits'
};
export const FloatingLabel = Template.bind({});
FloatingLabel.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  externalLabel: false
});
export const Values = Template.bind({});
Values.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  defaultValues: ['Apples', 'Oranges']
});
export const ValuesFloatingLabel = Template.bind({});
ValuesFloatingLabel.args = _objectSpread(_objectSpread({}, Values.args), {}, {
  externalLabel: false
});
export const Disabled = Template.bind({});
Disabled.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  disabled: true
});
export const Error = Template.bind({});
Error.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  validationMessage: {
    message: 'validation Message',
    type: 'error'
  }
});
const emailValidator = /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emails = [{
  label: 'Good Looker',
  value: 'good.looker@google.com'
}, {
  label: 'Components Team',
  value: 'lookercomponents@google.com'
}, {
  label: 'Example Email',
  value: 'example.email@google.com'
}];
export const CopyPaste = () => {
  const [errorMsg, setErrorMsg] = useState('');

  const validate = value => {
    return value.indexOf('2') === -1;
  };

  const handleValidationFail = values => {
    setErrorMsg(`No thank you to values with "2": ${values.join(', ')}`);
  };

  const validateEmail = val => {
    const {
      value
    } = parseOption(val);
    return emailValidator.test(value);
  };

  return React.createElement(SpaceVertical, null, React.createElement(Heading, null, "Copy/Paste"), React.createElement(Heading, {
    as: "h4"
  }, "When label = value (or no label)"), React.createElement(Space, null, React.createElement(FieldSelectMulti, {
    label: "Copy from here...",
    description: "But not the reverse...",
    options: selectOptions,
    defaultValues: ['Apples', 'Oranges', 'Apples2'],
    placeholder: "Search fruits",
    isFilterable: true
  }), React.createElement(FieldSelectMulti, {
    label: "...over to here",
    description: "...because that one is not freeInput",
    options: selectOptions,
    placeholder: "Search fruits",
    isFilterable: true,
    freeInput: true,
    validate: validate,
    onValidationFail: handleValidationFail,
    validationMessage: errorMsg !== '' ? {
      message: errorMsg,
      type: 'error'
    } : undefined
  })), React.createElement(Heading, {
    as: "h4"
  }, "When label != value"), React.createElement(Space, null, React.createElement(FieldSelectMulti, {
    label: "To:",
    options: emails,
    validate: validateEmail,
    defaultValues: ['good.looker@google.com', 'lookercomponents@google.com'],
    placeholder: "Enter recipients",
    isFilterable: true,
    freeInput: true
  }), React.createElement(FieldSelectMulti, {
    label: "CC:",
    options: emails,
    validate: validateEmail,
    placeholder: "Enter recipients",
    isFilterable: true,
    freeInput: true
  })));
};
CopyPaste.parameters = {
  storyshots: {
    disable: true
  }
};
const selectGroups = [{
  label: 'Fruits',
  options: [{
    label: 'Apples',
    value: '1'
  }, {
    label: 'Bananas',
    value: '2'
  }, {
    label: 'Oranges',
    value: '3'
  }, {
    label: 'Pineapples',
    value: '4'
  }, {
    label: 'Kiwis',
    value: '5'
  }]
}, {
  label: 'Fruits 2',
  options: [{
    label: 'Apples2',
    value: '12'
  }, {
    label: 'Bananas2',
    value: '22'
  }, {
    label: 'Oranges2',
    value: '32'
  }, {
    label: 'Pineapples2',
    value: '42'
  }, {
    label: 'Kiwis2',
    value: '52'
  }]
}, {
  label: 'Fruits 3',
  options: [{
    label: 'Apples3',
    value: '13'
  }, {
    label: 'Bananas3',
    value: '23'
  }, {
    label: 'Oranges3',
    value: '33'
  }, {
    label: 'Pineapples3',
    value: '43'
  }, {
    label: 'Kiwis3',
    value: '53'
  }]
}, {
  label: 'Fruits 4',
  options: [{
    label: 'Apples4',
    value: '14'
  }, {
    label: 'Bananas4',
    value: '24'
  }, {
    label: 'Oranges4',
    value: '34'
  }, {
    label: 'Pineapples4',
    value: '44'
  }, {
    label: 'Kiwis4',
    value: '54'
  }]
}, {
  label: 'Fruits 5',
  options: [{
    label: 'Apples5',
    value: '15'
  }, {
    label: 'Bananas5',
    value: '25'
  }, {
    label: 'Oranges5',
    value: '35'
  }, {
    label: 'Pineapples5',
    value: '45'
  }, {
    label: 'Kiwis5',
    value: '55'
  }]
}];

const TestIndicator = () => {
  return React.createElement(Text, {
    color: "pink"
  }, "***");
};

export const SelectMultiDemo = () => {
  const [delayedCheeseOptions, setCheeseOptions] = useState([]);
  useEffect(() => {
    const t = window.setTimeout(() => {
      setCheeseOptions(cheeseOptions);
    }, 2000);
    return () => {
      window.clearTimeout(t);
    };
  }, []);
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const [searchTerm, setSearchTerm] = useState('');

  const handleFilter = term => {
    setSearchTerm(term);
  };

  const newOptions = useMemo(() => {
    if (searchTerm === '') return selectOptions.map(option => _objectSpread(_objectSpread({}, option), {}, {
      description: 'Lorem ipsum'
    }));
    return selectOptions.reduce((acc, option) => {
      if (option.value.toLowerCase().includes(searchTerm.toLowerCase())) {
        acc.push(_objectSpread(_objectSpread({}, option), {}, {
          description: 'Lorem ipsum'
        }));
      }

      return acc;
    }, []);
  }, [searchTerm]);
  const [searchTerm1k, setSearchTerm1k] = useState('');

  const handleFilter1k = term => {
    setSearchTerm1k(term);
  };

  const newOptions1k = useMemo(() => {
    if (searchTerm1k === '') return options1k;
    return options1k.reduce((acc, option) => {
      if (option.label.toLowerCase().includes(searchTerm1k.toLowerCase())) {
        acc.push(option);
      }

      return acc;
    }, []);
  }, [searchTerm1k]);

  const formatCreate = inputValue => {
    return React.createElement("span", null, "Add fruit: ", React.createElement("em", null, inputValue));
  };

  const whichIcon = (isActive, isSelected) => {
    if (isActive) {
      return React.createElement(ChevronRight, null);
    } else if (isSelected) {
      return React.createElement(Favorite, null);
    } else {
      return React.createElement(ExpandMore, null);
    }
  };

  return React.createElement(SpaceVertical, {
    p: "u5",
    width: 400
  }, React.createElement(Dialog, {
    isOpen: isOpen,
    onClose: handleClose
  }, React.createElement(DialogLayout, {
    header: "SelectMulti in a Dialog"
  }, React.createElement(FieldSelectMulti, {
    options: newOptions1k,
    placeholder: "Select Brands",
    isFilterable: true,
    onFilter: handleFilter1k,
    alignSelf: "flex-start",
    showCreate: true,
    defaultValues: ['Boulder Creek'],
    freeInput: true,
    autoFocus: true
  }))), React.createElement(Button, {
    onClick: handleClick
  }, "Open"), React.createElement(Heading, null, "FieldSelectMulti"), React.createElement(SpaceVertical, null, React.createElement(FieldSelectMulti, {
    label: "Label",
    options: selectOptions,
    placeholder: "Select fruits",
    detail: "5/50"
  }), React.createElement(FieldSelectMulti, {
    label: "Label",
    placeholder: "placeholder",
    description: "this is the description",
    values: ['cheddar'],
    options: delayedCheeseOptions,
    autoFocus: true
  })), React.createElement(Heading, null, "SelectMulti"), React.createElement(Heading, {
    as: "h4"
  }, "1k (windowed) options"), React.createElement(FieldSelectMulti, {
    options: newOptions1k,
    placeholder: "Select Brands",
    isFilterable: true,
    onFilter: handleFilter1k,
    alignSelf: "flex-start",
    showCreate: true,
    defaultValues: ['Boulder Creek']
  }), React.createElement(Heading, {
    as: "h4"
  }, "Option Groups"), React.createElement(FieldSelectMulti, {
    options: selectGroups,
    placeholder: "Select fruits",
    mb: "xlarge"
  }), React.createElement(Heading, {
    as: "h4"
  }, "Close on Select"), React.createElement(FieldSelectMulti, {
    options: selectOptions,
    placeholder: "Select fruits",
    closeOnSelect: true
  }), React.createElement(Heading, {
    as: "h4"
  }, "Kitchen Sink"), React.createElement(UnorderedList, null, React.createElement("li", null, "Option descriptions"), React.createElement("li", null, "isFilterable"), React.createElement("li", null, "showCreate"), React.createElement("li", null, "formatCreateLabel"), React.createElement("li", null, "removeOnBackspace")), React.createElement(FieldSelectMulti, {
    options: newOptions,
    placeholder: "Search fruits",
    isFilterable: true,
    onFilter: handleFilter,
    alignSelf: "flex-start",
    showCreate: true,
    formatCreateLabel: formatCreate,
    removeOnBackspace: false
  }), React.createElement(FieldSelectMulti, {
    options: newOptions,
    placeholder: "with freeInput",
    isFilterable: true,
    onFilter: handleFilter,
    alignSelf: "flex-start",
    freeInput: true,
    removeOnBackspace: false
  }), React.createElement(Heading, {
    as: "h4"
  }, "Validation Errors"), React.createElement(FieldSelectMulti, {
    name: "fruitError",
    options: selectOptions,
    placeholder: "Select fruits",
    closeOnSelect: true,
    validationType: "error"
  }), React.createElement(Heading, {
    as: "h4"
  }, "Custom Indicator"), React.createElement(FieldSelectMulti, {
    name: "fruitIndicator",
    options: [...selectOptions, {
      indicator: TestIndicator,
      label: 'I have my own indicator',
      value: 'indicator'
    }],
    placeholder: "Select fruits",
    closeOnSelect: true,
    mb: "xlarge",
    indicator: ({
      isActive,
      isSelected
    }) => React.createElement(Icon, {
      icon: whichIcon(isActive, isSelected)
    })
  }));
};
SelectMultiDemo.parameters = {
  storyshots: {
    disable: true
  }
};
export default {
  argTypes,
  component: FieldSelectMulti,
  title: 'FieldSelectMulti'
};
//# sourceMappingURL=FieldSelectMulti.stories.js.map