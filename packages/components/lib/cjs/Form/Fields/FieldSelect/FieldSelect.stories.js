"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Value = exports.UpdateOptions = exports.SelectDemo = exports.SelectContent = exports.Required = exports.OptionIcons = exports.LabelFocusColorTest = exports.Inline = exports.ErrorValueFloatingLabel = exports.ErrorValue = exports.ErrorInline = exports.Error = exports.EmptyValue = exports.DisabledValue = exports.Disabled = exports.Detail = exports.DescriptionDetailFloatingLabel = exports.Description = exports.DelayUpdate = exports.CreateOption = exports.Basic = exports.AutoResizeFloatingLabel = exports.AutoResize = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _componentsProviders = require("@looker/components-providers");

var _material = require("@styled-icons/material");

var _chunk = _interopRequireDefault(require("lodash/chunk"));

var _react = _interopRequireWildcard(require("react"));

var _storybook = require("@looker/storybook");

var _Card = require("../../../Card");

var _Button = require("../../../Button");

var _Dialog = require("../../../Dialog");

var _Divider = require("../../../Divider");

var _Icon = require("../../../Icon");

var _Layout = require("../../../Layout");

var _Popover = require("../../../Popover");

var _Text = require("../../../Text");

var _ = require("../../");

var _Label = require("../../Label");

var _utils = require("../../../utils");

var _FieldToggleSwitch = require("../FieldToggleSwitch");

var _options = require("../../Inputs/Select/stories/options");

var _options1k = require("../../Inputs/Select/stories/options1k");

var _FieldSelect = require("./FieldSelect");

var _excluded = ["externalLabel"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Template = function Template(_ref) {
  var _ref$externalLabel = _ref.externalLabel,
      externalLabel = _ref$externalLabel === void 0 ? true : _ref$externalLabel,
      args = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(_componentsProviders.ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: externalLabel
      }
    }
  }, _react["default"].createElement(_FieldSelect.FieldSelect, args));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  label: 'Label',
  options: _options.cheeseOptions,
  placeholder: 'Placeholder'
};
var Value = Template.bind({});
exports.Value = Value;
Value.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  value: 'gouda'
});
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  disabled: true
});
var DisabledValue = Template.bind({});
exports.DisabledValue = DisabledValue;
DisabledValue.args = _objectSpread(_objectSpread({}, Disabled.args), {}, {
  value: 'gouda'
});
var Detail = Template.bind({});
exports.Detail = Detail;
Detail.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  detail: '0/50'
});
var Description = Template.bind({});
exports.Description = Description;
Description.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: "I'm a little teapot"
});
var DescriptionDetailFloatingLabel = Template.bind({});
exports.DescriptionDetailFloatingLabel = DescriptionDetailFloatingLabel;
DescriptionDetailFloatingLabel.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: "I'm a little teapot",
  detail: '0/50',
  externalLabel: false
});
var Required = Template.bind({});
exports.Required = Required;
Required.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  required: true
});
var Error = Template.bind({});
exports.Error = Error;
Error.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  validationMessage: {
    message: 'Error Message',
    type: 'error'
  }
});
var ErrorValue = Template.bind({});
exports.ErrorValue = ErrorValue;
ErrorValue.args = _objectSpread(_objectSpread({}, Error.args), {}, {
  value: 'gouda'
});
var ErrorValueFloatingLabel = Template.bind({});
exports.ErrorValueFloatingLabel = ErrorValueFloatingLabel;
ErrorValueFloatingLabel.args = _objectSpread(_objectSpread({}, Error.args), {}, {
  externalLabel: false,
  value: 'gouda'
});
var Inline = Template.bind({});
exports.Inline = Inline;
Inline.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  inline: true
});
var ErrorInline = Template.bind({});
exports.ErrorInline = ErrorInline;
ErrorInline.args = _objectSpread(_objectSpread({}, Error.args), {}, {
  inline: true
});
var AutoResize = Template.bind({});
exports.AutoResize = AutoResize;
AutoResize.args = _objectSpread(_objectSpread({}, Detail.args), {}, {
  autoResize: true
});
var AutoResizeFloatingLabel = Template.bind({});
exports.AutoResizeFloatingLabel = AutoResizeFloatingLabel;
AutoResizeFloatingLabel.args = _objectSpread(_objectSpread({}, Detail.args), {}, {
  autoResize: true,
  externalLabel: false
});

var optionsWithDescriptions = _options.options.map(function (option) {
  return _objectSpread(_objectSpread({}, option), {}, {
    description: "".concat(option.label, " are the best ever!")
  });
});

