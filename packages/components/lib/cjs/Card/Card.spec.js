"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _Card = require("./Card");

describe('Card', function () {
  test('default', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Card.Card, null, "\uD83E\uDD51"));
    expect(_react2.screen.getByText('🥑')).toBeInTheDocument();
  });
  test('raised', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Card.Card, {
      raised: true
    }, "\uD83E\uDD51"));
    expect(_react2.screen.getByText('🥑')).toHaveStyle('box-shadow: 0px 1px 2px 0px rgba(60,64,67,.30),0px 1px 3px 1px rgba(60,64,67,.15);');
  });
});
//# sourceMappingURL=Card.spec.js.map