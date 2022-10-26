"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RerenderRepro = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _Button = require("../../../Button");

var _Layout = require("../../../Layout");

var _OrderedList = require("../../../OrderedList");

var _Text = require("../../../Text");

var _utils = require("../../../utils");

var _RangeSlider = require("./RangeSlider");

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _RangeSlider.RangeSlider,
  title: 'RangeSlider'
};
exports["default"] = _default;

var getRange = function getRange(value) {
  return [value && value[0] ? value[0] : 0, value && value[1] ? value[1] : 0];
};

var NumberFilter = function NumberFilter(_ref) {
  var AST = _ref.AST,
      onChange = _ref.onChange;

  var _useToggle = (0, _utils.useToggle)(),
      value = _useToggle.value,
      toggle = _useToggle.toggle;

  var rangeValue = getRange(AST.value);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_RangeSlider.RangeSlider, {
    min: 0,
    max: value ? 5 : 100,
    value: rangeValue,
    onChange: onChange
  }), _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_Button.Button, {
    onClick: toggle
  }, "Change min/max to 0 - ", value ? '100' : '5'), _react["default"].createElement(_Text.Paragraph, null, "Current Value: ", rangeValue.join(','))));
};

var getValue = function getValue(expression) {
  return expression.split(',').map(function (text) {
    return parseInt(text, 10);
  });
};

var Filter = function Filter(_ref2) {
  var expression = _ref2.expression,
      onChange = _ref2.onChange;

  var _React$useState = _react["default"].useState({
    value: getValue(expression)
  }),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      AST = _React$useState2[0],
      setAST = _React$useState2[1];

  var expressionRef = _react["default"].useRef(expression);

  _react["default"].useEffect(function () {
    if (expressionRef.current !== expression) {
      setAST({
        value: getValue(expression)
      });
      expressionRef.current = expression;
    }
  }, [expression]);

  var handleChange = function handleChange(newValue) {
    onChange(newValue.join(', '));
  };

  return _react["default"].createElement(NumberFilter, {
    AST: AST,
    onChange: handleChange
  });
};

var RerenderRepro = function RerenderRepro() {
  var _React$useState3 = _react["default"].useState('0,10'),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      expression = _React$useState4[0],
      setExpression = _React$useState4[1];

  var handleChange = function handleChange(newValue) {
    setExpression(newValue);
  };

  return _react["default"].createElement(_Layout.SpaceVertical, {
    p: "u4",
    align: "stretch"
  }, _react["default"].createElement(_OrderedList.OrderedList, {
    type: "number"
  }, _react["default"].createElement("li", null, "When updating the min/max, the value should move to stay within bounds."), _react["default"].createElement("li", null, "When changing the value, it should not immediately reset.")), _react["default"].createElement(Filter, {
    expression: expression,
    onChange: handleChange
  }));
};

exports.RerenderRepro = RerenderRepro;
RerenderRepro.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=RangeSlider.stories.js.map