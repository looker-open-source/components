"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoMatchingFields = void 0;
var _components = require("@looker/components");
var _react = _interopRequireDefault(require("react"));
var _utils = require("../utils");

var NoMatchingFields = function NoMatchingFields(_ref) {
  var px = _ref.px;
  var _useTranslation = (0, _utils.useTranslation)('NoMatchingFields'),
    t = _useTranslation.t;
  return _react["default"].createElement(_components.SpaceVertical, {
    px: px,
    gap: "u1"
  }, _react["default"].createElement(_components.Heading, {
    as: "h5",
    color: "text1",
    fontWeight: "bold"
  }, t('No Matching Fields')), _react["default"].createElement(_components.Paragraph, {
    color: "text1",
    fontSize: "small"
  }, t('Try Something Else')));
};
exports.NoMatchingFields = NoMatchingFields;
//# sourceMappingURL=NoMatchingFields.js.map