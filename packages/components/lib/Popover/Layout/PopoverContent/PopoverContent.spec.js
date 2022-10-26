import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { Basic } from './PopoverContent.stories';
import { PopoverContent } from './PopoverContent';
describe('PopoverContent', () => {
  test('Basic', () => {
    renderWithTheme(React.createElement(Basic, null));
    const content = screen.getByText(/We the People of the United States, /);
    expect(content).toBeInTheDocument();
  });
  test('Custom padding', () => {
    renderWithTheme(React.createElement(PopoverContent, {
      pb: "u3",
      pt: "u8",
      px: "u3"
    }, "Hello world"));
    const item = screen.getByText('Hello world');
    expect(item).toHaveStyleRule('padding-left', '0.75rem');
    expect(item).toHaveStyleRule('padding-right', '0.75rem');
    expect(item).toHaveStyleRule('padding-top', '2rem');
    expect(item).toHaveStyleRule('padding-bottom', '0.75rem');
  });
  test('Custom padding `p`', () => {
    renderWithTheme(React.createElement(PopoverContent, {
      p: "u12"
    }, "Hello world"));
    const item = screen.getByText('Hello world');
    expect(item).toHaveStyleRule('padding-left', '3rem');
    expect(item).toHaveStyleRule('padding-right', '3rem');
    expect(item).toHaveStyleRule('padding-top', '3rem');
    expect(item).toHaveStyleRule('padding-bottom', '3rem');
  });
});
//# sourceMappingURL=PopoverContent.spec.js.map