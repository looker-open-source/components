"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ValuesFloatingLabel = exports.Values = exports.SelectMultiDemo = exports.FloatingLabel = exports.Error = exports.Disabled = exports.CopyPaste = exports.Basic = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _componentsProviders = require("@looker/components-providers");

var _react = _interopRequireWildcard(require("react"));

var _material = require("@styled-icons/material");

var _materialRounded = require("@styled-icons/material-rounded");

var _storybook = require("@looker/storybook");

var _Button = require("../../../Button");

var _Dialog = require("../../../Dialog");

var _Icon = require("../../../Icon");

var _Layout = require("../../../Layout");

var _UnorderedList = require("../../../UnorderedList");

var _Text = require("../../../Text");

var _Combobox = require("../../Inputs/Combobox");

var _options = require("../../Inputs/Select/stories/options");

var _options1k = require("../../Inputs/Select/stories/options1k");

var _FieldSelectMulti = require("./FieldSelectMulti");

var _excluded = ["externalLabel"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Template = function Template(_ref) {
  var externalLabel = _ref.externalLabel,
      args = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(_componentsProviders.ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: externalLabel
      }
    }
  }, _react["default"].createElement(_FieldSelectMulti.FieldSelectMulti, args));
};

var selectOptions = [{
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
var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  description: 'this is the description',
  detail: '5/50',
  externalLabel: true,
  isFilterable: true,
  label: 'Label',
  options: selectOptions,
  placeholder: 'Search fruits'
};
var FloatingLabel = Template.bind({});
exports.FloatingLabel = FloatingLabel;
FloatingLabel.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  externalLabel: false
});
var Values = Template.bind({});
exports.Values = Values;
Values.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  defaultValues: ['Apples', 'Oranges']
});
var ValuesFloatingLabel = Template.bind({});
exports.ValuesFloatingLabel = ValuesFloatingLabel;
ValuesFloatingLabel.args = _objectSpread(_objectSpread({}, Values.args), {}, {
  externalLabel: false
});
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  disabled: true
});
var Error = Template.bind({});
exports.Error = Error;
Error.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  validationMessage: {
    message: 'validation Message',
    type: 'error'
  }
});
var emailValidator = /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var emails = [{
  label: 'Good Looker',
  value: 'good.looker@google.com'
}, {
  label: 'Components Team',
  value: 'lookercomponents@google.com'
}, {
  label: 'Example Email',
  value: 'example.email@google.com'
}];

var CopyPaste = function CopyPaste() {
  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      errorMsg = _useState2[0],
      setErrorMsg = _useState2[1];

  var validate = function validate(value) {
    return value.indexOf('2') === -1;
  };

  var handleValidationFail = function handleValidationFail(values) {
    setErrorMsg("No thank you to values with \"2\": ".concat(values.join(', ')));
  };

  var validateEmail = function validateEmail(val) {
    var _parseOption = (0, _Combobox.parseOption)(val),
        value = _parseOption.value;

    return emailValidator.test(value);
  };

  return _react["default"].createElement(_Layout.SpaceVertical, null, _react["default"].createElement(_Text.Heading, null, "Copy/Paste"), _react["default"].createElement(_Text.Heading, {
    as: "h4"
  }, "When label = value (or no label)"), _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_FieldSelectMulti.FieldSelectMulti, {
    label: "Copy from here...",
    description: "But not the reverse...",
    options: selectOptions,
    defaultValues: ['Apples', 'Oranges', 'Apples2'],
    placeholder: "Search fruits",
    isFilterable: true
  }), _react["default"].createElement(_FieldSelectMulti.FieldSelectMulti, {
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
  })), _react["default"].createElement(_Text.Heading, {
    as: "h4"
  }, "When label != value"), _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_FieldSelectMulti.FieldSelectMulti, {
    label: "To:",
    options: emails,
    validate: validateEmail,
    defaultValues: ['good.looker@google.com', 'lookercomponents@google.com'],
    placeholder: "Enter recipients",
    isFilterable: true,
    freeInput: true
  }), _react["default"].createElement(_FieldSelectMulti.FieldSelectMulti, {
    label: "CC:",
    options: emails,
    validate: validateEmail,
    placeholder: "Enter recipients",
    isFilterable: true,
    freeInput: true
  })));
};

