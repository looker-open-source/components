/**
 * Checks a list of mutations against an element
 * and returns true if it was removed
 * @param mutationsList the list of mutations from a MutationObserver
 * @param element
 */
export declare const checkElementRemoved: (mutationsList: MutationRecord[], element?: HTMLElement | undefined) => boolean;
