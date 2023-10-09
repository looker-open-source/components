/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { CompatibleHTMLProps, BorderProps, TypographyProps } from '@looker/design-tokens';
export interface TableRowProps extends BorderProps, TypographyProps, CompatibleHTMLProps<HTMLTableRowElement> {
}
export declare const TableRow: import("styled-components").StyledComponent<"tr", import("styled-components").DefaultTheme, TableRowProps, never>;
