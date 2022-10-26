"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _DateFormat = require("../DateFormat");

var date = new Date('January 25, 1988 11:58:03');
test('DateFormat renders only date', function () {
  var _render = (0, _react.render)(_react2["default"].createElement(_DateFormat.DateFormat, null, date)),
      container = _render.container;

  expect(container).toMatchInlineSnapshot("\n    <div>\n      Jan 25, 1988\n    </div>\n  ");
});
//# sourceMappingURL=DateFormat.spec.js.map