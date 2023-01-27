/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { MutableRefObject } from 'react';
export interface Trap<O = unknown> {
    element: HTMLElement;
    options?: O;
}
export interface TrapStackContextProps<O = unknown> {
    /**
     * Stores the element for the active trap (undefined if none are active)
     */
    activeTrapRef?: MutableRefObject<HTMLElement | undefined>;
    /**
     * @private
     */
    addTrap?: (id: string, trap: Trap<O>) => void;
    /**
     * Disables the current trap (no trap will be enabled as a result)
     */
    disableCurrentTrap?: () => void;
    /**
     * Enables the trap stacked on top
     */
    enableCurrentTrap?: () => void;
    /**
     * @private
     */
    getTrap?: (id: string) => Trap<O> | undefined;
    /**
     * @private
     */
    removeTrap?: (id: string) => void;
}
export interface TrapMap<O = unknown> {
    [key: string]: Trap<O>;
}
