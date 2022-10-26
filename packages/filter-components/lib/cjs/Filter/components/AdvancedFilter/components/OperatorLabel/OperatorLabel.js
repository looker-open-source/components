"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OperatorLabel = void 0;

var _components = require("@looker/components");

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../../../../utils");

var OperatorLabel = function OperatorLabel(_ref) {
  var value = _ref.value;

  var _useTranslation = (0, _utils.useTranslation)('OperatorLabel'),
      t = _useTranslation.t;

  return _react["default"].createElement(_components.Span, {
    color: "text1",
    fontSize: "small"
  }, value ? t('OR') : t('AND'));
};

exports.OperatorLabel = OperatorLabel;
//# sourceMappingURL=OperatorLabel.js.map