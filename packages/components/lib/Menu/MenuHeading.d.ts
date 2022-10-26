import type { FC, ReactNode } from 'react';
import type { TextColorProps, TypographyProps, PaddingProps } from '@looker/design-tokens';
interface MenuHeadingProps extends TextColorProps, TypographyProps, PaddingProps {
    children: ReactNode;
    className?: string;
}
export declare const MenuHeading: import("styled-components").StyledComponent<FC<MenuHeadingProps>, import("styled-components").DefaultTheme, {}, never>;
export {};
