import { getFallbackElement, getTabStops } from '../../utils/getNextFocus';
export const itemSelector = '[role="treeitem"]:not(:disabled),[role="listitem"]:not(:disabled),[role="menuitem"]:not(:disabled)';
export const getItems = ref => Array.from(ref.querySelectorAll(itemSelector));
export const getNextItemFocus = (direction, element, vertical) => {
  const items = getItems(element);
  const focusedElement = document.activeElement;

  if (items.length > 0 && focusedElement instanceof HTMLElement) {
    const isItemFocused = focusedElement && items.includes(focusedElement);
    const closestWrapper = focusedElement === null || focusedElement === void 0 ? void 0 : focusedElement.closest('li:not(:disabled),[role=group]:not(:disabled)');

    if (closestWrapper instanceof HTMLElement) {
      if (vertical) {
        const target = isItemFocused ? focusedElement : closestWrapper.querySelector(itemSelector);
        const next = items.findIndex(el => el === target) + direction;

        if (next === items.length || !items[next]) {
          return getFallbackElement(direction, element, items);
        }

        return items[next];
      } else if (vertical === false) {
        const tabStops = getTabStops(closestWrapper, 'a,input,button:not(:disabled),[tabindex="0"],[tabindex="-1"]:not(:disabled)');
        const next = tabStops.findIndex(el => el === focusedElement) + direction;

        if (next === tabStops.length || !tabStops[next]) {
          return getFallbackElement(direction, focusedElement, tabStops);
        }

        return tabStops[next];
      }
    }
  }

  return getFallbackElement(direction, element, items);
};
//# sourceMappingURL=getNextItemFocus.js.map