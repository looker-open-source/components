import type { CompatibleHTMLProps, CursorProps, FlexboxProps, UserSelectProps } from '@looker/design-tokens';
import type { CommonLayoutProps } from '../utils/common';
export declare type BoxProps = CompatibleHTMLProps<HTMLElement> & CommonLayoutProps & FlexboxProps & CursorProps & UserSelectProps;
export declare const Box: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, CompatibleHTMLProps<HTMLElement> & import("styled-system").ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("..").SimpleLayoutProps & import("styled-system").BorderRadiusProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    border?: (string | boolean) | undefined;
    borderBottom?: (string | boolean) | undefined;
    borderLeft?: (string | boolean) | undefined;
    borderRight?: (string | boolean) | undefined;
    borderTop?: (string | boolean) | undefined;
    borderX?: (string | boolean) | undefined;
    borderY?: (string | boolean) | undefined;
} & import("@looker/design-tokens").TypographyProps & {
    color?: string | undefined;
} & FlexboxProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & CursorProps & UserSelectProps, never>;
