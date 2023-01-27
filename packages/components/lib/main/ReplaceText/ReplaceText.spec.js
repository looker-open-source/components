"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _componentsTestUtils = require("@looker/components-test-utils");
var _Basic = _interopRequireDefault(require("./stories/Basic"));
var _CustomReplace = _interopRequireDefault(require("./stories/CustomReplace"));

describe('ReplaceText', function () {
  test('globally replaces a case-insensitive string with higlighted text', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Basic["default"], null));
    _react2.screen.getAllByText(/che/i).forEach(function (element) {
      expect(element).toHaveStyle('font-weight: 600; text-decoration: underline');
    });
  });
  test('accepts custom replace component', function () {
    var _renderWithTheme = (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_CustomReplace["default"], null)),
      container = _renderWithTheme.container;
    expect(container).toMatchInlineSnapshot("\n      <div>\n        <em>\n          Che\n        </em>\n        ddar \n        <em>\n          che\n        </em>\n        ese\n      </div>\n    ");
  });
});
//# sourceMappingURL=ReplaceText.spec.js.map