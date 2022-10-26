import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { Basic, HideClose, Hidden } from './PopoverHeader.stories';
describe('PopoverHeader', () => {
  test('Close visible by default', () => {
    renderWithTheme(React.createElement(Basic, null));
    expect(screen.getByText('Header Text')).toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
  });
  test('hideClose', () => {
    renderWithTheme(React.createElement(HideClose, null));
    expect(screen.queryByLabelText('Close')).not.toBeInTheDocument();
  });
  test('hidden header', () => {
    renderWithTheme(React.createElement(Hidden, null));
    const hiddenHeader = screen.getByText('Header Text');
    expect(hiddenHeader).toBeInTheDocument();
    expect(hiddenHeader).toHaveStyle('clip: rect(1px, 1px, 1px, 1px)');
  });
});
//# sourceMappingURL=PopoverHeader.spec.js.map