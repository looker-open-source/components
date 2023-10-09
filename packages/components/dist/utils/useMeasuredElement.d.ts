/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
export declare const measureElement: (element?: HTMLElement | null | undefined) => DOMRect;
export declare const useMeasuredElement: (element: HTMLElement | null) => [DOMRect, () => void];
