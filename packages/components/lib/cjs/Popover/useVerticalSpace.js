"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useVerticalSpace = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var topPlacements = ['top', 'top-start', 'top-end', 'right-end', 'left-end'];
var bottomPlacements = ['bottom', 'bottom-start', 'bottom-end', 'right-start', 'left-start'];
var sidePlacements = ['left-start', 'left-end', 'left', 'right-start', 'right-end', 'right'];

var useVerticalSpace = function useVerticalSpace(element, pin, placement, isOpen, popperStyle) {
  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      spaceTop = _useState2[0],
      setSpaceTop = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      spaceBottom = _useState4[0],
      setSpaceBottom = _useState4[1];

  var placementIsBottom = placement && bottomPlacements.includes(placement);
  var placementIsTop = placement && topPlacements.includes(placement);
  var placementIsSide = placement && sidePlacements.includes(placement);
  (0, _react.useEffect)(function () {
    var getVerticalSpace = function getVerticalSpace() {
      if (element) {
        if (placementIsBottom || placementIsTop) {
          var _element$getBoundingC = element.getBoundingClientRect(),
              top = _element$getBoundingC.top,
              bottom = _element$getBoundingC.bottom;

          if (!pin || placementIsTop) {
            var _spaceTop = placementIsSide ? bottom : top;

            setSpaceTop(_spaceTop);
          } else if (pin) {
            setSpaceTop(0);
          }

          if (!pin || placementIsBottom) {
            var sideToUse = placementIsSide ? top : bottom;
            setSpaceBottom(window.innerHeight - sideToUse);
          } else if (pin) {
            setSpaceBottom(0);
          }
        } else {
          setSpaceTop(window.innerHeight);
        }
      }
    };

    if (isOpen) {
      window.addEventListener('resize', getVerticalSpace);
      getVerticalSpace();
    }

    return function () {
      window.removeEventListener('resize', getVerticalSpace);
    };
  }, [element, pin, placementIsBottom, placementIsTop, placementIsSide, isOpen, popperStyle.transform]);
  var max = Math.max(spaceTop, spaceBottom);
  var windowHeight = (typeof window === "undefined" ? "undefined" : (0, _typeof2["default"])(window)) !== "undefined" ? window.innerHeight : 50;
  return max > 50 ? max : windowHeight;
};

exports.useVerticalSpace = useVerticalSpace;
//# sourceMappingURL=useVerticalSpace.js.map