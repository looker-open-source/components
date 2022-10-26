import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { ModalHeader } from './ModalHeader';
describe('ModalHeader', () => {
  test('basic', () => {
    renderWithTheme(React.createElement(ModalHeader, null, "Heading"));
    expect(screen.getByText('Heading')).toBeInTheDocument();
  });
  test('has aria-label', async () => {
    renderWithTheme(React.createElement(ModalHeader, {
      "aria-label": "ARIA label"
    }, "Heading"));
    expect(await screen.findByLabelText('ARIA label')).toBeInTheDocument();
  });
  test(`detail as ReactNode`, () => {
    renderWithTheme(React.createElement(ModalHeader, {
      detail: React.createElement("button", null, "x")
    }, "Header"));
    expect(screen.getByText('x')).toBeInTheDocument();
  });
  test(`detail has marginY`, () => {
    var _screen$queryByText, _screen$queryByText2;

    renderWithTheme(React.createElement(ModalHeader, {
      detail: React.createElement("button", null, "x")
    }, "Header"));
    expect((_screen$queryByText = screen.queryByText('x')) === null || _screen$queryByText === void 0 ? void 0 : _screen$queryByText.closest('div')).toHaveStyle('margin-top: -0.5rem');
    expect((_screen$queryByText2 = screen.queryByText('x')) === null || _screen$queryByText2 === void 0 ? void 0 : _screen$queryByText2.closest('div')).toHaveStyle('margin-bottom: -0.5rem');
  });
});
//# sourceMappingURL=ModalHeader.spec.js.map