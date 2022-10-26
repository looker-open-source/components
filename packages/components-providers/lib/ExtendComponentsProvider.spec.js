let _ = t => t,
    _t;

import React from 'react';
import { screen } from '@testing-library/react';
import styled from 'styled-components';
import { renderWithTheme } from '../../components-test-utils/src';
import { ComponentsProvider } from './ComponentsProvider';
import { ExtendComponentsThemeProvider } from './ExtendComponentsProvider';
const FauxParagraph = styled.p.withConfig({
  displayName: "ExtendComponentsProviderspec__FauxParagraph",
  componentId: "sc-9zi5rw-0"
})(_t || (_t = _`
  background: ${0};
  color: ${0};
`), ({
  theme
}) => theme.colors.background, ({
  theme
}) => theme.colors.key);
describe('ExtendComponentsProvider', () => {
  test('Extends existing theme', () => {
    const Test = () => {
      return React.createElement(ComponentsProvider, {
        themeCustomizations: {
          colors: {
            background: 'black',
            key: 'purple'
          }
        }
      }, React.createElement(FauxParagraph, null, "Standard"), React.createElement(ExtendComponentsThemeProvider, {
        themeCustomizations: {
          colors: {
            key: 'red'
          }
        }
      }, React.createElement(FauxParagraph, null, "Extended")));
    };

    renderWithTheme(React.createElement(Test, null));
    expect(screen.getByText('Standard')).toHaveStyle('color: purple');
    expect(screen.getByText('Standard')).toHaveStyle('background: black');
    expect(screen.getByText('Extended')).toHaveStyle('color: red');
    expect(screen.getByText('Extended')).toHaveStyle('background: black');
  });
});
//# sourceMappingURL=ExtendComponentsProvider.spec.js.map