var checkOption = function checkOption(option, searchTerm) {
  return option.label && option.label.toLowerCase().includes(searchTerm.toLowerCase());
};

var optionReducer = function optionReducer(searchTerm) {
  return function (acc, option) {
    var optionAsGroup = option;

    if (optionAsGroup.options) {
      var filteredGroupOptions = optionAsGroup.options.filter(function (option) {
        return checkOption(option, searchTerm);
      });

      if (filteredGroupOptions.length > 0) {
        return [].concat((0, _toConsumableArray2["default"])(acc), [_objectSpread(_objectSpread({}, optionAsGroup), {}, {
          options: filteredGroupOptions
        })]);
      }

      return acc;
    }

    if (checkOption(option, searchTerm)) {
      return [].concat((0, _toConsumableArray2["default"])(acc), [option]);
    }

    return acc;
  };
};

var TestIndicator = function TestIndicator() {
  return _react["default"].createElement(_Text.Text, {
    color: "pink"
  }, "***");
};

var SelectContent = function SelectContent() {
  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      searchTerm = _useState4[0],
      setSearchTerm = _useState4[1];

  var handleClick = function handleClick(e) {
    var fruit = e.currentTarget.getAttribute('data-fruit') || '';
    setValue(fruit);
  };

  var handleChange = function handleChange(value) {
    setValue(value);
  };

  var handleFilter = function handleFilter(term) {
    setSearchTerm(term);
  };

  var newOptions = (0, _react.useMemo)(function () {
    if (searchTerm === '') return _options1k.options1k;
    return _options1k.options1k.reduce(optionReducer(searchTerm), []);
  }, [searchTerm]);
  var unMemoizedOptions = [{
    value: 'Cheddar'
  }, {
    value: 'Gouda'
  }];
  return _react["default"].createElement(_Layout.SpaceVertical, {
    align: "start",
    maxWidth: 600
  }, _react["default"].createElement(_Text.Heading, null, "Select"), _react["default"].createElement(_FieldSelect.FieldSelect, {
    label: "1k (windowed) options",
    width: 300,
    options: _options1k.options1k,
    "aria-label": "Fruits",
    placeholder: "Select Brand",
    defaultValue: "Boulder Creek",
    autoFocus: true
  }), _react["default"].createElement(_Label.Label, null, "Use alignSelf=\"flex-start\" to avoid filling height as a flex child"), _react["default"].createElement(_Layout.Flex, null, _react["default"].createElement(_Layout.Flex, {
    height: 200,
    width: 200,
    bg: "ui3",
    alignItems: "center",
    justifyContent: "center",
    mr: "small"
  }, "200 x 200"), _react["default"].createElement(_FieldSelect.FieldSelect, {
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
  })), _react["default"].createElement(_Button.Button, {
    mt: "medium",
    mr: "small",
    "data-fruit": "5",
    onClick: handleClick
  }, "Kiwis"), _react["default"].createElement(_Button.Button, {
    mt: "medium",
    "data-fruit": "3",
    onClick: handleClick
  }, "Oranges"), _react["default"].createElement(_Divider.Divider, {
    my: "xlarge"
  }), _react["default"].createElement(_FieldSelect.FieldSelect, {
    label: "Default Value",
    options: _options.options,
    "aria-label": "Fruits",
    defaultValue: "1"
  }), _react["default"].createElement(_FieldSelect.FieldSelect, {
    label: "Groups",
    options: _options.optionsWithGroups,
    "aria-label": "Fruits",
    defaultValue: "1"
  }), _react["default"].createElement(_FieldSelect.FieldSelect, {
    label: "Descriptions",
    options: optionsWithDescriptions,
    "aria-label": "Fruits",
    defaultValue: "1"
  }), _react["default"].createElement(_FieldSelect.FieldSelect, {
    label: "Error",
    options: _options.options,
    "aria-label": "Fruits",
    placeholder: "Select One",
    defaultValue: "1",
    validationMessage: {
      message: 'An error message',
      type: 'error'
    }
  }), _react["default"].createElement(_FieldSelect.FieldSelect, {
    label: "Disabled",
    options: _options.options,
    "aria-label": "Fruits",
    placeholder: "Select One",
    disabled: true,
    defaultValue: "1"
  }), _react["default"].createElement(_FieldSelect.FieldSelect, {
    label: "Indicator",
    options: [].concat((0, _toConsumableArray2["default"])(_options.options), [{
      indicator: TestIndicator,
      label: 'I have my own indicator',
      value: 'indicator'
    }]),
    "aria-label": "Fruits",
    defaultValue: "1",
    indicator: _react["default"].createElement(_Icon.Icon, {
      icon: _react["default"].createElement(_material.Favorite, null)
    })
  }), _react["default"].createElement(_FieldSelect.FieldSelect, {
    label: "Test option re-render bug",
    options: unMemoizedOptions
  }));
};

