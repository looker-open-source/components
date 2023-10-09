/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Ref } from 'react';
import type { GetWindowedListBoundaryProps } from './getWindowedListBoundaries';
export declare type UseWindowProps<E extends HTMLElement> = Omit<GetWindowedListBoundaryProps, 'height' | 'scrollPosition'> & {
    ref?: Ref<E>;
};
export declare const useWindow: <E extends HTMLElement = HTMLElement>({ itemCount, enabled, itemHeight, ref, spacerTag, }: UseWindowProps<E>) => {
    ref: (node: E | null) => void;
    start: number;
    end: number;
    before: import("react").ReactNode;
    after: import("react").ReactNode;
};
