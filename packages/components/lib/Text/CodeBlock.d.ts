import type { BorderProps } from '@looker/design-tokens';
import type { FC, ReactNode } from 'react';
import type { TextBaseProps } from './TextBase';
export interface CodeBlockProps extends TextBaseProps, BorderProps {
    className?: string;
    children?: ReactNode;
}
export declare const CodeBlock: import("styled-components").StyledComponent<FC<CodeBlockProps>, import("styled-components").DefaultTheme, {
    border: string | boolean;
    fontSize: import("styled-system").ResponsiveValue<import("@looker/design-tokens").FontSizes, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
    p: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
}, "fontSize" | "border" | "p">;
