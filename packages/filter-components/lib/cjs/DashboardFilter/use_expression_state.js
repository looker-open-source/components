"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useExpressionState = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _components = require("@looker/components");

var _FilterCollection = require("../FilterCollection");

var useExpressionState = function useExpressionState(_ref) {
  var propsExpression = _ref.expression,
      filter = _ref.filter,
      onChange = _ref.onChange;

  var _useContext = (0, _react.useContext)(_FilterCollection.FilterContext),
      updateExpression = _useContext.updateExpression;

  var isControlled = (0, _components.useControlWarn)({
    controllingProps: ['expression'],
    isControlledCheck: function isControlledCheck() {
      return propsExpression !== undefined;
    },
    name: 'DashboardFilter'
  });

  var _useState = (0, _react.useState)(propsExpression || filter.default_value || ''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      uncontrolledExpression = _useState2[0],
      setExpression = _useState2[1];

  var handleChange = function handleChange(value) {
    setExpression(value.expression);
    onChange(value.expression);
  };

  var expression = isControlled ? propsExpression : uncontrolledExpression;
  (0, _react.useEffect)(function () {
    updateExpression(filter, expression);
  }, [filter, expression, updateExpression]);
  return {
    expression: expression,
    onChange: handleChange
  };
};

exports.useExpressionState = useExpressionState;
//# sourceMappingURL=use_expression_state.js.map