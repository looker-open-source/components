export declare const itemSelector = "[role=\"treeitem\"]:not(:disabled),[role=\"listitem\"]:not(:disabled),[role=\"menuitem\"]:not(:disabled)";
export declare const getItems: (ref: HTMLElement) => HTMLElement[];
/**
 * Returns the next focusable inside an element in a given direction
 * @param direction 1 for forward -1 for reverse
 * @param element the container element
 */
export declare const getNextItemFocus: (direction: 1 | -1, element: HTMLElement, vertical?: boolean | undefined) => HTMLElement;
