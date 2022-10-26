"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MatchesAdvanced = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _filterExpressions = require("@looker/filter-expressions");

var _GroupInput = require("../GroupInput");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getFilterItemExpression = function getFilterItemExpression(item, type, field) {
  var _typeToGrammar = (0, _filterExpressions.typeToGrammar)(type),
      toString = _typeToGrammar.toString;

  return toString(item, type, field);
};

var MatchesAdvanced = function MatchesAdvanced(_ref) {
  var item = _ref.item,
      expression = _ref.item.expression,
      onChange = _ref.onChange,
      field = _ref.field,
      filterType = _ref.filterType;

  var expressionChanged = function expressionChanged(event) {
    var newExpression = event.currentTarget.value;
    onChange(item.id, _objectSpread(_objectSpread({}, item), {}, {
      type: 'matchesAdvanced',
      expression: newExpression
    }));
  };

  return _react["default"].createElement(_GroupInput.GroupInput, {
    type: "text",
    minWidth: "120px",
    value: expression !== null && expression !== void 0 ? expression : getFilterItemExpression(item, filterType, field),
    onChange: expressionChanged,
    placement: "right"
  });
};

exports.MatchesAdvanced = MatchesAdvanced;
//# sourceMappingURL=MatchesAdvanced.js.map