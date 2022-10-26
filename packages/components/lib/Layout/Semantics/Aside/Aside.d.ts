import React from 'react';
import type { CompatibleHTMLProps, ResponsiveValue } from '@looker/design-tokens';
import type { CommonLayoutProps } from '../../utils/common';
import type { AsideSizeRamp } from './asideWidth';
export declare type AsideProps = CommonLayoutProps & CompatibleHTMLProps<HTMLElement> & {
    /**
     * Prevent `Aside` from being rendered.
     * @default false
     */
    collapse?: boolean;
    /**
     * To be used within the context of `<Page fixed>` container.
     * When true, this removes the inner overflow-y scrolling
     * and allows content within a Layout group to scroll together.
     * @default false
     */
    scrollWithin?: boolean;
    /**
     * Specify width of aside
     * @default sidebar
     */
    width?: ResponsiveValue<AsideSizeRamp | string>;
};
export declare const Aside: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<import("styled-system").ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("../..").SimpleLayoutProps & import("styled-system").BorderRadiusProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    border?: (string | boolean) | undefined;
    borderBottom?: (string | boolean) | undefined;
    borderLeft?: (string | boolean) | undefined;
    borderRight?: (string | boolean) | undefined;
    borderTop?: (string | boolean) | undefined;
    borderX?: (string | boolean) | undefined;
    borderY?: (string | boolean) | undefined;
} & import("@looker/design-tokens").TypographyProps & {
    color?: string | undefined;
} & CompatibleHTMLProps<HTMLElement> & {
    /**
     * Prevent `Aside` from being rendered.
     * @default false
     */
    collapse?: boolean | undefined;
    /**
     * To be used within the context of `<Page fixed>` container.
     * When true, this removes the inner overflow-y scrolling
     * and allows content within a Layout group to scroll together.
     * @default false
     */
    scrollWithin?: boolean | undefined;
    /**
     * Specify width of aside
     * @default sidebar
     */
    width?: ResponsiveValue<string | AsideSizeRamp, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
} & React.RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, import("styled-system").ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("../..").SimpleLayoutProps & import("styled-system").BorderRadiusProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    border?: (string | boolean) | undefined;
    borderBottom?: (string | boolean) | undefined;
    borderLeft?: (string | boolean) | undefined;
    borderRight?: (string | boolean) | undefined;
    borderTop?: (string | boolean) | undefined;
    borderX?: (string | boolean) | undefined;
    borderY?: (string | boolean) | undefined;
} & import("@looker/design-tokens").TypographyProps & {
    color?: string | undefined;
} & CompatibleHTMLProps<HTMLElement> & {
    /**
     * Prevent `Aside` from being rendered.
     * @default false
     */
    collapse?: boolean | undefined;
    /**
     * To be used within the context of `<Page fixed>` container.
     * When true, this removes the inner overflow-y scrolling
     * and allows content within a Layout group to scroll together.
     * @default false
     */
    scrollWithin?: boolean | undefined;
    /**
     * Specify width of aside
     * @default sidebar
     */
    width?: ResponsiveValue<string | AsideSizeRamp, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
}, never>;
