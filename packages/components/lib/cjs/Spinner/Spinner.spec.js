"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Spinner = require("./Spinner");

describe('Spinner', function () {
  test('A default spinner', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Spinner.Spinner, null));
    expect(_react2.screen.getByTestId('loading-spinner'));
  });
  test('can have n number of markers', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Spinner.Spinner, {
      markers: 20
    }));

    var spinner = _react2.screen.getByTestId('loading-spinner');

    var markers = spinner.querySelectorAll('div div');
    expect(markers.length).toEqual(20);
  });
  test('markers radius can be adjusted', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Spinner.Spinner, {
      markerRadius: 30
    }));

    var spinner = _react2.screen.getByTestId('loading-spinner');

    var marker = spinner.querySelector('div div');
    expect(marker).toHaveStyle('border-radius: 30px');
  });
  test('speed can be set', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Spinner.Spinner, {
      speed: 2000
    }));

    var spinner = _react2.screen.getByTestId('loading-spinner');

    var marker = spinner.querySelector('div div');
    expect(marker).toHaveAttribute('speed', '2000');
  });
  test('can change marker color', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Spinner.Spinner, {
      color: "red"
    }));

    var spinner = _react2.screen.getByTestId('loading-spinner');

    var marker = spinner.querySelector('div div');
    expect(marker).toHaveStyle('background-color: red');
  });
  test('can be resized', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Spinner.Spinner, {
      size: 200
    }));
    expect(_react2.screen.getByTestId('loading-spinner')).toHaveStyle('width: 200px');
  });
});
//# sourceMappingURL=Spinner.spec.js.map