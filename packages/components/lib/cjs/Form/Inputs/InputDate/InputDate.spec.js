"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _it = _interopRequireDefault(require("date-fns/locale/it"));

var _InputDate = require("./InputDate");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

afterEach(function () {
  jest.clearAllMocks();
});

var ControlledInputDate = function ControlledInputDate() {
  var _useState = (0, _react.useState)(new Date('June 3, 2019')),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", {
    onClick: function onClick() {
      return setValue(new Date('June 15, 2019'));
    }
  }, "June 15, 2019"), _react["default"].createElement("button", {
    onClick: function onClick() {
      return setValue(new Date('January 1, 2012'));
    }
  }, "January 1, 2012"), _react["default"].createElement(_InputDate.InputDate, {
    value: value,
    onChange: function onChange(date) {
      return setValue(date);
    }
  }));
};

var mockProps = {
  defaultValue: new Date('June 3, 2019 11:00:00 PM'),
  onChange: jest.fn(),
  onValidationFail: jest.fn()
};
test('calls onChange prop when a day is clicked', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputDate.InputDate, mockProps));

  _react2.fireEvent.click(_react2.screen.getByText('Open calendar'));

  _react2.fireEvent.click(_react2.screen.getByTitle('Sat Jun 15, 2019'));

  expect(mockProps.onChange).toHaveBeenCalledWith(new Date('June 15, 2019 11:00:00 PM'));
});
test('fills TextInput with value', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputDate.InputDate, mockProps));
  expect(_react2.screen.getByDisplayValue('06/03/2019')).toBeInTheDocument();
});
test('updates text input value when day is clicked', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputDate.InputDate, mockProps));
  expect(mockProps.onChange).not.toHaveBeenCalled();
  expect(_react2.screen.getByDisplayValue('06/03/2019')).toBeInTheDocument();

  _react2.fireEvent.click(_react2.screen.getByText('Open calendar'));

  _react2.fireEvent.click(_react2.screen.getByTitle('Sat Jun 15, 2019'));

  expect(_react2.screen.getByDisplayValue('06/15/2019')).toBeInTheDocument();
});
test('value can be controlled externally', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(ControlledInputDate, null));
  expect(_react2.screen.getByDisplayValue('06/03/2019')).toBeInTheDocument();

  _react2.fireEvent.click(_react2.screen.getByText('June 15, 2019'));

  expect(_react2.screen.getByDisplayValue('06/15/2019')).toBeInTheDocument();

  _react2.fireEvent.click(_react2.screen.getByText('January 1, 2012'));

  expect(_react2.screen.getByDisplayValue('01/01/2012')).toBeInTheDocument();
});
test('user can change the selected date via text input field', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(ControlledInputDate, null));

  var input = _react2.screen.getByDisplayValue('06/03/2019');

  _react2.fireEvent.change(input, {
    target: {
      value: '01/01/2012'
    }
  });

  _react2.fireEvent.blur(input);

  expect(_react2.screen.getByDisplayValue('01/01/2012')).toBeInTheDocument();
});
test('user can clear the selected date by deleting text input content', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputDate.InputDate, mockProps));

  var input = _react2.screen.getByDisplayValue('06/03/2019');

  _react2.fireEvent.change(input, {
    target: {
      value: ''
    }
  });

  _react2.fireEvent.blur(input);

  expect(mockProps.onChange).toHaveBeenCalledWith(undefined);
});
test('validates text input to match localized date format', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputDate.InputDate, mockProps));

  var input = _react2.screen.getByDisplayValue('06/03/2019');

  _react2.fireEvent.change(input, {
    target: {
      value: '6/3/2019'
    }
  });

  _react2.fireEvent.blur(input);

  expect(mockProps.onValidationFail).not.toHaveBeenCalled();

  _react2.fireEvent.change(input, {
    target: {
      value: 'not-a-valid-date'
    }
  });

  _react2.fireEvent.blur(input);

  expect(mockProps.onValidationFail).toHaveBeenCalledTimes(1);
});
test('localizes calendar', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputDate.InputDate, (0, _extends2["default"])({
    locale: _it["default"],
    dateStringFormat: "MMMM-dd"
  }, mockProps)));
  expect(_react2.screen.getByDisplayValue('giugno-03')).toBeInTheDocument();
});
test('Initial dateStringValue', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputDate.InputDate, (0, _extends2["default"])({
    dateStringFormat: "yyyy-MM-dd"
  }, mockProps)));
  expect(_react2.screen.getByDisplayValue('2019-06-03')).toBeInTheDocument();
});
test('Changing value with dateStringFormat', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputDate.InputDate, (0, _extends2["default"])({
    dateStringFormat: "yyyy-MM-dd"
  }, mockProps)));

  _react2.fireEvent.click(_react2.screen.getByText('Open calendar'));

  _react2.fireEvent.click(_react2.screen.getByTitle('Sat Jun 15, 2019'));

  expect(_react2.screen.getByDisplayValue('2019-06-15')).toBeInTheDocument();
});
//# sourceMappingURL=InputDate.spec.js.map