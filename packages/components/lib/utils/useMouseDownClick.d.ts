import type { MouseEvent as ReactMouseEvent } from 'react';
/**
 * @param onMouseDownClick callback with React.MouseEvent for the first of either mousedown OR click
 * @param onMouseUp callback with DOM MouseEvent for mouseup (may be outside the element)
 */
export declare function useMouseDownClick<E extends HTMLElement>(onMouseDownClick: (e: ReactMouseEvent<E>) => void, onMouseUp?: (e: MouseEvent) => void): {
    onClick: (e: ReactMouseEvent<E>) => void;
    onMouseDown: (e: ReactMouseEvent<E>) => void;
};
