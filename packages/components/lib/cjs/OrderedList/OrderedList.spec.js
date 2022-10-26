"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _OrderedList = require("./OrderedList");

require("jest-styled-components");

describe('OrderedList', function () {
  test('Should display child li elements', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_OrderedList.OrderedList, null, _react["default"].createElement("li", null, "Gouda"), _react["default"].createElement("li", null, "Swiss"), _react["default"].createElement("li", null, "Pepper Jack")));

    _react2.screen.getByText('Gouda');

    _react2.screen.getByText('Swiss');

    _react2.screen.getByText('Pepper Jack');
  });
  test("Accepts 'number' type", function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_OrderedList.OrderedList, {
      type: "number"
    }, _react["default"].createElement("li", null, "Gouda"), _react["default"].createElement("li", null, "Swiss"), _react["default"].createElement("li", null, "Pepper Jack")));

    _react2.screen.getByText('Gouda');

    _react2.screen.getByText('Swiss');

    _react2.screen.getByText('Pepper Jack');

    expect(_react2.screen.getByRole('list')).toHaveAttribute('type', 'number');
  });
  test("Accepts 'letter' type", function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_OrderedList.OrderedList, {
      type: "letter"
    }, _react["default"].createElement("li", null, "Gouda"), _react["default"].createElement("li", null, "Swiss"), _react["default"].createElement("li", null, "Pepper Jack")));

    _react2.screen.getByText('Gouda');

    _react2.screen.getByText('Swiss');

    _react2.screen.getByText('Pepper Jack');

    expect(_react2.screen.getByRole('list')).toHaveAttribute('type', 'letter');
  });
});
//# sourceMappingURL=OrderedList.spec.js.map