import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { Basic, Detail, HideClose } from './DialogHeader.stories';
import { DialogHeader } from './DialogHeader';
describe('DialogHeader', () => {
  test('basic', () => {
    renderWithTheme(React.createElement(Basic, null));
    expect(screen.getByText('Heading')).toBeInTheDocument();
  });
  test('Close visible by default', () => {
    renderWithTheme(React.createElement(Basic, null));
    expect(screen.getByText('Close')).toBeInTheDocument();
  });
  test('Detail text visible', () => {
    renderWithTheme(React.createElement(Detail, null));
    expect(screen.getByText('Detail text')).toBeInTheDocument();
  });
  test('hideClose', () => {
    renderWithTheme(React.createElement(HideClose, null));
    expect(screen.queryByText('Close')).not.toBeInTheDocument();
  });
  test('aria-label', () => {
    renderWithTheme(React.createElement(DialogHeader, {
      "aria-label": "label test"
    }, "Hello World"));
    expect(screen.getByLabelText('label test')).toBeInTheDocument();
  });
  test('detail = null, no close option', () => {
    renderWithTheme(React.createElement(DialogHeader, {
      detail: null
    }, "Hello World"));
    expect(screen.queryByText('Close')).not.toBeInTheDocument();
  });
});
//# sourceMappingURL=DialogHeader.spec.js.map