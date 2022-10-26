"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelsContext = exports.Panels = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _componentsProviders = require("@looker/components-providers");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PanelsContext = (0, _react.createContext)({});
exports.PanelsContext = PanelsContext;
PanelsContext.displayName = 'PanelsContext';

var activatePanel = function activatePanel(_ref) {
  var element = _ref.element;
  var panel = element.closest('[data-panel]');
  var container = element.closest('[data-panels]');

  if (panel && container) {
    container.style.visibility = 'hidden';
    panel.style.visibility = 'visible';
  }

  return function () {
    if (panel && container) {
      panel.style.visibility = '';
      container.style.visibility = '';
    }
  };
};

var Panels = (0, _styledComponents["default"])(function (props) {
  return _react["default"].createElement(_componentsProviders.TrapStackProvider, {
    activate: activatePanel,
    context: PanelsContext
  }, _react["default"].createElement("div", (0, _extends2["default"])({}, props, {
    "data-panels": true
  })));
}).withConfig({
  displayName: "Panels",
  componentId: "sc-1214ocx-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  height: 100%;\n  position: relative;\n  width: 100%;\n"])));
exports.Panels = Panels;
//# sourceMappingURL=Panels.js.map