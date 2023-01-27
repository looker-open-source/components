"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCard = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _components = require("@looker/components");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
var StyledCard = (0, _styledComponents["default"])(_components.Card).withConfig({
  displayName: "StyledCard",
  componentId: "sc-1dq13nz-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border-color: ", ";\n  border-radius: ", ";\n  display: grid;\n  grid-gap: 1rem;\n  height: auto;\n  margin-bottom: 1rem;\n  padding: 1rem;\n"])), _components.theme.colors.text4, _components.theme.colors.text, _components.theme.radii.medium);
exports.StyledCard = StyledCard;
//# sourceMappingURL=StyledCard.js.map