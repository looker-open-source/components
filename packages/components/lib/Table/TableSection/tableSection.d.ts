import type { CompatibleHTMLProps, BorderProps, TypographyProps } from '@looker/design-tokens';
export interface TableSectionProps extends BorderProps, TypographyProps, CompatibleHTMLProps<HTMLTableSectionElement> {
}
export declare const tableSectionCSS: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<import("styled-system").BorderRadiusProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    border?: (string | boolean) | undefined;
    borderBottom?: (string | boolean) | undefined;
    borderLeft?: (string | boolean) | undefined;
    borderRight?: (string | boolean) | undefined;
    borderTop?: (string | boolean) | undefined;
    borderX?: (string | boolean) | undefined;
    borderY?: (string | boolean) | undefined;
}, import("styled-components").DefaultTheme>>;
export declare const tableSectionDefaults: TableSectionProps;
