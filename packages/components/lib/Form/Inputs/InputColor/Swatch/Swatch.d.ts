import type { CompatibleHTMLProps, SizeProps, SpaceProps } from '@looker/design-tokens';
export interface SwatchProps extends SizeProps, SpaceProps, CompatibleHTMLProps<HTMLDivElement> {
    /**
     * The background color to display on the swatch.
     */
    color?: string;
}
export declare const Swatch: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, SwatchProps, never>;