exports.SelectContent = SelectContent;
SelectContent.parameters = {
  storyshots: {
    disable: true
  }
};

var SelectDemoInner = function SelectDemoInner() {
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

  var _usePopover = (0, _Popover.usePopover)({
    content: _react["default"].createElement(_Popover.PopoverContent, null, _react["default"].createElement(SelectContent, null))
  }),
      popover = _usePopover.popover,
      domProps = _usePopover.domProps;

  return _react["default"].createElement(_Layout.SpaceVertical, {
    align: "start"
  }, popover, _react["default"].createElement(_Dialog.Dialog, {
    isOpen: isOpen,
    onClose: handleClose
  }, _react["default"].createElement(_Dialog.DialogContent, null, _react["default"].createElement(SelectContent, null))), _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_Button.Button, domProps, "Open Popover"), _react["default"].createElement(_Button.Button, {
    onClick: handleClick
  }, "Open Dialog")), _react["default"].createElement(_Card.Card, {
    maxWidth: "500px",
    maxHeight: "300px"
  }, _react["default"].createElement(_Card.CardContent, null, _react["default"].createElement(_.Form, {
    validationMessages: {
      fruitGroups: {
        message: 'This is an error',
        type: 'error'
      }
    }
  }, _react["default"].createElement(_Text.Heading, null, "Error State"), _react["default"].createElement(_FieldSelect.FieldSelect, {
    label: "Fruit Groups",
    name: "fruitGroups",
    width: 300,
    options: _options.optionsWithGroups,
    "aria-label": "Fruits",
    defaultValue: "1"
  }), _react["default"].createElement(_FieldSelect.FieldSelect, {
    label: "Another Grouped Dropdown",
    name: "anotherGroup",
    width: 300,
    options: _options.optionsWithGroups,
    "aria-label": "Fruits",
    defaultValue: "1",
    isClearable: true,
    autoFocus: true
  })))));
};

var SelectDemo = function SelectDemo() {
  return _react["default"].createElement(SelectDemoInner, null);
};

exports.SelectDemo = SelectDemo;
SelectDemo.parameters = {
  storyshots: {
    disable: true
  }
};

var UpdateOptions = function UpdateOptions() {
  var _useState7 = (0, _react.useState)('second'),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      value = _useState8[0],
      setValue = _useState8[1];

  var _useToggle = (0, _utils.useToggle)(),
      isPlural = _useToggle.value,
      toggle = _useToggle.toggle;

  var s = isPlural ? 's' : '';
  var options = (0, _react.useMemo)(function () {
    return [{
      label: "Second".concat(s),
      value: 'second'
    }, {
      label: "Hour".concat(s),
      value: 'hour'
    }];
  }, [s]);
  return _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_Button.Button, {
    onClick: toggle
  }, "Use ", isPlural ? 'singular' : 'plural'), _react["default"].createElement(_FieldSelect.FieldSelect, {
    autoResize: true,
    options: options,
    value: value,
    onChange: setValue
  }));
};

exports.UpdateOptions = UpdateOptions;
UpdateOptions.parameters = {
  storyshots: {
    disable: true
  }
};

var EmptyValue = function EmptyValue() {
  var _useState9 = (0, _react.useState)(false),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      value = _useState10[0],
      setValue = _useState10[1];

  var handleToggle = function handleToggle(e) {
    setValue(e.currentTarget.checked);
  };

  var _useState11 = (0, _react.useState)('Option A'),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      selectValue = _useState12[0],
      setSelectValue = _useState12[1];

  var options = [{
    value: 'Option A'
  }, {
    value: 'Option B'
  }];
  return _react["default"].createElement(_Layout.Space, {
    p: "u5"
  }, _react["default"].createElement(_FieldToggleSwitch.FieldToggleSwitch, {
    label: "Use empty value",
    on: value,
    onChange: handleToggle
  }), _react["default"].createElement(_FieldSelect.FieldSelect, {
    value: value ? '' : selectValue,
    placeholder: "Can't change me when toggle is on",
    onChange: setSelectValue,
    options: options
  }), _react["default"].createElement(_FieldSelect.FieldSelect, {
    value: value ? '' : selectValue,
    onChange: setSelectValue,
    options: [{
      label: 'Option with empty string value',
      value: ''
    }].concat(options)
  }));
};

