"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activateFocusTrap = void 0;
var _tabbable = require("tabbable");

var activeElement;

var isFocusVisible = function isFocusVisible() {
  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.activeElement;
  try {
    return element === null || element === void 0 ? void 0 : element.matches(':focus-visible');
  } catch (e) {
    return true;
  }
};
var isSelectableInput = function isSelectableInput(node) {
  var nodeAsInput = node;
  return nodeAsInput.tagName !== undefined && nodeAsInput.tagName.toLowerCase() === 'input' && typeof nodeAsInput.select === 'function' && !nodeAsInput.readOnly;
};
var checkFocusLost = function checkFocusLost() {
  return document.activeElement ? document.activeElement.tagName === 'BODY' : true;
};
var activateFocusTrap = function activateFocusTrap(_ref) {
  var _options$returnFocusR;
  var element = _ref.element,
    options = _ref.options;
  if (options && !options.returnFocusRef.current) {
    options.returnFocusRef.current = document.activeElement;
  }
  var nodeFocusedBeforeActivation = options === null || options === void 0 ? void 0 : (_options$returnFocusR = options.returnFocusRef) === null || _options$returnFocusR === void 0 ? void 0 : _options$returnFocusR.current;
  var firstTabbableNode = element;
  var lastTabbableNode = element;
  var mostRecentlyFocusedNode = null;
  var getInitialFocusNodeByPriority = function getInitialFocusNodeByPriority() {
    if (element.contains(activeElement)) {
      return activeElement;
    }

    var autoFocusElement = element.querySelector('[data-autofocus="true"]');
    if (autoFocusElement) {
      return autoFocusElement;
    }
    if (isFocusVisible()) {
      var inputElements = Array.from(element.querySelectorAll('input, textarea, select'));
      var tabbableInputElement = inputElements.find(function (inputElement) {
        return (0, _tabbable.isTabbable)(inputElement);
      });
      if (tabbableInputElement) {
        return tabbableInputElement;
      }
      var footerElement = element.querySelector('footer');
      var firstTabbableFooterElement = footerElement ? (0, _tabbable.tabbable)(footerElement)[0] : null;
      if (firstTabbableFooterElement) {
        return firstTabbableFooterElement;
      }
      var firstTabbableElement = (0, _tabbable.tabbable)(element)[0];
      if (firstTabbableElement) {
        return firstTabbableElement;
      }
    }

    var surfaceElement = element.querySelector('[data-overlay-surface="true"]');
    if (surfaceElement) {
      return surfaceElement;
    }

    return element;
  };
  var getInitialFocusNode = function getInitialFocusNode() {
    var node = getInitialFocusNodeByPriority();
    var noFocusableNode = !node || !(0, _tabbable.isFocusable)(node);
    if (isFocusVisible() && noFocusableNode) {
      throw new Error('Your focus trap needs to have at least one focusable element');
    } else if (noFocusableNode) {
      return null;
    }
    return node;
  };
  var updateTabbableNodes = function updateTabbableNodes() {
    var tabbableNodes = (0, _tabbable.tabbable)(element);
    firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
    lastTabbableNode = tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
  };
  var tryFocus = function tryFocus(node) {
    if (!node || node === document.activeElement) return;
    if (!node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }
    node.focus();
    mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  };

  var checkPointerDown = function checkPointerDown(e) {
    if (element.contains(e.target)) {
      activeElement = e.target;
    } else if (options !== null && options !== void 0 && options.clickOutsideDeactivates) {
      deactivate();
    }
  };

  var checkFocusIn = function checkFocusIn(e) {
    if (element.contains(e.target)) {
      activeElement = e.target;
      return;
    }
    if (e.target instanceof Document) {
      return;
    }
    e.stopImmediatePropagation();
    tryFocus(mostRecentlyFocusedNode || getInitialFocusNode());
  };
  var checkKey = function checkKey(e) {
    if (e.key === 'Tab' || e.keyCode === 9) {
      updateTabbableNodes();
      if (e.shiftKey && e.target === firstTabbableNode) {
        e.preventDefault();
        tryFocus(lastTabbableNode);
        return;
      }
      if (!e.shiftKey && e.target === lastTabbableNode) {
        e.preventDefault();
        tryFocus(firstTabbableNode);
      }
    }
  };
  document.addEventListener('focusin', checkFocusIn, true);
  document.addEventListener('mousedown', checkPointerDown, {
    capture: true,
    passive: false
  });
  document.addEventListener('touchstart', checkPointerDown, {
    capture: true,
    passive: false
  });
  document.addEventListener('keydown', checkKey, {
    capture: true,
    passive: false
  });
  var t = setTimeout(function () {
    tryFocus(getInitialFocusNode());
  }, 0);

  var deactivate = function deactivate() {
    clearTimeout(t);
    document.removeEventListener('focusin', checkFocusIn, true);
    document.removeEventListener('mousedown', checkPointerDown, true);
    document.removeEventListener('touchstart', checkPointerDown, true);
    document.removeEventListener('keydown', checkKey, true);

    if (checkFocusLost() && nodeFocusedBeforeActivation) {
      var elementToFocus = nodeFocusedBeforeActivation;
      elementToFocus.setAttribute('data-notooltip', 'true');
      elementToFocus.focus();
      elementToFocus.removeAttribute('data-notooltip');
    }
  };
  return deactivate;
};
exports.activateFocusTrap = activateFocusTrap;
//# sourceMappingURL=utils.js.map