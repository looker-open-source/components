

import { generateTheme } from '@looker/design-tokens';
import { ThemeProvider, useTheme } from 'styled-components';
import React, { useMemo } from 'react';
export const ExtendComponentsThemeProvider = ({
  children,
  themeCustomizations
}) => {
  const parentTheme = useTheme();
  const theme = useMemo(() => {
    return generateTheme(parentTheme, themeCustomizations);
  }, [parentTheme, themeCustomizations]);
  return React.createElement(ThemeProvider, {
    theme: theme
  }, children);
};
//# sourceMappingURL=ExtendComponentsProvider.js.map