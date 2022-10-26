"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cell = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("./utils");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var rangePositionWidth = function rangePositionWidth(_ref) {
  var rangePosition = _ref.rangePosition,
      weekStart = _ref.weekStart,
      weekEnd = _ref.weekEnd;

  if (!rangePosition || rangePosition === 'middle') {
    return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      width: 100%;\n    "])));
  }

  if (rangePosition === 'end' && weekStart || rangePosition === 'start' && weekEnd) {
    return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      width: calc(100% - ", ");\n    "])), function (_ref2) {
      var space = _ref2.theme.space;
      return space.u4;
    });
  }

  return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    width: ", ";\n  "])), function (_ref3) {
    var theme = _ref3.theme;
    return theme.space.u4;
  });
};

var rangePositionLeft = function rangePositionLeft(_ref4) {
  var rangePosition = _ref4.rangePosition,
      weekStart = _ref4.weekStart;

  if (rangePosition === 'start') {
    if (weekStart) {
      return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n        left: auto;\n        right: 0;\n      "])));
    } else {
      return (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n        left: ", ";\n      "])), function (_ref5) {
        var theme = _ref5.theme;
        return theme.space.u4;
      });
    }
  }

  return (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n    left: 0;\n  "])));
};

var Cell = (0, _styledComponents["default"])(function (_ref6) {
  var children = _ref6.children,
      className = _ref6.className;
  return _react["default"].createElement("div", {
    className: className
  }, children);
}).withConfig({
  displayName: "Cell",
  componentId: "sc-y9lybp-0"
})(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n  margin: ", " 0;\n  padding-left: ", ";\n  padding-right: ", ";\n  position: relative;\n  &::before {\n    content: ' ';\n    height: 100%;\n    position: absolute;\n    ", "\n    ", "\n     ", "\n  }\n"])), function (_ref7) {
  var theme = _ref7.theme;
  return theme.space.u05;
}, function (_ref8) {
  var theme = _ref8.theme,
      weekStart = _ref8.weekStart;
  return weekStart ? theme.space.u5 : '0';
}, function (_ref9) {
  var theme = _ref9.theme,
      weekEnd = _ref9.weekEnd;
  return weekEnd ? theme.space.u5 : '0';
}, rangePositionWidth, rangePositionLeft, _utils.rangeTypeStyle);
exports.Cell = Cell;
//# sourceMappingURL=Cell.js.map