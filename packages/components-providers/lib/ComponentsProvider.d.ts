import type { ReactNode } from 'react';
import type { UseI18nProps } from './I18n';
import type { ThemeProviderProps } from './ThemeProvider';
import type { ExtendComponentsTheme } from './ExtendComponentsProvider';
export interface ComponentsProviderProps extends ThemeProviderProps, ExtendComponentsTheme, UseI18nProps {
    /**
     * Load any font faces specified on theme.fontSources
     * @default true
     */
    loadFontSources?: boolean;
    /**
     * Load fonts from the Google Fonts CDN if not already available
     * @default false
     */
    loadGoogleFonts?: boolean;
    /**
     * Disables the "StyleDefender"
     *
     * StyledDefender is a utility component that attempts to ensure that a few common
     * styles are injected at any point where @looker/components are injected into the DOM.
     * When taking code-snapshots (a pattern we generally discourage) the `StyleDefender`
     * may be visible in output so we generally recommend disabling it for those use-cases.
     *
     * @default false
     */
    disableStyleDefender?: boolean;
    children?: ReactNode;
}
/**
 * ComponentsProvider registers fundamental infrastructure for @looker/components to
 * initialize its components. Most components assume that they will be wrapped in a
 * <ComponentsProvider> to be able to successfully initialize.
 *
 * It provides a variety of features including
 *   - ThemeProvider
 *   - ScrollLockProvider
 *
 * Optionally, in also includes
 *   - Internet Explorer 11 compatible styles
 *   - Global style registration
 *   - GoogleFont loading
 *
 */
export declare const ComponentsProvider: ({ children, loadFontSources, loadGoogleFonts, disableStyleDefender, dateLocale, locale, resources, themeCustomizations, ...props }: ComponentsProviderProps) => JSX.Element;
