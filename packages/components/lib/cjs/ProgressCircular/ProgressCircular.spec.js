"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _ProgressCircular = require("./ProgressCircular");

describe('ProgressCircular', function () {
  test('renders default behavior', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ProgressCircular.ProgressCircular, null));
    expect(_react2.screen.getByRole('progressbar')).toBeInTheDocument();
  });
  test('renders progress of 25', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ProgressCircular.ProgressCircular, {
      progress: 25
    }));
    expect(_react2.screen.queryByRole('progressbar')).toHaveAttribute('aria-valuenow', '25');
  });
  test('renders progress of 0', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ProgressCircular.ProgressCircular, {
      progress: 0
    }));
    expect(_react2.screen.queryByRole('progressbar')).toHaveAttribute('aria-valuemin', '0');
    expect(_react2.screen.queryByRole('progressbar')).not.toHaveAttribute('aria-valuenow');
  });
  test('renders progress of 50', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ProgressCircular.ProgressCircular, {
      progress: 50
    }));
    expect(_react2.screen.queryByRole('progressbar')).toHaveAttribute('aria-valuenow', '50');
  });
  test('renders progress of 75', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ProgressCircular.ProgressCircular, {
      progress: 75
    }));
    expect(_react2.screen.queryByRole('progressbar')).toHaveAttribute('aria-valuenow', '75');
  });
  test('renders progress of 100', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ProgressCircular.ProgressCircular, {
      progress: 100
    }));
    expect(_react2.screen.queryByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
  });
  test('renders different sizes', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ProgressCircular.ProgressCircular, {
      size: "xsmall"
    }));
    expect(_react2.screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
//# sourceMappingURL=ProgressCircular.spec.js.map