"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _ReplaceText = require("./ReplaceText");

describe('ReplaceText', function () {
  test('globally replaces a case-insensitive string with JSX', function () {
    var _renderWithTheme = (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ReplaceText.ReplaceText, {
      match: "long",
      replace: function replace(text, index) {
        return _react["default"].createElement("span", {
          key: index
        }, text);
      }
    }, "Some LONG text that is long and this is how long it is.")),
        container = _renderWithTheme.container;

    expect(container).toMatchInlineSnapshot("\n      <div>\n        Some \n        <span>\n          LONG\n        </span>\n         text that is \n        <span>\n          long\n        </span>\n         and this is how \n        <span>\n          long\n        </span>\n         it is.\n      </div>\n    ");
  });
});
//# sourceMappingURL=ReplaceText.spec.js.map