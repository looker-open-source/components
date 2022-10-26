import type { SpaceProps, TextDecorationProps, TypographyProps } from '@looker/design-tokens';
export interface TextBaseProps extends SpaceProps, TextDecorationProps, TypographyProps {
    color?: string;
    /**
     * Should browser insert line breaks within words to prevent text from overflowing its content box
     * @default: false
     */
    breakword?: boolean;
}
export declare const TextBase: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, TextBaseProps, never>;
