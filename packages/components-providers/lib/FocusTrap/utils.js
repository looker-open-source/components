import { tabbable, isFocusable, isTabbable } from 'tabbable';
let activeElement;

const isFocusVisible = (element = document.activeElement) => {
  try {
    return element === null || element === void 0 ? void 0 : element.matches(':focus-visible');
  } catch (e) {
    return true;
  }
};

const isSelectableInput = node => {
  const nodeAsInput = node;
  return nodeAsInput.tagName !== undefined && nodeAsInput.tagName.toLowerCase() === 'input' && typeof nodeAsInput.select === 'function' && !nodeAsInput.readOnly;
};

const checkFocusLost = () => {
  return document.activeElement ? document.activeElement.tagName === 'BODY' : true;
};

export const activateFocusTrap = ({
  element,
  options
}) => {
  var _options$returnFocusR;

  if (options && !options.returnFocusRef.current) {
    options.returnFocusRef.current = document.activeElement;
  }

  const nodeFocusedBeforeActivation = options === null || options === void 0 ? void 0 : (_options$returnFocusR = options.returnFocusRef) === null || _options$returnFocusR === void 0 ? void 0 : _options$returnFocusR.current;
  let firstTabbableNode = element;
  let lastTabbableNode = element;
  let mostRecentlyFocusedNode = null;

  const getInitialFocusNodeByPriority = () => {
    if (element.contains(activeElement)) {
      return activeElement;
    }

    const autoFocusElement = element.querySelector('[data-autofocus="true"]');

    if (autoFocusElement) {
      return autoFocusElement;
    }

    const inputElements = Array.from(element.querySelectorAll('input, textarea, select'));
    const tabbableInputElement = inputElements.find(inputElement => isTabbable(inputElement));

    if (tabbableInputElement) {
      return tabbableInputElement;
    }

    const footerElement = element.querySelector('footer');
    const firstTabbableFooterElement = footerElement ? tabbable(footerElement)[0] : null;

    if (firstTabbableFooterElement) {
      return firstTabbableFooterElement;
    }

    const firstTabbableElement = tabbable(element)[0];

    if (firstTabbableElement) {
      return firstTabbableElement;
    }

    const surfaceElement = element.querySelector('[data-overlay-surface="true"]');

    if (surfaceElement) {
      return surfaceElement;
    }

    return element;
  };

  const getInitialFocusNode = () => {
    const node = getInitialFocusNodeByPriority();

    if (!node || !isFocusable(node)) {
      throw new Error('Your focus trap needs to have at least one focusable element');
    }

    return node;
  };

  const updateTabbableNodes = () => {
    const tabbableNodes = tabbable(element);
    firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
    lastTabbableNode = tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
  };

  const tryFocus = node => {
    if (node === document.activeElement) return;

    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus();
    mostRecentlyFocusedNode = node;

    if (isSelectableInput(node)) {
      node.select();
    }
  };

  const checkPointerDown = function checkPointerDown(e) {
    if (element.contains(e.target)) {
      activeElement = e.target;
    } else if (options !== null && options !== void 0 && options.clickOutsideDeactivates) {
      deactivate();
    }
  };

  const checkFocusIn = e => {
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

  const checkKey = e => {
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
  const t = setTimeout(() => {
    if (isFocusVisible()) {
      tryFocus(getInitialFocusNode());
    }
  }, 0);

  const deactivate = () => {
    clearTimeout(t);
    document.removeEventListener('focusin', checkFocusIn, true);
    document.removeEventListener('mousedown', checkPointerDown, true);
    document.removeEventListener('touchstart', checkPointerDown, true);
    document.removeEventListener('keydown', checkKey, true);

    if (checkFocusLost() && nodeFocusedBeforeActivation) {
      const elementToFocus = nodeFocusedBeforeActivation;
      elementToFocus.setAttribute('data-notooltip', 'true');
      elementToFocus.focus();
      elementToFocus.removeAttribute('data-notooltip');
    }
  };

  return deactivate;
};
//# sourceMappingURL=utils.js.map