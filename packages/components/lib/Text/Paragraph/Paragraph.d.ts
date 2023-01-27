/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { CompatibleHTMLProps, LayoutProps, TextTransformProps } from '@looker/design-tokens';
import type { TruncateCSSProps } from '../truncate';
import type { TextBaseProps } from '../Text/TextBase';
export interface ParagraphProps extends TextBaseProps, LayoutProps, TextTransformProps, TruncateCSSProps, Omit<CompatibleHTMLProps<HTMLParagraphElement>, 'wrap'> {
}
export declare const Paragraph: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, TextBaseProps & ParagraphProps, never>;
