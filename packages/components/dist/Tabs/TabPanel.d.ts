/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ReactNode } from 'react';
export interface TabPanelProps {
    className?: string;
    selected?: boolean;
    /**
     * Set to `true` if you would like TabPanel to be reached via tab-key.
     * Generally this is _only_ the case when the TabPanel contains no tab-stopping items (a, button, etc.)
     * @default false
     */
    isTabStop?: boolean;
    children?: ReactNode;
}
/**
 * @deprecated Use `Tabs2` & `Tab2` instead
 */
export declare const TabPanel: import("styled-components").StyledComponent<({ children, className, selected, isTabStop, }: TabPanelProps) => JSX.Element | null, import("styled-components").DefaultTheme, {}, never>;
