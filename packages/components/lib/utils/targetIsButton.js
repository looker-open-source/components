const checkForButton = (element, containingAncestor) => {
  if (element === containingAncestor) return false;
  if (!element.parentElement) return false;

  if (element.tagName === 'BUTTON') {
    return true;
  }

  return checkForButton(element.parentElement, containingAncestor);
};

export const targetIsButton = e => {
  return checkForButton(e.target, e.currentTarget);
};
//# sourceMappingURL=targetIsButton.js.map