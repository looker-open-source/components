"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _react2 = require("@testing-library/react");
var _VisWrapper = require("./VisWrapper");

describe('VisWrapper', function () {
  it('wraps itself in ComponentsProvider if rendered outside of theme context', function () {
    var CustomVis = function CustomVis() {
      var theme = (0, _styledComponents.useTheme)();
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("p", null, "Rendered Without Error!"), _react["default"].createElement("dl", null, _react["default"].createElement("dt", null, "Background Color:"), _react["default"].createElement("dd", null, theme.colors.background)));
    };
    (0, _react2.render)(_react["default"].createElement(_VisWrapper.VisWrapper, null, _react["default"].createElement(CustomVis, null)));
    expect(_react2.screen.getByText('Rendered Without Error!')).toBeInTheDocument();
  });
});
//# sourceMappingURL=VisWrapper.spec.js.map