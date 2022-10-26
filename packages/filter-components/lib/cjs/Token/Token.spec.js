"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _noop = _interopRequireDefault(require("lodash/noop"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _Token = require("./Token");

describe('Token', function () {
  it('should render a Token with subdued', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Token.Token, {
      label: 'test',
      subdued: true,
      onClick: _noop["default"],
      ref: _noop["default"]
    }));

    var token = _react2.screen.getByRole('button');

    expect(token).toHaveAttribute('aria-selected', 'false');
  });
  it('should render a Token without subdued', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Token.Token, {
      label: 'test',
      subdued: false,
      onClick: _noop["default"],
      ref: _noop["default"]
    }));

    var token = _react2.screen.getByRole('button');

    expect(token).toHaveAttribute('aria-selected', 'true');
  });
});
//# sourceMappingURL=Token.spec.js.map