import type { SpanProps } from './Span';
export interface TextProps extends SpanProps {
}
/**
 * Outputs a `span` HTML element with specified props.
 *
 * NOTE: This component has a historic "quirk" where the `font-size` defaults to medium rather
 * than simply inheriting it's size from the parent DOM element (what one might expect of a
 * "normal" inline element.  `line-height` will match the `font-size` (`medium` unless  otherwise specified) as well.
 *
 * @deprecated - Use `Span` component instead for a more predictable behavior
 */
export declare const Text: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, import("./TextBase").TextBaseProps & SpanProps & TextProps, never>;