exports.CopyPaste = CopyPaste;
CopyPaste.parameters = {
  storyshots: {
    disable: true
  }
};
var selectGroups = [{
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

var TestIndicator = function TestIndicator() {
  return _react["default"].createElement(_Text.Text, {
    color: "pink"
  }, "***");
};

var SelectMultiDemo = function SelectMultiDemo() {
  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      delayedCheeseOptions = _useState4[0],
      setCheeseOptions = _useState4[1];

  (0, _react.useEffect)(function () {
    var t = window.setTimeout(function () {
      setCheeseOptions(_options.cheeseOptions);
    }, 2000);
    return function () {
      window.clearTimeout(t);
    };
  }, []);

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      isOpen = _useState6[0],
      setOpen = _useState6[1];

  var handleClick = function handleClick() {
    return setOpen(true);
  };

  var handleClose = function handleClose() {
    return setOpen(false);
  };

  var _useState7 = (0, _react.useState)(''),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      searchTerm = _useState8[0],
      setSearchTerm = _useState8[1];

  var handleFilter = function handleFilter(term) {
    setSearchTerm(term);
  };

  var newOptions = (0, _react.useMemo)(function () {
    if (searchTerm === '') return selectOptions.map(function (option) {
      return _objectSpread(_objectSpread({}, option), {}, {
        description: 'Lorem ipsum'
      });
    });
    return selectOptions.reduce(function (acc, option) {
      if (option.value.toLowerCase().includes(searchTerm.toLowerCase())) {
        acc.push(_objectSpread(_objectSpread({}, option), {}, {
          description: 'Lorem ipsum'
        }));
      }

      return acc;
    }, []);
  }, [searchTerm]);

  var _useState9 = (0, _react.useState)(''),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      searchTerm1k = _useState10[0],
      setSearchTerm1k = _useState10[1];

  var handleFilter1k = function handleFilter1k(term) {
    setSearchTerm1k(term);
  };

  var newOptions1k = (0, _react.useMemo)(function () {
    if (searchTerm1k === '') return _options1k.options1k;
    return _options1k.options1k.reduce(function (acc, option) {
      if (option.label.toLowerCase().includes(searchTerm1k.toLowerCase())) {
        acc.push(option);
      }

      return acc;
    }, []);
  }, [searchTerm1k]);

  var formatCreate = function formatCreate(inputValue) {
    return _react["default"].createElement("span", null, "Add fruit: ", _react["default"].createElement("em", null, inputValue));
  };

  var whichIcon = function whichIcon(isActive, isSelected) {
    if (isActive) {
      return _react["default"].createElement(_materialRounded.ChevronRight, null);
    } else if (isSelected) {
      return _react["default"].createElement(_material.Favorite, null);
    } else {
      return _react["default"].createElement(_materialRounded.ExpandMore, null);
    }
  };

  return _react["default"].createElement(_Layout.SpaceVertical, {
    p: "u5",
    width: 400
  }, _react["default"].createElement(_Dialog.Dialog, {
    isOpen: isOpen,
    onClose: handleClose
  }, _react["default"].createElement(_Dialog.DialogLayout, {
    header: "SelectMulti in a Dialog"
  }, _react["default"].createElement(_FieldSelectMulti.FieldSelectMulti, {
    options: newOptions1k,
    placeholder: "Select Brands",
    isFilterable: true,
    onFilter: handleFilter1k,
    alignSelf: "flex-start",
    showCreate: true,
    defaultValues: ['Boulder Creek'],
    freeInput: true,
    autoFocus: true
  }))), _react["default"].createElement(_Button.Button, {
    onClick: handleClick
  }, "Open"), _react["default"].createElement(_Text.Heading, null, "FieldSelectMulti"), _react["default"].createElement(_Layout.SpaceVertical, null, _react["default"].createElement(_FieldSelectMulti.FieldSelectMulti, {
    label: "Label",
    options: selectOptions,
    placeholder: "Select fruits",
    detail: "5/50"
  }), _react["default"].createElement(_FieldSelectMulti.FieldSelectMulti, {
    label: "Label",
    placeholder: "placeholder",
    description: "this is the description",
    values: ['cheddar'],
    options: delayedCheeseOptions,
    autoFocus: true
  })), _react["default"].createElement(_Text.Heading, null, "SelectMulti"), _react["default"].createElement(_Text.Heading, {
    as: "h4"
  }, "1k (windowed) options"), _react["default"].createElement(_FieldSelectMulti.FieldSelectMulti, {
    options: newOptions1k,
    placeholder: "Select Brands",
    isFilterable: true,
    onFilter: handleFilter1k,
    alignSelf: "flex-start",
    showCreate: true,
    defaultValues: ['Boulder Creek']
  }), _react["default"].createElement(_Text.Heading, {
    as: "h4"
  }, "Option Groups"), _react["default"].createElement(_FieldSelectMulti.FieldSelectMulti, {
    options: selectGroups,
    placeholder: "Select fruits",
    mb: "xlarge"
  }), _react["default"].createElement(_Text.Heading, {
    as: "h4"
  }, "Close on Select"), _react["default"].createElement(_FieldSelectMulti.FieldSelectMulti, {
    options: selectOptions,
    placeholder: "Select fruits",
    closeOnSelect: true
  }), _react["default"].createElement(_Text.Heading, {
    as: "h4"
  }, "Kitchen Sink"), _react["default"].createElement(_UnorderedList.UnorderedList, null, _react["default"].createElement("li", null, "Option descriptions"), _react["default"].createElement("li", null, "isFilterable"), _react["default"].createElement("li", null, "showCreate"), _react["default"].createElement("li", null, "formatCreateLabel"), _react["default"].createElement("li", null, "removeOnBackspace")), _react["default"].createElement(_FieldSelectMulti.FieldSelectMulti, {
    options: newOptions,
    placeholder: "Search fruits",
    isFilterable: true,
    onFilter: handleFilter,
    alignSelf: "flex-start",
    showCreate: true,
    formatCreateLabel: formatCreate,
    removeOnBackspace: false
  }), _react["default"].createElement(_FieldSelectMulti.FieldSelectMulti, {
    options: newOptions,
    placeholder: "with freeInput",
    isFilterable: true,
    onFilter: handleFilter,
    alignSelf: "flex-start",
    freeInput: true,
    removeOnBackspace: false
  }), _react["default"].createElement(_Text.Heading, {
    as: "h4"
  }, "Validation Errors"), _react["default"].createElement(_FieldSelectMulti.FieldSelectMulti, {
    name: "fruitError",
    options: selectOptions,
    placeholder: "Select fruits",
    closeOnSelect: true,
    validationType: "error"
  }), _react["default"].createElement(_Text.Heading, {
    as: "h4"
  }, "Custom Indicator"), _react["default"].createElement(_FieldSelectMulti.FieldSelectMulti, {
    name: "fruitIndicator",
    options: [].concat(selectOptions, [{
      indicator: TestIndicator,
      label: 'I have my own indicator',
      value: 'indicator'
    }]),
    placeholder: "Select fruits",
    closeOnSelect: true,
    mb: "xlarge",
    indicator: function indicator(_ref2) {
      var isActive = _ref2.isActive,
          isSelected = _ref2.isSelected;
      return _react["default"].createElement(_Icon.Icon, {
        icon: whichIcon(isActive, isSelected)
      });
    }
  }));
};

exports.SelectMultiDemo = SelectMultiDemo;
SelectMultiDemo.parameters = {
  storyshots: {
    disable: true
  }
};
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _FieldSelectMulti.FieldSelectMulti,
  title: 'FieldSelectMulti'
};
exports["default"] = _default;
//# sourceMappingURL=FieldSelectMulti.stories.js.map