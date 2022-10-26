"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("jest-styled-components");

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _map = _interopRequireDefault(require("lodash/map"));

var _RadioGroup = require("./RadioGroup");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var radioOptions = [{
  label: 'Cheddar',
  value: 'cheddar'
}, {
  label: 'Gouda',
  value: 'gouda'
}, {
  label: 'Swiss',
  value: 'swiss'
}, {
  label: 'Roquefort',
  value: 'roquefort'
}];
var radioProps = {
  defaultValue: 'swiss',
  id: '1',
  name: 'group1',
  options: radioOptions
};
test('RadioGroup render a list of radio', function () {
  var extractRadioFromDomList = function extractRadioFromDomList(list) {
    var options = list.getElementsByTagName('label');
    return (0, _map["default"])(options, function (el) {
      return el.textContent;
    });
  };

  var renderListContent = function renderListContent() {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_RadioGroup.RadioGroup, radioProps));
    return _react2.screen.getByTestId('radio-list');
  };

  var view = renderListContent();
  expect(extractRadioFromDomList(view)).toEqual(['Cheddar', 'Gouda', 'Swiss', 'Roquefort']);
});
test('RadioGroup selects a radio on click', function () {
  var handleChange = jest.fn();
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_RadioGroup.RadioGroup, (0, _extends2["default"])({}, radioProps, {
    onChange: handleChange
  })));

  var radio = _react2.screen.getByLabelText('Cheddar');

  _react2.fireEvent.click(radio);

  expect(handleChange).toHaveBeenCalledWith('cheddar');
  expect(radio).toBeChecked();
});
test('RadioGroup works with defaultValue', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_RadioGroup.RadioGroup, (0, _extends2["default"])({}, radioProps, {
    defaultValue: 'cheddar'
  })));
  expect(_react2.screen.getByLabelText('Cheddar')).toBeChecked();
});
test('RadioGroup works with value', function () {
  function ControlledTest() {
    var _useState = (0, _react.useState)('cheddar'),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];

    return _react["default"].createElement(_RadioGroup.RadioGroup, {
      options: radioOptions,
      name: "controlled",
      value: value,
      onChange: setValue
    });
  }

  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(ControlledTest, null));

  var cheddar = _react2.screen.getByLabelText('Cheddar');

  var swiss = _react2.screen.getByLabelText('Swiss');

  expect(cheddar).toBeChecked();
  expect(swiss).not.toBeChecked();

  _react2.fireEvent.click(swiss);

  expect(cheddar).not.toBeChecked();
  expect(swiss).toBeChecked();
});
test('RadioGroup disabled all Radios', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_RadioGroup.RadioGroup, (0, _extends2["default"])({}, radioProps, {
    disabled: true
  })));
  expect(_react2.screen.getByLabelText('Cheddar')).toBeDisabled();
  expect(_react2.screen.getByLabelText('Gouda')).toBeDisabled();
  expect(_react2.screen.getByLabelText('Swiss')).toBeDisabled();
  expect(_react2.screen.getByLabelText('Roquefort')).toBeDisabled();
});
test('RadioGroup disabled one specific Radio', function () {
  var options = radioOptions.map(function (option) {
    return _objectSpread({
      disabled: ['Swiss'].includes(option.label)
    }, option);
  });
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_RadioGroup.RadioGroup, (0, _extends2["default"])({}, radioProps, {
    options: options
  })));
  expect(_react2.screen.getByLabelText('Cheddar')).toBeEnabled();
  expect(_react2.screen.getByLabelText('Swiss')).toBeDisabled();
});
//# sourceMappingURL=RadioGroup.spec.js.map