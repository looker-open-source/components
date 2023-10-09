/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
export interface UseToggleReturn {
    value: boolean;
    change: (value: boolean) => void;
    setOn: () => void;
    setOff: () => void;
    toggle: () => void;
}
export declare function useToggle(initialValue?: boolean): UseToggleReturn;
