import type { ReactNode } from 'react';
import type { Theme } from '@looker/design-tokens';
export interface ThemeProviderProps {
    theme?: Theme;
    children?: ReactNode;
}
export declare const ThemeProvider: ({ children, theme, }: ThemeProviderProps) => JSX.Element;
