/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/**
 * Detects if an element's content overflows its width using a ResizeObserver.
 * Avoid using repeatedly in long lists for performance concerns.
 */
export declare const useIsTruncated: (element: HTMLElement | null, identity?: number | undefined) => boolean;
