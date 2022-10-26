import type { MouseEvent as ReactMouseEvent } from 'react';
/**
 * Walks up the dom tree from an event's target to its currentTarget
 * to determine whether a mousedown/click was located within a button
 * @param e mouse event
 */
export declare const targetIsButton: (e: ReactMouseEvent<HTMLElement>) => boolean;
