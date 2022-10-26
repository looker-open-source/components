"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemSelector = exports.getNextItemFocus = exports.getItems = void 0;

var _getNextFocus = require("../../utils/getNextFocus");

var itemSelector = '[role="treeitem"]:not(:disabled),[role="listitem"]:not(:disabled),[role="menuitem"]:not(:disabled)';
exports.itemSelector = itemSelector;

var getItems = function getItems(ref) {
  return Array.from(ref.querySelectorAll(itemSelector));
};

exports.getItems = getItems;

var getNextItemFocus = function getNextItemFocus(direction, element, vertical) {
  var items = getItems(element);
  var focusedElement = document.activeElement;

  if (items.length > 0 && focusedElement instanceof HTMLElement) {
    var isItemFocused = focusedElement && items.includes(focusedElement);
    var closestWrapper = focusedElement === null || focusedElement === void 0 ? void 0 : focusedElement.closest('li:not(:disabled),[role=group]:not(:disabled)');

    if (closestWrapper instanceof HTMLElement) {
      if (vertical) {
        var target = isItemFocused ? focusedElement : closestWrapper.querySelector(itemSelector);
        var next = items.findIndex(function (el) {
          return el === target;
        }) + direction;

        if (next === items.length || !items[next]) {
          return (0, _getNextFocus.getFallbackElement)(direction, element, items);
        }

        return items[next];
      } else if (vertical === false) {
        var tabStops = (0, _getNextFocus.getTabStops)(closestWrapper, 'a,input,button:not(:disabled),[tabindex="0"],[tabindex="-1"]:not(:disabled)');

        var _next = tabStops.findIndex(function (el) {
          return el === focusedElement;
        }) + direction;

        if (_next === tabStops.length || !tabStops[_next]) {
          return (0, _getNextFocus.getFallbackElement)(direction, focusedElement, tabStops);
        }

        return tabStops[_next];
      }
    }
  }

  return (0, _getNextFocus.getFallbackElement)(direction, element, items);
};

exports.getNextItemFocus = getNextItemFocus;
//# sourceMappingURL=getNextItemFocus.js.map