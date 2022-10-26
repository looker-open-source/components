import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { DialogContent } from './DialogContent';
describe('DialogContent', () => {
  test('basic', () => {
    renderWithTheme(React.createElement(DialogContent, null, "Dialog Content"));
    expect(screen.getByText('Dialog Content')).toHaveStyleRule('padding-bottom', '1.25rem');
  });
  test('display correct padding if hasFooter', () => {
    renderWithTheme(React.createElement(DialogContent, {
      hasFooter: true
    }, "Stuff"));
    expect(screen.getByText('Stuff')).toHaveStyleRule('padding-bottom', '0.125rem');
  });
  test('display correct padding if hasHeader', () => {
    renderWithTheme(React.createElement(DialogContent, {
      hasHeader: true
    }, "Stuff"));
    expect(screen.getByText('Stuff')).toHaveStyleRule('padding-top', '0.125rem');
  });
  test('display correct padding if both  hasFooter & hasHeader', () => {
    renderWithTheme(React.createElement(DialogContent, {
      hasFooter: true,
      hasHeader: true
    }, "Stuff"));
    expect(screen.getByText('Stuff')).toHaveStyleRule('padding-bottom', '0.125rem');
    expect(screen.getByText('Stuff')).toHaveStyleRule('padding-top', '0.125rem');
  });
  test('Custom padding `p`', () => {
    renderWithTheme(React.createElement(DialogContent, {
      p: "u12"
    }, "Hello world"));
    const item = screen.getByText('Hello world');
    expect(item).toHaveStyleRule('padding-left', '3rem');
    expect(item).toHaveStyleRule('padding-right', '3rem');
    expect(item).toHaveStyleRule('padding-top', '3rem');
    expect(item).toHaveStyleRule('padding-bottom', '3rem');
  });
});
//# sourceMappingURL=DialogContent.spec.js.map