exports.EmptyValue = EmptyValue;
EmptyValue.parameters = {
  storyshots: {
    disable: true
  }
};

var OptionIcons = function OptionIcons() {
  var _useState13 = (0, _react.useState)(''),
      _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
      filterTerm = _useState14[0],
      setFilterTerm = _useState14[1];

  var newOptions = (0, _react.useMemo)(function () {
    return _options.iconOptions.filter(function (iconOption) {
      return iconOption.label.toLowerCase().indexOf(filterTerm.toLowerCase()) > -1;
    });
  }, [filterTerm]);
  return _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_FieldSelect.FieldSelect, {
    label: "With Filtering",
    options: newOptions,
    placeholder: "Search visualizations",
    isFilterable: true,
    onFilter: setFilterTerm,
    isClearable: true
  }), _react["default"].createElement(_FieldSelect.FieldSelect, {
    label: "No Filtering",
    options: _options.iconOptions,
    placeholder: "Select a visualization"
  }), _react["default"].createElement(_FieldSelect.FieldSelect, {
    label: "Descriptions",
    options: _options.iconOptions.map(function (option) {
      return _objectSpread(_objectSpread({}, option), {}, {
        description: 'This is a description'
      });
    }),
    placeholder: "Select a visualization"
  }), _react["default"].createElement(_FieldSelect.FieldSelect, {
    label: "Groups",
    options: (0, _chunk["default"])(_options.iconOptions, 5).map(function (arr, index) {
      return {
        label: "Group ".concat(index + 1),
        options: arr
      };
    }),
    placeholder: "Select a visualization"
  }), _react["default"].createElement(_FieldSelect.FieldSelect, {
    label: "Custom Artwork",
    options: [{
      icon: _react["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1000 1187.198",
        width: "1000",
        height: "1187.198"
      }, _react["default"].createElement("path", {
        d: "m 979.04184,925.18785 c -17.95397,41.47737 -39.20563,79.65705 -63.82824,114.75895 -33.56298,47.8528 -61.04356,80.9761 -82.22194,99.3698 -32.83013,30.192 -68.00529,45.6544 -105.67203,46.5338 -27.04089,0 -59.6512,-7.6946 -97.61105,-23.3035 -38.08442,-15.5358 -73.08371,-23.2303 -105.08578,-23.2303 -33.56296,0 -69.55888,7.6945 -108.06101,23.2303 -38.5608,15.6089 -69.62484,23.7432 -93.37541,24.5493 -36.12049,1.5389 -72.1237,-14.3632 -108.06101,-47.7796 -22.93711,-20.0059 -51.62684,-54.3017 -85.99592,-102.8874 C 92.254176,984.54592 61.937588,924.38175 38.187028,855.7902 12.750995,781.70252 0,709.95986 0,640.50361 0,560.94181 17.191859,492.32094 51.626869,434.81688 78.689754,388.62753 114.69299,352.19192 159.75381,325.44413 c 45.06086,-26.74775 93.74914,-40.37812 146.18212,-41.25019 28.68971,0 66.3125,8.8744 113.06613,26.31542 46.62174,17.49964 76.55727,26.37404 89.68198,26.37404 9.8124,0 43.06758,-10.37669 99.4431,-31.06405 53.31237,-19.18512 98.30724,-27.12887 135.16787,-23.99975 99.8828,8.06098 174.92313,47.43518 224.82789,118.37174 -89.33023,54.12578 -133.51903,129.93556 -132.63966,227.18753 0.8061,75.75115 28.28668,138.78795 82.2952,188.8393 24.47603,23.23022 51.81008,41.18421 82.22186,53.93522 -6.59525,19.12648 -13.557,37.44688 -20.95846,55.03446 z M 749.96366,23.751237 c 0,59.37343 -21.69138,114.810233 -64.92748,166.121963 -52.17652,60.99961 -115.28658,96.24803 -183.72426,90.68597 -0.87204,-7.12298 -1.37769,-14.61967 -1.37769,-22.49743 0,-56.99843 24.81315,-117.99801 68.87738,-167.873453 21.99909,-25.25281 49.978,-46.25018 83.90738,-63.00018 C 686.57507,10.688027 718.59913,1.5631274 748.71783,5.2734376e-4 749.59727,7.9378274 749.96366,15.875627 749.96366,23.750467 Z",
        id: "path4"
      })),
      label: 'iOS',
      value: 'iOS'
    }, {
      icon: _react["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        width: "48px",
        height: "48px"
      }, _react["default"].createElement("path", {
        fill: "#7cb342",
        d: "M12 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM40 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM22 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40zM30 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40z"
      }), _react["default"].createElement("path", {
        fill: "#7cb342",
        d: "M14 18v15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V18H14zM24 8c-6 0-9.7 3.6-10 8h20C33.7 11.6 30 8 24 8zM20 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C21 13.1 20.6 13.6 20 13.6zM28 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C29 13.1 28.6 13.6 28 13.6z"
      }), _react["default"].createElement("path", {
        fill: "#7cb342",
        d: "M28.3 10.5c-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l1.7-2.5c.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4l-1.7 2.5C29 10.3 28.7 10.5 28.3 10.5zM19.3 10.1c-.3 0-.7-.2-.8-.5l-1.3-2.1c-.3-.5-.2-1.1.3-1.4.5-.3 1.1-.2 1.4.3l1.3 2.1c.3.5.2 1.1-.3 1.4C19.7 10 19.5 10.1 19.3 10.1z"
      })),
      label: 'Android',
      value: 'Android'
    }],
    placeholder: "Select a mobile platform"
  }));
};

