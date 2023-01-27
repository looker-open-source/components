let _ = t => t,
  _t;

import React from 'react';
import { screen } from '@testing-library/react';
import styled from 'styled-components';
import { renderWithTheme } from '../../components-test-utils/src';
import { ThemeProvider } from './ThemeProvider';
const FauxParagraph = styled.p.withConfig({
  displayName: "ThemeProviderspec__FauxParagraph",
  componentId: "sc-1hetuu-0"
})(_t || (_t = _`
  color: ${0};
`), ({
  theme
}) => theme.colors.key);
describe('ThemeProvider', () => {
  test('builtIn default works', () => {
    const Test = () => {
      return React.createElement(ThemeProvider, null, React.createElement(FauxParagraph, null, "Standard"));
    };
    renderWithTheme(React.createElement(Test, null));
    expect(screen.getByText('Standard')).toHaveStyle('color: rgb(108, 67, 224)');
  });
});
//# sourceMappingURL=ThemeProvider.spec.js.map