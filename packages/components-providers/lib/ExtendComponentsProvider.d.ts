import type { ThemeCustomizations } from '@looker/design-tokens';
import type { FC } from 'react';
export interface ExtendComponentsTheme {
    themeCustomizations?: ThemeCustomizations;
}
/**
 * This component is designed for making adjustments to the Theme without
 * initializing an entire ComponentsProvider. ExtendComponentsThemeProvider
 * will merge the themeCustomizations with the theme already established.
 *
 * This component is intended for use cases where a portion of page carries
 * a different theme than the rest.
 */
export declare const ExtendComponentsThemeProvider: FC<ExtendComponentsTheme>;
