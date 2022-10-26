"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTrapStack = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _useID = require("./useID");

var _useCallbackRef3 = require("./useCallbackRef");

var useTrapStack = function useTrapStack(_ref) {
  var context = _ref.context,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      ref = _ref.ref,
      options = _ref.options;
  var id = (0, _useID.useID)();

  var _useCallbackRef = (0, _useCallbackRef3.useCallbackRef)(ref),
      _useCallbackRef2 = (0, _slicedToArray2["default"])(_useCallbackRef, 2),
      element = _useCallbackRef2[0],
      callbackRef = _useCallbackRef2[1];

  var _useContext = (0, _react.useContext)(context),
      addTrap = _useContext.addTrap,
      removeTrap = _useContext.removeTrap,
      disableCurrentTrap = _useContext.disableCurrentTrap,
      enableCurrentTrap = _useContext.enableCurrentTrap;

  (0, _react.useEffect)(function () {
    if (!addTrap) {
      console.warn("".concat(context.displayName, " is missing. Please wrap all @looker/components in a ComponentsProvider."));
    }
  }, [addTrap, context]);
  (0, _react.useEffect)(function () {
    if (element) {
      if (disabled) {
        disableCurrentTrap === null || disableCurrentTrap === void 0 ? void 0 : disableCurrentTrap();
      } else {
        addTrap === null || addTrap === void 0 ? void 0 : addTrap(id, {
          element: element,
          options: options
        });
      }
    }

    return function () {
      if (disabled) {
        enableCurrentTrap === null || enableCurrentTrap === void 0 ? void 0 : enableCurrentTrap();
      } else {
        removeTrap === null || removeTrap === void 0 ? void 0 : removeTrap(id);
      }
    };
  }, [disabled, id, element, options, addTrap, removeTrap, disableCurrentTrap, enableCurrentTrap]);
  return [element, callbackRef];
};

exports.useTrapStack = useTrapStack;
//# sourceMappingURL=useTrapStack.js.map