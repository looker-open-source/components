"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePopper = usePopper;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _concat = _interopRequireDefault(require("lodash/concat"));

var _merge = _interopRequireDefault(require("lodash/merge"));

var _react = require("react");

var _core = require("@popperjs/core");

var _getCurrentNode = require("./getCurrentNode");

var _useCallbackRef3 = require("./useCallbackRef");

function usePopper(_ref) {
  var anchor = _ref.anchor,
      target = _ref.target,
      options = _ref.options;

  var _useState = (0, _react.useState)({
    popper: {
      left: '0',
      margin: '0',
      position: 'fixed',
      top: '-9999px'
    }
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      styles = _useState2[0],
      setStyles = _useState2[1];

  var _useState3 = (0, _react.useState)(options.placement),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      truePlacement = _useState4[0],
      setTruePlacement = _useState4[1];

  var popperInstanceRef = (0, _react.useRef)();

  var _useCallbackRef = (0, _useCallbackRef3.useCallbackRef)(),
      _useCallbackRef2 = (0, _slicedToArray2["default"])(_useCallbackRef, 2),
      targetElement = _useCallbackRef2[0],
      targetRef = _useCallbackRef2[1];

  var mergedOptions = (0, _react.useMemo)(function () {
    return (0, _merge["default"])(options, {
      modifiers: (0, _concat["default"])(options && options.modifiers, [{
        enabled: false,
        name: 'applyStyles'
      }, {
        enabled: true,
        fn: function fn(_ref2) {
          var placement = _ref2.state.placement;
          return setTruePlacement(placement);
        },
        name: 'update-placement',
        phase: 'afterWrite'
      }, {
        enabled: true,
        fn: function fn(_ref3) {
          var styles = _ref3.state.styles;
          return setStyles((0, _cloneDeep["default"])(styles));
        },
        name: 'update-styles',
        phase: 'afterWrite'
      }, {
        enabled: true,
        name: 'preventOverflow',
        options: {
          boundary: 'viewport',
          padding: 8
        }
      }]),
      strategy: 'fixed'
    });
  }, [options]);
  (0, _react.useEffect)(function () {
    var anchorNode = (0, _getCurrentNode.getCurrentNode)(anchor);
    var targetNode = target ? (0, _getCurrentNode.getCurrentNode)(target) : targetElement;

    if (anchorNode && targetNode) {
      popperInstanceRef.current = (0, _core.createPopper)(anchorNode, targetNode, mergedOptions);
    }

    return function () {
      popperInstanceRef.current && popperInstanceRef.current.destroy();
    };
  }, [anchor, target, targetElement, mergedOptions]);
  return {
    placement: truePlacement,
    popperInstanceRef: popperInstanceRef,
    style: styles.popper,
    targetRef: targetRef
  };
}
//# sourceMappingURL=usePopper.js.map