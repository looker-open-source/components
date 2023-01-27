"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createExploresTree = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _filterExpressions = require("@looker/filter-expressions");
var _excluded = ["children"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var getID = function getID(parentId, value, index) {
  return "".concat(parentId, ".").concat(value, "_").concat(index);
};

var createExploresTree = function createExploresTree(explores) {
  return explores.map(function (explore, index) {
    var _explore$fields, _explore$fields2;
    var fields = Object.values(explore.fields && explore.fields.dimensions || {}).concat(Object.values(((_explore$fields = explore.fields) === null || _explore$fields === void 0 ? void 0 : _explore$fields.parameters) || {})).concat(Object.values(((_explore$fields2 = explore.fields) === null || _explore$fields2 === void 0 ? void 0 : _explore$fields2.filters) || {})).concat(Object.values(explore.fields && explore.fields.measures || {})).filter(function (f) {
      return f.can_filter && !f.hidden;
    });
    var value = explore.label || explore.title || '';
    var id = getID('', value, index);
    return {
      detail: explore.group_label || explore.model_name || undefined,
      payload: {
        explore: explore.name,
        model: explore.model_name
      },
      isNotHighlightable: true,
      value: value,
      id: id,
      isOpen: false,
      children: Object.values(fields.reduce(buildFieldHierarchy(explore), {})).map(convertChildrenToArrays(id))
    };
  });
};

exports.createExploresTree = createExploresTree;
var buildFieldHierarchy = function buildFieldHierarchy(explore) {
  return function (acc, dim) {
    return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, dim.view_label, _objectSpread(_objectSpread({}, acc[dim.view_label]), {}, {
      value: dim.view_label,
      children: dim.field_group_label ? acc[dim.view_label] && acc[dim.view_label].children ? _objectSpread(_objectSpread({}, acc[dim.view_label].children), {}, (0, _defineProperty2["default"])({}, dim.field_group_label, _objectSpread(_objectSpread({}, acc[dim.view_label].children[dim.field_group_label]), {}, {
        value: dim.field_group_label,
        children: _objectSpread(_objectSpread({}, acc[dim.view_label].children[dim.field_group_label] && acc[dim.view_label].children[dim.field_group_label].children), {}, (0, _defineProperty2["default"])({}, dim.name, fieldData(dim, explore)))
      }))) : (0, _defineProperty2["default"])({}, dim.field_group_label, {
        value: dim.field_group_label,
        children: (0, _defineProperty2["default"])({}, dim.name, fieldData(dim, explore))
      }) : _objectSpread(_objectSpread({}, acc[dim.view_label] && acc[dim.view_label].children), {}, (0, _defineProperty2["default"])({}, dim.name, fieldData(dim, explore)))
    })));
  };
};

var convertChildrenToArrays = function convertChildrenToArrays(parentId) {
  return function (_ref2, itemIndex) {
    var children = _ref2.children,
      item = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
    var itemID = getID(parentId, item.value, itemIndex);
    return _objectSpread(_objectSpread({}, item), {}, {
      id: itemID,
      isOpen: false
    }, children ? {
      children: Object.values(children).map(convertChildrenToArrays(itemID))
    } : {});
  };
};

var fieldData = function fieldData(field, explore) {
  return {
    value: field.label_short,
    isSecondary: field.measure,
    payload: {
      field: field.name,
      suggestDimension: field.suggest_dimension,
      model: explore.model_name,
      explore: explore.name,
      view: field.view,
      suggestExplore: field.suggest_explore || explore.name,
      enumerations: field.enumerations,
      type: (0, _filterExpressions.getExpressionTypeFromField)(field),
      fieldOptions: field
    }
  };
};
//# sourceMappingURL=create_explores_tree.js.map