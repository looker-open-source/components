/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
export interface UseControlWarnProps {
    isControlledCheck: () => boolean;
    name: string;
    controllingProps: string[];
}
export declare function useControlWarn({ isControlledCheck, name, controllingProps, }: UseControlWarnProps): boolean;
