import type { ComponentsProviderProps } from '@looker/components-providers';
import type { RenderOptions } from '@testing-library/react';
import 'jest-styled-components';
import type { ReactElement } from 'react';
export declare const withThemeProvider: (Component: ReactElement, providerProps?: ComponentsProviderProps | undefined) => JSX.Element;
/**
 * Renders a component inside a ComponentsProvider, includes theme and i18n contexts
 * @param Component the component to render
 * @param renderOptions the options to pass to RTL's render function
 * @param providerProps the props to pass to ComponentsProvider
 * @returns
 */
export declare const renderWithTheme: (Component: ReactElement, renderOptions?: Omit<RenderOptions<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>, "queries"> | undefined, providerProps?: ComponentsProviderProps | undefined) => import("@testing-library/react").RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
