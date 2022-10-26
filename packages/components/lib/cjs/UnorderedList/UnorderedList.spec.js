"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _UnorderedList = require("./UnorderedList");

require("jest-styled-components");

describe('UnorderedList', function () {
  test('Should display child li elements', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_UnorderedList.UnorderedList, null, _react["default"].createElement("li", null, "Gouda"), _react["default"].createElement("li", null, "Swiss"), _react["default"].createElement("li", null, "Pepper Jack")));

    _react2.screen.getByText('Gouda');

    _react2.screen.getByText('Swiss');

    _react2.screen.getByText('Pepper Jack');
  });
  test("Accepts 'bullet' type", function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_UnorderedList.UnorderedList, {
      type: "bullet"
    }, _react["default"].createElement("li", null, "Gouda"), _react["default"].createElement("li", null, "Swiss"), _react["default"].createElement("li", null, "Pepper Jack")));

    _react2.screen.getByText('Gouda');

    _react2.screen.getByText('Swiss');

    _react2.screen.getByText('Pepper Jack');

    expect(_react2.screen.getByRole('list')).toHaveAttribute('type', 'bullet');
  });
});
//# sourceMappingURL=UnorderedList.spec.js.map