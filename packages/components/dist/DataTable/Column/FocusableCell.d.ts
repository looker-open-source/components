/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FocusVisibleProps } from '../../utils';
export interface FocusableCellProps extends FocusVisibleProps {
    as?: 'th';
}
export declare const FocusableCell: import("styled-components").StyledComponent<"td", import("styled-components").DefaultTheme, FocusableCellProps, never>;
