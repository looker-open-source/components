/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { FlexboxProps, LayoutProps, SpaceProps } from '@looker/design-tokens';
export declare type TabPanels2Props = FlexboxProps & LayoutProps & SpaceProps & {
    children: JSX.Element;
    className?: string;
    id: string;
};
export declare const TabPanels2: import("styled-components").StyledComponent<({ children, className, id }: TabPanels2Props) => JSX.Element, import("styled-components").DefaultTheme, {
    height: import("styled-system").ResponsiveValue<import("csstype").Property.Height<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
    pt: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
}, "height" | "pt">;
