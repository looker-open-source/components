"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
require("jest-styled-components");
var _react = _interopRequireDefault(require("react"));
var _componentsTestUtils = require("@looker/components-test-utils");
var _react2 = require("@testing-library/react");
var _Basic = _interopRequireDefault(require("./stories/Basic"));
var _PopoverContent = require("./PopoverContent");

describe('PopoverContent', function () {
  test('Basic', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Basic["default"], null));
    var content = _react2.screen.getByText(/We the People of the United States,/);
    expect(content).toBeInTheDocument();
  });
  test('Custom padding', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_PopoverContent.PopoverContent, {
      pb: "u3",
      pt: "u8",
      px: "u3"
    }, "Hello world"));
    var item = _react2.screen.getByText('Hello world');
    expect(item).toHaveStyleRule('padding-left', '0.75rem');
    expect(item).toHaveStyleRule('padding-right', '0.75rem');
    expect(item).toHaveStyleRule('padding-top', '2rem');
    expect(item).toHaveStyleRule('padding-bottom', '0.75rem');
  });
  test('Custom padding `p`', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_PopoverContent.PopoverContent, {
      p: "u12"
    }, "Hello world"));
    var item = _react2.screen.getByText('Hello world');
    expect(item).toHaveStyleRule('padding-left', '3rem');
    expect(item).toHaveStyleRule('padding-right', '3rem');
    expect(item).toHaveStyleRule('padding-top', '3rem');
    expect(item).toHaveStyleRule('padding-bottom', '3rem');
  });
});
//# sourceMappingURL=PopoverContent.spec.js.map