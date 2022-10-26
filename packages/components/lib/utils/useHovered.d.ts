import type { RefObject } from 'react';
/**
 * Get the hover / focus state of an element over which the current component has no control
 */
export declare function useHovered<E extends HTMLElement = HTMLElement>(hoverElement?: E | null | RefObject<E>): [boolean, ((node: E | null) => void) | null];
