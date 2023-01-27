/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Ref } from 'react';
export declare type UseOverflowProps = {
    hasOverflow: boolean;
};
export declare const useOverflow: (ref?: Ref<HTMLElement> | undefined) => [boolean, (node: HTMLElement | null) => void];
