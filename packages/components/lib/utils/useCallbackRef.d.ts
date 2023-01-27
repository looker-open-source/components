/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Ref } from 'react';
export declare function useCallbackRef<T extends HTMLElement = HTMLElement>(forwardedRef?: Ref<T>): [T | null, (node: T | null) => void];
