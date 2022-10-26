import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { ModalFooter } from '../ModalFooter/ModalFooter';
describe('ModalFooter', () => {
  test('basic', () => {
    renderWithTheme(React.createElement(ModalFooter, null, React.createElement("button", null, "Cancel")));
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  test('has correct flex style', () => {
    var _screen$getByRole;

    renderWithTheme(React.createElement(ModalFooter, null, React.createElement("button", null, "Cancel")));
    expect((_screen$getByRole = screen.getByRole('button')) === null || _screen$getByRole === void 0 ? void 0 : _screen$getByRole.closest('footer')).toHaveStyle('flex-direction: row-reverse');
  });
  test('secondary', () => {
    renderWithTheme(React.createElement(ModalFooter, {
      secondary: React.createElement("button", null, "Done")
    }, React.createElement("button", null, "Cancel")));
    expect(screen.getByText('Done')).toBeInTheDocument();
  });
});
//# sourceMappingURL=ModalFooter.spec.js.map