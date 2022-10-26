"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.targetIsButton = void 0;

var checkForButton = function checkForButton(element, containingAncestor) {
  if (element === containingAncestor) return false;
  if (!element.parentElement) return false;

  if (element.tagName === 'BUTTON') {
    return true;
  }

  return checkForButton(element.parentElement, containingAncestor);
};

var targetIsButton = function targetIsButton(e) {
  return checkForButton(e.target, e.currentTarget);
};

exports.targetIsButton = targetIsButton;
//# sourceMappingURL=targetIsButton.js.map