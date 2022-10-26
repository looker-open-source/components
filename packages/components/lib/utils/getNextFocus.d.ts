export declare const getTabStops: (ref: HTMLElement, selector?: string) => HTMLElement[];
export declare const getFallbackElement: (direction: 1 | -1, containerElement: HTMLElement, tabStops: HTMLElement[]) => HTMLElement;
/**
 * Returns the next focusable inside an element in a given direction
 * @param direction 1 for forward -1 for reverse
 * @param element the container element
 */
export declare const getNextFocus: (direction: 1 | -1, element: HTMLElement) => HTMLElement | null;
