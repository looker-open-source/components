/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
export type { BoxProps as Box2Props } from '../Box';
/**
 * @deprecated use Box instead.
 */
export declare const Box2: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("packages/design-tokens/lib").CompatibleHTMLProps<HTMLElement> & import("styled-system").ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("..").SimpleLayoutProps & import("styled-system").BorderRadiusProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    border?: (string | boolean) | undefined;
    borderBottom?: (string | boolean) | undefined;
    borderLeft?: (string | boolean) | undefined;
    borderRight?: (string | boolean) | undefined;
    borderTop?: (string | boolean) | undefined;
    borderX?: (string | boolean) | undefined;
    borderY?: (string | boolean) | undefined;
} & import("packages/design-tokens/lib").TypographyProps & {
    color?: string | undefined;
} & import("styled-system").FlexboxProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("packages/design-tokens/lib").CursorProps & import("packages/design-tokens/lib").UserSelectProps, never>;
