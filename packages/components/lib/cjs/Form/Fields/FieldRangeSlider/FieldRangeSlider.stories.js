"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Steps = exports.ReadOnly = exports.Floating = exports.Disabled = exports.DashboardFilters = exports.Controlled = exports.Basic = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _storybook = require("@looker/storybook");

var _Button = require("../../../Button");

var _Layout = require("../../../Layout");

var _FieldRangeSlider = require("./FieldRangeSlider");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _FieldRangeSlider.FieldRangeSlider,
  title: 'FieldRangeSlider'
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_FieldRangeSlider.FieldRangeSlider, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {};
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = {
  disabled: true
};
var Steps = Template.bind({});
exports.Steps = Steps;
Steps.args = {
  max: 1000,
  min: 100,
  step: 50
};
Steps.parameters = {
  storyshots: {
    disable: true
  }
};
var Floating = Template.bind({});
exports.Floating = Floating;
Floating.args = {
  max: 3.7,
  min: 0.1,
  step: 0.1
};
Floating.parameters = {
  storyshots: {
    disable: true
  }
};
var ReadOnly = Template.bind({});
exports.ReadOnly = ReadOnly;
ReadOnly.args = {
  defaultValue: [3, 7],
  readOnly: true
};
ReadOnly.parameters = {
  storyshots: {
    disable: true
  }
};

var Controlled = function Controlled() {
  var _useState = (0, _react.useState)([30, 40]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      controlledValue = _useState2[0],
      setControlledValue = _useState2[1];

  var handleChange = function handleChange(value) {
    return setControlledValue(value);
  };

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_FieldRangeSlider.FieldRangeSlider, {
    label: "Controlled Example",
    description: "".concat(controlledValue[0], " \u2013 ").concat(controlledValue[1]),
    min: 20,
    max: 50,
    value: controlledValue,
    onChange: handleChange
  }), _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return handleChange([25, 45]);
    }
  }, "25 \u2014 45"), _react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return handleChange([30, 37]);
    }
  }, "30 \u2014 37"), _react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return handleChange([39, 40]);
    }
  }, "39 \u2014 40")));
};

exports.Controlled = Controlled;
Controlled.parameters = {
  storyshots: {
    disable: true
  }
};

var DashboardFilters = function DashboardFilters() {
  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      renderSiblings = _useState4[0],
      setRenderSiblings = _useState4[1];

  var _useState5 = (0, _react.useState)(['CA']),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      buttonValue = _useState6[0],
      setButtonValue = _useState6[1];

  (0, _react.useEffect)(function () {
    var timeout = setTimeout(function () {
      return setRenderSiblings(true);
    }, 1000);
    return function () {
      clearTimeout(timeout);
    };
  }, []);
  return _react["default"].createElement(FilterGrid, null, renderSiblings && _react["default"].createElement(_Button.ButtonGroup, {
    value: buttonValue,
    onChange: setButtonValue
  }, _react["default"].createElement(_Button.ButtonItem, {
    value: "CA"
  }, "California"), _react["default"].createElement(_Button.ButtonItem, {
    value: "AK"
  }, "Alaska"), _react["default"].createElement(_Button.ButtonItem, {
    value: "UT"
  }, "Utah")), _react["default"].createElement(_FieldRangeSlider.FieldRangeSlider, null));
};

exports.DashboardFilters = DashboardFilters;
DashboardFilters.parameters = {
  storyshots: {
    disable: true
  }
};

var FilterGrid = _styledComponents["default"].div.withConfig({
  displayName: "FieldRangeSliderstories__FilterGrid",
  componentId: "sc-mhxgg8-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: grid;\n  grid-gap: 30px;\n  grid-template-columns: 1fr 1fr;\n  padding: 30px;\n"])));
//# sourceMappingURL=FieldRangeSlider.stories.js.map