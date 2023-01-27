/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { MutableRefObject } from 'react';
export interface FocusTrapOptions {
    /**
     * A click outside the focus trap element will not be prevented
     * and will deactivate the trap
     */
    clickOutsideDeactivates?: boolean;
    /**
     * A ref to track the last element to have focus before the trap activates
     * in order to return focus there when it deactivates
     */
    returnFocusRef: MutableRefObject<Element | null>;
}
