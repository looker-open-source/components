/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { UseTrapStackBaseProps } from './useTrapStack';
export declare const useFocusTrap: <E extends HTMLElement = HTMLElement>({ clickOutsideDeactivates, ...props }: UseTrapStackBaseProps<E> & {
    clickOutsideDeactivates?: boolean | undefined;
}) => [E | null, (node: E | null) => void];
