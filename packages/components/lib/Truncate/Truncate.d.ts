import type { FC } from 'react';
import type { TextColorProps, TypographyProps, WidthProps } from '@looker/design-tokens';
export declare type TruncateProps = TextColorProps & TypographyProps & WidthProps & {
    className?: string;
    /**
     * Specifying `description` will cause truncation tooltip to _always_ be presented
     * Text specified in `description` property will be displayed below `children` supplied
     */
    description?: string;
};
export declare type TruncateConfigProp = undefined | boolean | {
    description: TruncateProps['description'];
};
/**
 * If `truncate` is truthy will output a `Truncate` component.
 * If `truncate` is falsy returns a `Span`
 */
export declare const TruncateOptionally: FC<TruncateProps & {
    truncate?: TruncateConfigProp;
}>;
/**
 * @a11y-TODO we should support :focus-visible emulation here if focus can be drawn by an anchor/link within
 * the truncate children.
 **/
export declare const Truncate: import("styled-components").StyledComponent<FC<TruncateProps>, import("styled-components").DefaultTheme, {
    width: import("styled-system").ResponsiveValue<import("csstype").Property.Width<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
}, "width">;
