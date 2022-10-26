import type { CompatibleHTMLProps } from '@looker/design-tokens';
import React from 'react';
import type { CommonLayoutProps } from '../../utils/common';
export declare type SectionProps = CommonLayoutProps & CompatibleHTMLProps<HTMLElement> & {
    /**
     * When true the DOM element transition from section to main.
     * @default false
     */
    main?: boolean;
    /**
     * To be used within the context of <Page fixed> container.
     * When true, this removes the inner overflow-y scrolling
     * and allows content within a Layout group to scroll together.
     * @default false
     */
    scrollWithin?: boolean;
};
export declare const Section: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<import("styled-system").ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("../..").SimpleLayoutProps & import("styled-system").BorderRadiusProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
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
     * When true the DOM element transition from section to main.
     * @default false
     */
    main?: boolean | undefined;
    /**
     * To be used within the context of <Page fixed> container.
     * When true, this removes the inner overflow-y scrolling
     * and allows content within a Layout group to scroll together.
     * @default false
     */
    scrollWithin?: boolean | undefined;
} & React.RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, {}, never>;
