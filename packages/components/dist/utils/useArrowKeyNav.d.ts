import type { FocusEvent, KeyboardEvent, Ref } from 'react';
export declare type ArrowKeyAxis = 'vertical' | 'horizontal' | 'both';
export interface UseArrowKeyNavProps<E extends HTMLElement> {
    /**
     * vertical for up/down arrow keys, horizontal for left/right, both for all (grid)
     * @default vertical
     */
    axis?: ArrowKeyAxis;
    /**
     * If true, nothing is returned from the useArrowKeyNav call
     * Note: Used internally by Tree's nested List
     * @private
     */
    disabled?: boolean;
    /**
     * A custom getter for the next item to focus
     */
    getNextFocus?: (direction: 1 | -1, element: E, vertical?: boolean) => HTMLElement | null;
    /**
     * will be merged with the ref in the return
     */
    ref?: Ref<E>;
    /**
     * will be merged with the onBlur in the return
     */
    onBlur?: (e: FocusEvent<E>) => void;
    /**
     * will be merged with the onFocus in the return
     */
    onFocus?: (e: FocusEvent<E>) => void;
    /**
     * will be merged with the onKeyDown in the return
     */
    onKeyDown?: (e: KeyboardEvent<E>) => void;
}
export declare type UseArrowKeyNavResult<E extends HTMLElement> = Pick<UseArrowKeyNavProps<E>, 'ref' | 'onBlur' | 'onFocus' | 'onKeyDown'> & {
    tabIndex?: number;
};
/**
 * Returns props to spread onto container element for arrow key navigation.
 * Add tabIndex={-1} to child elements.
 */
export declare const useArrowKeyNav: <E extends HTMLElement = HTMLElement>({ axis, disabled, getNextFocus, ref, onBlur, onFocus, onKeyDown, }: UseArrowKeyNavProps<E>) => UseArrowKeyNavResult<E>;
