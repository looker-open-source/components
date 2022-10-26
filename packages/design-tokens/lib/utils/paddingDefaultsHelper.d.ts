import type { PaddingProps } from '../system';
/**
 * This function should repeat values specified in "defaults"  from the least
 * specific (p, px, py) to the most (pr, pr, pl, pb) without overriding any
 * explicit values specified in "props"
 *
 * Test scenarios:
 * ({ p: 'small' }, { p: 'medium' }) => { p: 'small' }
 * ({ pl: 'small' }, { p: 'medium' }) => { pl: 'small', pr: 'medium', py: 'medium'}
 * ({ pl: 'small' }, { px: 'medium' }) => { pl: 'small', pr: 'medium' }
 * ({ py: 'small' }, { p: 'medium' }) => { py: 'small', px: 'medium'}
 */
export declare const paddingDefaultsHelper: (props: PaddingProps, defaults: PaddingProps) => {
    readonly pb: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    readonly pl: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    readonly pr: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    readonly pt: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    readonly px: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    readonly py: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
} | {
    p: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
};
