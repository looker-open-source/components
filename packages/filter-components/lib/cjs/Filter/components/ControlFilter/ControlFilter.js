"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlFilter = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../../utils");

var _get_filter_token_item = require("../../utils/get_filter_token_item");

var _excluded = ["ast", "expressionType", "validationMessage", "dispatchConfigTypeChange"],
    _excluded2 = ["onInputChange"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ControlFilter = function ControlFilter(_ref) {
  var ast = _ref.ast,
      expressionType = _ref.expressionType,
      validationMessage = _ref.validationMessage,
      _ref$dispatchConfigTy = _ref.dispatchConfigTypeChange,
      dispatchConfigTypeChange = _ref$dispatchConfigTy === void 0 ? false : _ref$dispatchConfigTy,
      adapterProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var config = adapterProps.config,
      field = adapterProps.field;

  var _getControlFilterInfo = (0, _utils.getControlFilterInfo)((0, _get_filter_token_item.getFilterTokenItem)(ast, expressionType, config.type), adapterProps),
      Component = _getControlFilterInfo.Component,
      filterTokenProps = _getControlFilterInfo.props;

  (0, _react.useEffect)(function () {
    if (dispatchConfigTypeChange) {
      if (filterTokenProps !== null && filterTokenProps !== void 0 && filterTokenProps.date) {
        filterTokenProps === null || filterTokenProps === void 0 ? void 0 : filterTokenProps.onChange(filterTokenProps === null || filterTokenProps === void 0 ? void 0 : filterTokenProps.date);
      } else {
        filterTokenProps === null || filterTokenProps === void 0 ? void 0 : filterTokenProps.onChange(filterTokenProps === null || filterTokenProps === void 0 ? void 0 : filterTokenProps.value);
      }
    }
  }, [config.type]);

  if (!filterTokenProps || !Component) {
    return null;
  }

  var filterTokenInputChange = filterTokenProps.onInputChange,
      restProps = (0, _objectWithoutProperties2["default"])(filterTokenProps, _excluded2);
  var toggleOptions = (0, _utils.calculateSuggestOptions)(filterTokenProps);
  return _react["default"].createElement(Component, (0, _extends2["default"])({
    onInputChange: filterTokenInputChange,
    inline: config.display === 'inline',
    validationMessage: validationMessage,
    anyOption: !((field === null || field === void 0 ? void 0 : field.category) === 'parameter')
  }, restProps, {
    options: toggleOptions
  }));
};

exports.ControlFilter = ControlFilter;
//# sourceMappingURL=ControlFilter.js.map