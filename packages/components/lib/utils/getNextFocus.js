export const getTabStops = (ref, selector = 'a,button:not(:disabled),[tabindex="0"],[tabindex="-1"]:not(:disabled)') => Array.from(ref.querySelectorAll(selector));
export const getFallbackElement = (direction, containerElement, tabStops) => {
  let fallback;

  if (direction === 1) {
    const firstVisibleChild = tabStops.find(childElement => {
      return childElement.offsetTop >= containerElement.scrollTop;
      return false;
    });
    if (firstVisibleChild) fallback = firstVisibleChild;else fallback = tabStops[0];
  } else {
    fallback = tabStops[tabStops.length - 1];
  }

  return fallback;
};
export const getNextFocus = (direction, element) => {
  const tabStops = getTabStops(element);
  const focusedElement = document.activeElement;

  if (tabStops.length > 0 && focusedElement instanceof HTMLElement) {
    if (tabStops.includes(focusedElement)) {
      const next = tabStops.findIndex(el => el === document.activeElement) + direction;

      if (next === tabStops.length || !tabStops[next]) {
        return getFallbackElement(direction, element, tabStops);
      }

      return tabStops[next];
    }

    return getFallbackElement(direction, element, tabStops);
  }

  return null;
};
//# sourceMappingURL=getNextFocus.js.map