exports.OptionIcons = OptionIcons;
OptionIcons.parameters = {
  storyshots: {
    disable: true
  }
};

var CreateOption = function CreateOption() {
  var _useState15 = (0, _react.useState)(''),
      _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
      filterTerm = _useState16[0],
      setFilterTerm = _useState16[1];

  var newOptions = (0, _react.useMemo)(function () {
    return _options.options.filter(function (option) {
      return option.label.toLowerCase().indexOf(filterTerm.toLowerCase()) > -1;
    });
  }, [filterTerm]);

  var formatCreateLabel = function formatCreateLabel(inputValue) {
    return "Create a fruit: ".concat(inputValue);
  };

  return _react["default"].createElement(_FieldSelect.FieldSelect, {
    label: "showCreate & formatCreateLabel",
    options: newOptions,
    isFilterable: true,
    onFilter: setFilterTerm,
    showCreate: true,
    formatCreateLabel: formatCreateLabel,
    width: 300
  });
};

exports.CreateOption = CreateOption;
CreateOption.parameters = {
  storyshots: {
    disable: true
  }
};

var DelayUpdate = function DelayUpdate() {
  var _useState17 = (0, _react.useState)('1'),
      _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
      value = _useState18[0],
      setValue = _useState18[1];

  var _useState19 = (0, _react.useState)(value),
      _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
      tempValue = _useState20[0],
      setTempValue = _useState20[1];

  (0, _react.useEffect)(function () {
    var t = setTimeout(function () {
      setValue(tempValue);
    }, 0);
    return function () {
      clearTimeout(t);
    };
  }, [tempValue]);
  return _react["default"].createElement(_Layout.SpaceVertical, {
    align: "start",
    width: 450
  }, _react["default"].createElement(_FieldSelect.FieldSelect, {
    label: "Controlled with Delayed Update",
    description: "Select should not lose focus when picking from the list",
    options: _options.options,
    value: value,
    onChange: setTempValue
  }), _react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setTempValue('3');
    }
  }, "Oranges"), _react["default"].createElement(_Text.Paragraph, null, "Select should not gain focus after clicking this button"));
};

exports.DelayUpdate = DelayUpdate;
DelayUpdate.parameters = {
  storyshots: {
    disable: true
  }
};

var LabelFocusColorTestLayout = function LabelFocusColorTestLayout(_ref2) {
  var children = _ref2.children,
      version = _ref2.version;
  return _react["default"].createElement(_Layout.SpaceVertical, null, children, _react["default"].createElement(_FieldSelect.FieldSelect, {
    label: "Label ".concat(version),
    defaultValue: _options.options[0].value,
    options: _options.options
  }), _react["default"].createElement(_Button.Button, null, "Button ", version));
};

var LabelFocusColorTest = function LabelFocusColorTest() {
  return _react["default"].createElement(_componentsProviders.ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: false
      }
    }
  }, _react["default"].createElement(LabelFocusColorTestLayout, {
    version: "Initial"
  }, _react["default"].createElement(_Dialog.Dialog, {
    content: _react["default"].createElement(_Dialog.DialogLayout, null, _react["default"].createElement(LabelFocusColorTestLayout, {
      version: "Dialog"
    }))
  }, _react["default"].createElement(_Button.Button, null, "Open Dialog"))));
};

exports.LabelFocusColorTest = LabelFocusColorTest;
LabelFocusColorTest.parameters = {
  storyshots: {
    disable: true
  }
};
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _FieldSelect.FieldSelect,
  title: 'FieldSelect'
};
exports["default"] = _default;
//# sourceMappingURL=FieldSelect.stories.js.map