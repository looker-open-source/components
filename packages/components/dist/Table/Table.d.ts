/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { CompatibleHTMLProps, SpaceProps, BorderProps, LayoutProps } from '@looker/design-tokens';
export interface TableProps extends SpaceProps, LayoutProps, BorderProps, CompatibleHTMLProps<HTMLTableElement> {
}
export declare const Table: import("styled-components").StyledComponent<"table", import("styled-components").DefaultTheme, TableProps, never>;
