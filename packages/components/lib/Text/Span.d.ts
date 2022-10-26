import type { CompatibleHTMLProps, TextTransformProps } from '@looker/design-tokens';
import type { TextBaseProps } from './TextBase';
export interface SpanProps extends TextBaseProps, TextTransformProps, Omit<CompatibleHTMLProps<HTMLSpanElement>, 'wrap'> {
}
/**
 * Outputs a `span` HTML element with specified props.
 *
 * NOTE: Component will inherit all styling from the parent DOM element unless otherwise
 * specified. `line-height` will match the `font-size` if expliclity specified.
 */
export declare const Span: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, TextBaseProps & SpanProps, never>;
