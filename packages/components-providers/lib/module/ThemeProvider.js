
import React from 'react';
import { theme as builtIn } from '@looker/design-tokens';
import { ThemeProvider as ActualThemeProvider } from 'styled-components';
export const ThemeProvider = ({
  children,
  theme: _theme = builtIn
}) => React.createElement(ActualThemeProvider, {
  theme: _theme
}, children);
//# sourceMappingURL=ThemeProvider.js.map