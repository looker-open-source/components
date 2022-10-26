import type { CompatibleHTMLProps, SpaceProps, TypographyProps } from '@looker/design-tokens';
export interface LegendProps extends SpaceProps, TypographyProps, CompatibleHTMLProps<HTMLLegendElement> {
}
export declare const Legend: import("styled-components").StyledComponent<"legend", import("styled-components").DefaultTheme, LegendProps, never>;
/**
 * `border: none;` override is a product-targeted fix
 * @TODO - Remove targeted fix when mitigated downstream
 **/
