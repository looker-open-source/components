/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { FlexboxProps, LayoutProps, SpaceProps } from '@looker/design-tokens';
export interface TabPanelsProps extends FlexboxProps, LayoutProps, SpaceProps {
    children: JSX.Element | JSX.Element[];
    className?: string;
    selectedIndex?: number;
    onSelectTab?: (index: number) => void;
}
/**
 * @deprecated Use `Tabs2` and `Tab2` instead
 */
export declare const TabPanels: import("styled-components").StyledComponent<({ children, className, selectedIndex, ...props }: TabPanelsProps) => JSX.Element, import("styled-components").DefaultTheme, {
    pt: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
}, "pt">;
