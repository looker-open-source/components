/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { ListItemDetailConfig } from '../types';
export declare const getDetailOptions: (detail: ListItemDetailConfig) => {
    accessory: boolean | undefined;
    content: import("react").ReactNode;
    hoverDisclosure: boolean | undefined;
    width: number | undefined;
};
