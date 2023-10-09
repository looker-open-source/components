/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/**
 * Calls the provided handler function when the element is resized.
 * If the handler contains a state setter, it should be wrapped in useCallback to avoid an infinite loop.
 * @param element the element to observe
 * @param handler the function to call on resize
 */
export declare const useResize: (element: HTMLElement | null, handler: () => void) => void;
