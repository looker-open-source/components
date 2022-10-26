import type { FC } from 'react';
import type { Theme } from '@looker/design-tokens';
export interface ThemeProviderProps {
    theme?: Theme;
}
export declare const ThemeProvider: FC<ThemeProviderProps>;
