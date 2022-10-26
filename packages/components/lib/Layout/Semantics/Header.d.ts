import type { CommonLayoutProps } from '../utils/common';
export declare type HeaderProps = CommonLayoutProps;
export declare const headerFooterCSS: import("styled-components").FlattenSimpleInterpolation;
export declare const Header: import("styled-components").StyledComponent<"header", import("styled-components").DefaultTheme, import("styled-system").ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("..").SimpleLayoutProps & import("styled-system").BorderRadiusProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    border?: (string | boolean) | undefined;
    borderBottom?: (string | boolean) | undefined;
    borderLeft?: (string | boolean) | undefined;
    borderRight?: (string | boolean) | undefined;
    borderTop?: (string | boolean) | undefined;
    borderX?: (string | boolean) | undefined;
    borderY?: (string | boolean) | undefined;
} & import("@looker/design-tokens").TypographyProps & {
    color?: string | undefined;
}, never>;
