import type { ColorProps, TypographyProps, SemanticBorderProps } from '@looker/design-tokens';
import type { SimpleLayoutProps } from './simple';
export declare type CommonLayoutProps = ColorProps & SimpleLayoutProps & SemanticBorderProps & TypographyProps & {
    /**
     * Workaround for Styled Components merge with DOM `color` prop merge issue
     */
    color?: string;
};
/**
 * Used as a common styled-system helper components. Builds on top of `simpleLayoutCSS`
 * to add border, color and typography properties.
 */
export declare const commonLayoutCSS: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<import("styled-system").BorderRadiusProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    border?: (string | boolean) | undefined;
    borderBottom?: (string | boolean) | undefined;
    borderLeft?: (string | boolean) | undefined;
    borderRight?: (string | boolean) | undefined;
    borderTop?: (string | boolean) | undefined;
    borderX?: (string | boolean) | undefined;
    borderY?: (string | boolean) | undefined;
}, import("styled-components").DefaultTheme>>;
