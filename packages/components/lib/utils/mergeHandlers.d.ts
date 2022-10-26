import type { SyntheticEvent } from 'react';
/**
 * Merges 2 optional event handlers
 * @param newHandler called 2nd, if the 1st does not call preventDefault()
 * @param existingHandler called 1st, use preventDefault() to avoid calling the 2nd
 */
export declare const mergeHandlers: <E extends SyntheticEvent<Element, Event>>(newHandler?: ((e: E) => void) | undefined, existingHandler?: ((e: E) => void) | undefined) => (event: E) => void;
