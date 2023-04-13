/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { BorderProps } from '@looker/design-tokens';
import type { ReactNode } from 'react';
import type { TextBaseProps } from '../Text/TextBase';
export interface CodeBlockProps extends TextBaseProps, BorderProps {
    className?: string;
    children?: ReactNode;
}
export declare const CodeBlock: import("styled-components").StyledComponent<({ children, className, ...props }: CodeBlockProps) => JSX.Element, import("styled-components").DefaultTheme, {
    border: string | boolean;
    fontSize: import("styled-system").ResponsiveValue<import("@looker/design-tokens").FontSizes, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
    p: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
}, "p" | "border" | "fontSize">;
