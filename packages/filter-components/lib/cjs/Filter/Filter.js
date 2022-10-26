"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filter = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _filterExpressions = require("@looker/filter-expressions");

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

var _update_ast = require("./utils/update_ast");

var _filter_token_type_map = require("./utils/filter_token_type_map");

var _ControlFilter = require("./components/ControlFilter");

var _AdvancedFilter = require("./components/AdvancedFilter");

var _excluded = ["expression", "type", "expressionType", "loadUserAttributes", "skipFilterConfigCheck"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Filter = function Filter(_ref) {
  var expression = _ref.expression,
      type = _ref.type,
      propsExpressionType = _ref.expressionType,
      loadUserAttributes = _ref.loadUserAttributes,
      skipFilterConfigCheck = _ref.skipFilterConfigCheck,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var expressionType = (0, _react.useMemo)(function () {
    return propsExpressionType || (0, _filterExpressions.getExpressionType)({
      type: type,
      field: props.field || undefined
    });
  }, [propsExpressionType, type, props.field]);
  var validationMessage = (0, _utils.useValidationMessage)(expression, props.isRequired);

  var getAST = function getAST() {
    return (0, _update_ast.updateASTFromProps)(expressionType, expression, props.userAttributes);
  };

  var _useState = (0, _react.useState)(getAST),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      ast = _useState2[0],
      setAST = _useState2[1];

  var expressionRef = (0, _react.useRef)(expression);
  var typeRef = (0, _react.useRef)(expressionType);
  var internallyUpdating = (0, _react.useRef)(false);

  if (!internallyUpdating.current && (expressionRef.current !== expression || typeRef.current !== expressionType)) {
    setAST(getAST);
    expressionRef.current = expression;
    typeRef.current = expressionType;
  }

  var updateExpression = function updateExpression(newAST) {
    var _typeToGrammar = (0, _filterExpressions.typeToGrammar)(expressionType),
        toString = _typeToGrammar.toString;

    if (newAST.type === 'matchesAdvanced') {
      if (newAST.expression === undefined || newAST.expression === null) {
        return expression;
      } else return newAST.expression;
    } else {
      return toString(newAST, expressionType, props.field || undefined);
    }
  };

  var updateAST = function updateAST(newAST) {
    internallyUpdating.current = true;
    requestAnimationFrame(function () {
      internallyUpdating.current = false;
    });
    setAST(newAST);

    if (newAST) {
      if (loadUserAttributes && (0, _isEmpty["default"])(props.userAttributes) && (0, _filterExpressions.hasUserAttributeNode)(newAST)) {
        loadUserAttributes();
      } else {
        try {
          var _props$onChange;

          var newExpression = updateExpression(newAST);
          (0, _filterExpressions.parseFilterExpression)(expressionType, newExpression, props.userAttributes);
          expressionRef.current = newExpression;
          (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, {
            expression: newExpression
          });
        } catch (_ref2) {
          var message = _ref2.message;
        }
      }
    }
  };

  var _useFilterConfig = (0, _utils.useFilterConfig)({
    ast: ast,
    config: props.config,
    field: props.field,
    suggestions: props.suggestions,
    enumerations: props.enumerations,
    skipFilterConfigCheck: skipFilterConfigCheck
  }),
      config = _useFilterConfig.uiConfig;

  var isControlFilter = config && (0, _filter_token_type_map.isValidFilterType)(config.type);

  var changeFilter = function changeFilter(id, newItem) {
    if (ast) {
      if (isControlFilter) {
        var _props$onChange2;

        (_props$onChange2 = props.onChange) === null || _props$onChange2 === void 0 ? void 0 : _props$onChange2.call(props, {
          expression: updateExpression(newItem)
        });
      } else {
        var item = newItem.type === 'matchesAdvanced' ? _objectSpread(_objectSpread({}, newItem), {}, {
          expression: newItem.expression === undefined || newItem.expression === null ? expression : newItem.expression
        }) : _objectSpread(_objectSpread({}, newItem), {}, {
          expression: null
        });
        updateAST((0, _filterExpressions.updateNode)(ast, id, item));
      }
    }
  };

  if (!ast) return null;
  return isControlFilter ? _react["default"].createElement(_ControlFilter.ControlFilter, (0, _extends2["default"])({}, props, {
    config: config,
    expressionType: expressionType,
    ast: ast,
    changeFilter: changeFilter,
    validationMessage: validationMessage
  })) : _react["default"].createElement(_AdvancedFilter.AdvancedFilter, (0, _extends2["default"])({}, props, {
    config: config,
    expressionType: expressionType,
    ast: ast,
    updateAST: updateAST,
    changeFilter: changeFilter,
    validationMessage: validationMessage
  }));
};

exports.Filter = Filter;
//# sourceMappingURL=Filter.js.map