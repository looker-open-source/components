"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlledInputValue = exports.ComboboxDemo = void 0;
Object.defineProperty(exports, "ListLayoutDemo", {
  enumerable: true,
  get: function get() {
    return _ListLayout.ListLayoutDemo;
  }
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _storybook = require("@looker/storybook");

var _ = require("..");

var _2 = require("../../../..");

var _ListLayout = require("./ListLayout");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CustomIndicator = function CustomIndicator(_ref) {
  var isActive = _ref.isActive,
      isSelected = _ref.isSelected;
  var indicator;

  if (isSelected) {
    indicator = '>>';
  } else if (isActive) {
    indicator = '>';
  } else {
    indicator = '';
  }

  return _react["default"].createElement(_react["default"].Fragment, null, indicator);
};

var ComboboxDemo = function ComboboxDemo() {
  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  (0, _react.useEffect)(function () {
    var t = window.setTimeout(function () {
      setLoading(false);
    }, 4000);
    return function () {
      window.clearTimeout(t);
    };
  }, []);

  var _useState3 = (0, _react.useState)({
    value: 'Bananas'
  }),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      option = _useState4[0],
      setOption = _useState4[1];

  var handleChange = function handleChange(newOption) {
    setOption(newOption);
  };

  var _useState5 = (0, _react.useState)([{
    value: 'Bananas'
  }]),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      options = _useState6[0],
      setOptions = _useState6[1];

  var handleMultiChange = function handleMultiChange(newOptions) {
    setOptions(newOptions);
  };

  return _react["default"].createElement(_2.Space, {
    p: "u5",
    align: "start"
  }, _react["default"].createElement(_2.SpaceVertical, null, _react["default"].createElement(_2.Heading, null, "Controlled"), _react["default"].createElement(_.Combobox, {
    width: 300,
    value: option,
    onChange: handleChange
  }, _react["default"].createElement(_.ComboboxInput, null), _react["default"].createElement(_.ComboboxList, null, loading ? _react["default"].createElement(_.ComboboxOption, {
    value: "Loading..."
  }) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.ComboboxOption, {
    value: "Apples"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Oranges"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Grapes"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Bananas"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Pineapples"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Apples2"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Oranges2"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Grapes2"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Bananas2"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Pineapples2"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Apples3"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Oranges3"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Grapes3"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Bananas3"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Pineapples3"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Apples4"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Oranges4"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Grapes4"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Bananas4"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Pineapples4"
  })))), _react["default"].createElement(_.ComboboxMulti, {
    width: 300,
    values: options,
    onChange: handleMultiChange
  }, _react["default"].createElement(_.ComboboxMultiInput, {
    onClear: function onClear() {
      return alert('CLEAR');
    },
    freeInput: true
  }), _react["default"].createElement(_.ComboboxMultiList, null, _react["default"].createElement(_.ComboboxMultiOption, {
    value: "Apples"
  }), _react["default"].createElement(_.ComboboxMultiOption, {
    value: "Oranges"
  }), _react["default"].createElement(_.ComboboxMultiOption, {
    value: "Grapes"
  }), _react["default"].createElement(_.ComboboxMultiOption, {
    value: "Bananas"
  }), _react["default"].createElement(_.ComboboxMultiOption, {
    value: "Pineapples"
  }))), _react["default"].createElement(_2.Heading, null, "Uncontrolled"), _react["default"].createElement(_.Combobox, {
    width: 300
  }, _react["default"].createElement(_.ComboboxInput, null), _react["default"].createElement(_.ComboboxList, null, _react["default"].createElement(_.ComboboxOption, {
    value: "Apples super long text to see what wrapping looks like"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Oranges"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Grapes"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Bananas"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Pineapples"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "",
    label: "Create New Option",
    highlightText: false
  }))), _react["default"].createElement(_.ComboboxMulti, {
    width: 300
  }, _react["default"].createElement(_.ComboboxMultiInput, {
    onClear: function onClear() {
      return alert('CLEAR');
    },
    freeInput: true
  }), _react["default"].createElement(_.ComboboxMultiList, null, _react["default"].createElement(_.ComboboxMultiOption, {
    value: "Apples"
  }), _react["default"].createElement(_.ComboboxMultiOption, {
    value: "Oranges"
  }), _react["default"].createElement(_.ComboboxMultiOption, {
    value: "Grapes"
  }), _react["default"].createElement(_.ComboboxMultiOption, {
    value: "Bananas"
  }), _react["default"].createElement(_.ComboboxMultiOption, {
    value: "Pineapples"
  })))), _react["default"].createElement(_2.SpaceVertical, null, _react["default"].createElement(_2.Heading, null, "Indicator"), _react["default"].createElement(_.Combobox, {
    width: 300
  }, _react["default"].createElement(_.ComboboxInput, {
    placeholder: "indicator={false}"
  }), _react["default"].createElement(_.ComboboxList, {
    indicator: false,
    persistSelection: true
  }, _react["default"].createElement(_.ComboboxOption, {
    value: "Apples"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Oranges"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Grapes"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Bananas"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "Pineapples"
  }), _react["default"].createElement(_.ComboboxOption, {
    value: "",
    label: "Create New Option",
    highlightText: false
  }))), _react["default"].createElement(_.ComboboxMulti, {
    width: 300
  }, _react["default"].createElement(_.ComboboxMultiInput, {
    onClear: function onClear() {
      return alert('CLEAR');
    },
    placeholder: "Custom indicator"
  }), _react["default"].createElement(_.ComboboxMultiList, {
    indicator: CustomIndicator,
    persistSelection: true
  }, _react["default"].createElement(_.ComboboxMultiOption, {
    value: "Apples"
  }), _react["default"].createElement(_.ComboboxMultiOption, {
    value: "Oranges"
  }), _react["default"].createElement(_.ComboboxMultiOption, {
    value: "Grapes"
  }), _react["default"].createElement(_.ComboboxMultiOption, {
    value: "Bananas"
  }), _react["default"].createElement(_.ComboboxMultiOption, {
    value: "Pineapples"
  })))));
};

