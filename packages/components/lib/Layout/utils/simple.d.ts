import type { LayoutProps, SpaceProps, PositionProps } from '@looker/design-tokens';
export interface SimpleLayoutProps extends LayoutProps, PositionProps, SpaceProps {
}
/**
 * Used as a common styled-system helper simple layout
 * See also: `commonLayoutCSS` for more complex scenarios.
 */
export declare const simpleLayoutCSS: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
