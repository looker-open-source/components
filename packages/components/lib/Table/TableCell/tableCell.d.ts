import type { CompatibleHTMLProps, BorderProps, ColorProps, LayoutProps, TypographyProps, SpaceProps } from '@looker/design-tokens';
export interface TableCellProps extends BorderProps, ColorProps, LayoutProps, SpaceProps, TypographyProps, CompatibleHTMLProps<HTMLTableCellElement> {
}
export declare const tableCellCSS: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<import("styled-system").BorderRadiusProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    border?: (string | boolean) | undefined;
    borderBottom?: (string | boolean) | undefined;
    borderLeft?: (string | boolean) | undefined;
    borderRight?: (string | boolean) | undefined;
    borderTop?: (string | boolean) | undefined;
    borderX?: (string | boolean) | undefined;
    borderY?: (string | boolean) | undefined;
}, import("styled-components").DefaultTheme>>;
