import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { ModalHeaderCloseButton } from './ModalHeaderCloseButton';
describe('ModalHeaderCloseButton', () => {
  test('render ', () => {
    renderWithTheme(React.createElement(ModalHeaderCloseButton, null));
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
  });
});
//# sourceMappingURL=modal.spec.js.map