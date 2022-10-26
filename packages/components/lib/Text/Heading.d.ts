import type { CompatibleHTMLProps, TextTransformProps } from '@looker/design-tokens';
import type { TextBaseProps } from './TextBase';
import type { TruncateCSSProps } from './truncate';
declare type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface HeadingProps extends TextBaseProps, TextTransformProps, TruncateCSSProps, Omit<CompatibleHTMLProps<HTMLHeadingElement>, 'wrap'> {
    /** Heading level from h1-h6
     * @default: 'h2'
     */
    as?: HeadingLevels;
}
export declare const Heading: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, TextBaseProps & HeadingProps, never>;
export {};
