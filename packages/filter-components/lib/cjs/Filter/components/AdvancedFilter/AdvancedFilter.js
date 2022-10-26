"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdvancedFilter = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _filterExpressions = require("@looker/filter-expressions");

var _type_to_component = require("../../utils/type_to_component");

var _components = require("@looker/components");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getShowOperator = function getShowOperator(length, index) {
  if (index > 0) return true;
  if (length > 1) return 'spacer';
  return false;
};

var AdvancedFilter = function AdvancedFilter(_ref) {
  var ast = _ref.ast,
      updateAST = _ref.updateAST,
      name = _ref.name,
      onInputChange = _ref.onInputChange,
      changeFilter = _ref.changeFilter,
      suggestions = _ref.suggestions,
      enumerations = _ref.enumerations,
      isLinked = _ref.isLinked,
      expressionType = _ref.expressionType,
      userAttributes = _ref.userAttributes,
      field = _ref.field,
      inline = _ref.inline,
      validationMessage = _ref.validationMessage,
      isLoading = _ref.isLoading,
      allowMultipleValues = _ref.allowMultipleValues;

  var onAdd = function onAdd(filterItem, keepValue) {
    if (ast) {
      var newItem = keepValue ? filterItem : _objectSpread(_objectSpread({}, filterItem), {}, {
        value: []
      });
      updateAST((0, _filterExpressions.addNode)(ast, newItem));
    }
  };

  var onRemove = function onRemove(id) {
    if (ast) {
      updateAST((0, _filterExpressions.removeNode)(ast, id));
    }
  };

  var FilterComponent = (0, _type_to_component.typeToComponent)(expressionType);
  if (!FilterComponent) return null;
  var items = (0, _filterExpressions.treeToList)(ast);
  var lastItemIndex = items.length - 1;
  var filterList = items.map(function (item, itemIndex) {
    var key = "".concat(name, "-").concat(item.id);
    var isMatchesAdvanced = item.type === 'matchesAdvanced';
    var showAdd = itemIndex === lastItemIndex && !isMatchesAdvanced && !(field !== null && field !== void 0 && field.parameter) && Boolean(allowMultipleValues);
    var showRemove = lastItemIndex > 0 && !isMatchesAdvanced;
    return _react["default"].createElement(FilterComponent, {
      key: key,
      name: name,
      filterType: expressionType,
      isLinked: isLinked,
      suggestions: suggestions,
      enumerations: enumerations,
      item: item,
      isLoading: isLoading,
      onChange: changeFilter,
      onInputChange: onInputChange,
      onAdd: onAdd,
      onRemove: onRemove,
      showAdd: showAdd,
      showName: itemIndex === 0,
      showRemove: showRemove,
      showOperator: getShowOperator(items.length, itemIndex),
      userAttributes: userAttributes,
      showMatchesAdvanced: items.length === 1,
      field: field,
      inline: inline,
      validationMessage: validationMessage,
      allowMultipleOptions: Boolean(allowMultipleValues)
    });
  });
  return _react["default"].createElement(_components.SpaceVertical, null, filterList);
};

exports.AdvancedFilter = AdvancedFilter;
//# sourceMappingURL=AdvancedFilter.js.map