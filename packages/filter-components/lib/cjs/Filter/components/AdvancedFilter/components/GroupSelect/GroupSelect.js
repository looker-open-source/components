"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupSelect = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _components = require("@looker/components");

var _omit = _interopRequireDefault(require("lodash/omit"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _filter_styles = require("../../../../utils/filter_styles");

var _templateObject;

var GroupSelect = (0, _styledComponents["default"])(function (props) {
  return _react["default"].createElement(_components.Select, (0, _extends2["default"])({
    autoResize: true
  }, (0, _omit["default"])(props, 'placement'), {
    noErrorIcon: true
  }));
}).withConfig({
  displayName: "GroupSelect",
  componentId: "sc-jsg7oj-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", " {\n    ", "\n  }\n"])), _components.InputText, _filter_styles.inputPlacementStyle);
exports.GroupSelect = GroupSelect;
//# sourceMappingURL=GroupSelect.js.map