exports.ComboboxDemo = ComboboxDemo;
ComboboxDemo.parameters = {
  storyshots: {
    disable: true
  }
};

var ControlledInputValue = function ControlledInputValue() {
  var _useState7 = (0, _react.useState)('starting value'),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      inputValue = _useState8[0],
      setInputValue = _useState8[1];

  var _useState9 = (0, _react.useState)([{
    value: 'Apples'
  }]),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      values = _useState10[0],
      setValues = _useState10[1];

  var handleClick = function handleClick() {
    return setInputValue('bananas');
  };

  return _react["default"].createElement(_2.SpaceVertical, {
    width: 300,
    align: "start"
  }, _react["default"].createElement(_2.Paragraph, null, "Current inputValue: ", inputValue), _react["default"].createElement(_2.Button, {
    onClick: handleClick
  }, "Change Input Value"), _react["default"].createElement(_.ComboboxMulti, {
    values: values,
    onChange: setValues
  }, _react["default"].createElement(_.ComboboxMultiInput, {
    autoComplete: false,
    inputValue: inputValue,
    onInputChange: setInputValue,
    freeInput: true
  }), _react["default"].createElement(_.ComboboxMultiList, {
    persistSelection: true
  }, _react["default"].createElement(_.ComboboxMultiOption, {
    value: "Apples"
  }), _react["default"].createElement(_.ComboboxMultiOption, {
    value: "Oranges"
  }), _react["default"].createElement(_.ComboboxMultiOption, {
    value: "Grapes"
  }), _react["default"].createElement(_.ComboboxMultiOption, {
    value: "Bananas"
  }), _react["default"].createElement(_.ComboboxMultiOption, {
    value: "Pineapples"
  }))));
};

exports.ControlledInputValue = ControlledInputValue;
ControlledInputValue.parameters = {
  storyshots: {
    disable: true
  }
};
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _.Combobox,
  title: 'Combobox'
};
exports["default"] = _default;
//# sourceMappingURL=Combobox.stories.js.map