/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { TreeModel } from './types';
import type { TreeProps } from './Tree';
export declare type ShortcutTreeProps = Pick<TreeProps, 'onFieldClick'> & {
    tree: Array<Omit<TreeModel, 'children'>>;
};
export declare const ShortcutTree: import("styled-components").StyledComponent<({ tree, onFieldClick, ...props }: ShortcutTreeProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
