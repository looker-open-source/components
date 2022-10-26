"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTabStops = exports.getNextFocus = exports.getFallbackElement = void 0;

var getTabStops = function getTabStops(ref) {
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'a,button:not(:disabled),[tabindex="0"],[tabindex="-1"]:not(:disabled)';
  return Array.from(ref.querySelectorAll(selector));
};

exports.getTabStops = getTabStops;

var getFallbackElement = function getFallbackElement(direction, containerElement, tabStops) {
  var fallback;

  if (direction === 1) {
    var firstVisibleChild = tabStops.find(function (childElement) {
      return childElement.offsetTop >= containerElement.scrollTop;
      return false;
    });
    if (firstVisibleChild) fallback = firstVisibleChild;else fallback = tabStops[0];
  } else {
    fallback = tabStops[tabStops.length - 1];
  }

  return fallback;
};

exports.getFallbackElement = getFallbackElement;

var getNextFocus = function getNextFocus(direction, element) {
  var tabStops = getTabStops(element);
  var focusedElement = document.activeElement;

  if (tabStops.length > 0 && focusedElement instanceof HTMLElement) {
    if (tabStops.includes(focusedElement)) {
      var next = tabStops.findIndex(function (el) {
        return el === document.activeElement;
      }) + direction;

      if (next === tabStops.length || !tabStops[next]) {
        return getFallbackElement(direction, element, tabStops);
      }

      return tabStops[next];
    }

    return getFallbackElement(direction, element, tabStops);
  }

  return null;
};

exports.getNextFocus = getNextFocus;
//# sourceMappingURL=getNextFocus.js.map