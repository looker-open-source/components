import type { CompatibleHTMLProps, LayoutProps, TextTransformProps } from '@looker/design-tokens';
import type { TruncateCSSProps } from '../Text/truncate';
import type { TextBaseProps } from './TextBase';
export interface ParagraphProps extends TextBaseProps, LayoutProps, TextTransformProps, TruncateCSSProps, Omit<CompatibleHTMLProps<HTMLParagraphElement>, 'wrap'> {
}
export declare const Paragraph: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, TextBaseProps & ParagraphProps, never>;
