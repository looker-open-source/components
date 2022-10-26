import type { BorderProps, BoxShadowProps, ColorProps, TypographyProps } from '@looker/design-tokens';
import type { SimpleLayoutProps } from './simple';
/**
 * @deprecated - use `CommonLayoutProps` instead.
 */
export declare type ComplexLayoutProps = BorderProps & BoxShadowProps & ColorProps & SimpleLayoutProps & TypographyProps & {
    /**
     * Workaround for Styled Components merge with DOM `color` prop merge issue
     */
    color?: string;
};
/**
 * Used as a common styled-system helper for `Box`& `Flex` & `FlexItem`
 *
 * Newer components leverage `commonLayoutCSS` which introduces an improved set of
 * properties for managing borders as well as excluding support for boxShadow.
 *
 * @TODO - Remove in 3.x series
 * @deprecated - use `commonLayoutCSS` instead.
 */
export declare const complexLayoutCSS: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<import("styled-system").BorderRadiusProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    border?: (string | boolean) | undefined;
    borderBottom?: (string | boolean) | undefined;
    borderLeft?: (string | boolean) | undefined;
    borderRight?: (string | boolean) | undefined;
    borderTop?: (string | boolean) | undefined;
    borderX?: (string | boolean) | undefined;
    borderY?: (string | boolean) | undefined;
}, import("styled-components").DefaultTheme>>;
