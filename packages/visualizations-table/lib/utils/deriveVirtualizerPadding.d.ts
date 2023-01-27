/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Virtualizer } from '@tanstack/react-virtual';
/**
 * Utility used for virtual scrolling calculations, derived from the
 * tankstack-virtualizer object. It returns start and end padding offset,
 * which is relevant for both horizontal or vertical scrolling.
 * @param virtualizer
 * @returns padding start and end values
 */
export declare const deriveVirtualizerPadding: (virtualizer: Virtualizer<HTMLDivElement | null, unknown>) => number[];
