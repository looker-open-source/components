/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { ComponentsProvider } from '@looker/components-providers';
import type { ComponentsProviderProps } from '@looker/components-providers';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import type { ReactElement } from 'react';
import React from 'react';

export const withThemeProvider = (
  Component: ReactElement,
  providerProps?: ComponentsProviderProps
) => (
  <ComponentsProvider disableStyleDefender {...providerProps}>
    {Component}
  </ComponentsProvider>
);

/**
 * Renders a component inside a ComponentsProvider, includes theme and i18n contexts
 * @param Component the component to render
 * @param renderOptions the options to pass to RTL's render function
 * @param providerProps the props to pass to ComponentsProvider
 * @returns
 */
export const renderWithTheme = (
  Component: ReactElement,
  renderOptions?: Omit<RenderOptions, 'queries'>,
  providerProps?: ComponentsProviderProps
) => {
  const { rerender, ...result } = render(
    withThemeProvider(Component, providerProps),
    renderOptions
  );
  return {
    ...result,
    rerender: (
      Component: ReactElement,
      renderOptions?: Omit<RenderOptions, 'queries'>
    ) => {
      return rerender(withThemeProvider(Component, providerProps));
    },
  };
};
