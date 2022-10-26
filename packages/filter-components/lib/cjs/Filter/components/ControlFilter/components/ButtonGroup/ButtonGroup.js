"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonGroup = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _components = require("@looker/components");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _constants = require("../../../../../constants");

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ButtonGroup = (0, _styledComponents["default"])(function (_ref) {
  var className = _ref.className,
      isLoading = _ref.isLoading,
      onChange = _ref.onChange,
      options = _ref.options,
      value = _ref.value;
  return isLoading ? _react["default"].createElement(_components.ProgressCircular, {
    size: "medium"
  }) : _react["default"].createElement(_components.ButtonGroup, {
    className: className,
    onChange: onChange,
    options: options,
    value: value
  });
}).withConfig({
  displayName: "ButtonGroup",
  componentId: "sc-ikfypj-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), function (_ref2) {
  var validationMessage = _ref2.validationMessage;
  return (validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type) === _constants.ERROR_TYPE && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      ", " {\n        border-color: ", ";\n      }\n    "])), _components.ButtonItem, function (_ref3) {
    var theme = _ref3.theme;
    return theme.colors.criticalBorder;
  });
});
exports.ButtonGroup = ButtonGroup;
//# sourceMappingURL=ButtonGroup.js.map