"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Playground = void 0;
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _VisualizationPlayground = require("../VisualizationPlayground");
var _default = {
  component: _VisualizationPlayground.VisualizationPlayground,
  title: 'Visualizations/Playground'
};
exports["default"] = _default;
var Template = function Template(props) {
  return _react["default"].createElement(_VisualizationPlayground.VisualizationPlayground, props);
};
var Playground = Template.bind({});
exports.Playground = Playground;
Playground.args = {};
Playground.parameters = {
  beforeScreenshot: function () {
    var _beforeScreenshot = (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 1000);
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function beforeScreenshot() {
      return _beforeScreenshot.apply(this, arguments);
    }
    return beforeScreenshot;
  }()
};
//# sourceMappingURL=VisualizationPlayground.stories.js.map