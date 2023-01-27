/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ThemeCustomizations } from '@looker/design-tokens';
import type { ReactNode } from 'react';
export interface ExtendComponentsTheme {
    themeCustomizations?: ThemeCustomizations;
    children?: ReactNode;
}
/**
 * This component is designed for making adjustments to the Theme without
 * initializing an entire ComponentsProvider. ExtendComponentsThemeProvider
 * will merge the themeCustomizations with the theme already established.
 *
 * This component is intended for use cases where a portion of page carries
 * a different theme than the rest.
 */
export declare const ExtendComponentsThemeProvider: ({ children, themeCustomizations, }: ExtendComponentsTheme) => JSX.Element;
