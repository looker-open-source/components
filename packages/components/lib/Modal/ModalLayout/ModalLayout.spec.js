import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { ModalLayout, ModalLoading } from './ModalLayout';
describe('ModalLayout', () => {
  test('basic ', () => {
    renderWithTheme(React.createElement(ModalLayout, {
      header: "Header",
      footer: "Footer"
    }, "Modal Layout"));
    expect(screen.getByText(/Modal Layout/)).toBeInTheDocument();
  });
  test('renders Header', () => {
    renderWithTheme(React.createElement(ModalLayout, {
      footer: "Footer",
      header: "Header"
    }, "Modal Layout"));
    expect(screen.getByText(/Header/)).toBeInTheDocument();
    expect(screen.getByText(/Footer/)).toBeInTheDocument();
  });
  test('renders ModalLoading', () => {
    renderWithTheme(React.createElement(ModalLoading, null));
    expect(screen.getAllByTestId('loading-spinner')[0]).toBeInTheDocument();
  });
});
//# sourceMappingURL=ModalLayout.spec.js.map