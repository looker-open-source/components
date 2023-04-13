"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _noop = _interopRequireDefault(require("lodash/noop"));
var _react = _interopRequireDefault(require("react"));
var _testUtils = require("@looker/test-utils");
var _examples = require("./stories/examples");
var _Tree = require("./Tree");

describe('Tree tests', function () {
  it('should render a tree', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    var _renderWithTheme, container;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _renderWithTheme = (0, _testUtils.renderWithTheme)(_react["default"].createElement(_Tree.Tree, {
            tree: _examples.mockTreeData,
            onSectionClick: _noop["default"],
            onFieldClick: _noop["default"]
          })), container = _renderWithTheme.container;
          expect(container).toBeVisible();
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
});
//# sourceMappingURL=Tree.spec.js.map