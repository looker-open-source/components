/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { DensityProp } from '@looker/design-tokens';
import type { ListItemColorProp } from '../ListItem';
export declare type TreeContextProps = DensityProp & ListItemColorProp & {
    border?: boolean;
    depth: number;
};
export declare const TreeContext: import("react").Context<TreeContextProps>;
