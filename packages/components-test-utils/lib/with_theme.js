import _extends from "@babel/runtime/helpers/extends";
import { ComponentsProvider } from '@looker/components-providers';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
export const withThemeProvider = (Component, providerProps) => React.createElement(ComponentsProvider, _extends({
  disableStyleDefender: true
}, providerProps), Component);
export const renderWithTheme = (Component, renderOptions, providerProps) => render(withThemeProvider(Component, providerProps), renderOptions);
//# sourceMappingURL=with_theme.js.map