"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Breakpoint = require("./Breakpoint");

describe('Breakpoint', function () {
  var widthSpy;
  var heightSpy;
  beforeEach(function () {
    widthSpy = jest.spyOn(document.body, 'clientWidth', 'get').mockImplementation(function () {
      return 800;
    });
    heightSpy = jest.spyOn(document.body, 'clientHeight', 'get').mockImplementation(function () {
      return 600;
    });
  });
  afterEach(function () {
    widthSpy.mockRestore();
    heightSpy.mockRestore();
  });
  test('all', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Breakpoint.Breakpoint, {
      show: ['mobile', 'xl']
    }, _react["default"].createElement("p", null, "This is a thing")));

    var element = _react2.screen.queryByText('This is a thing');

    expect(element).toBeInTheDocument();
  });
  test('mobile', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Breakpoint.Breakpoint, {
      show: "mobile"
    }, _react["default"].createElement("p", null, "This is a thing")));

    var element = _react2.screen.queryByText('This is a thing');

    expect(element).not.toBeInTheDocument();
  });
  test('tablet up', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Breakpoint.Breakpoint, {
      show: ['tablet', undefined]
    }, _react["default"].createElement("p", null, "This is a thing")));

    var element = _react2.screen.queryByText('This is a thing');

    expect(element).toBeInTheDocument();
  });
  test('up to tablet', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Breakpoint.Breakpoint, {
      show: [undefined, 'tablet']
    }, _react["default"].createElement("p", null, "This is a thing")));

    var element = _react2.screen.queryByText('This is a thing');

    expect(element).not.toBeInTheDocument();
  });
});
//# sourceMappingURL=Breakpoint.spec.js.map