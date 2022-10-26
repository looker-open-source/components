import { renderWithTheme } from '@looker/components-test-utils';
import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { Chip } from './Chip';
describe('Chip', () => {
  test('default', () => {
    renderWithTheme(React.createElement(Chip, null, "chip"));
    expect(screen.getByText('chip')).toBeInTheDocument();
  });
  test('disabled', () => {
    renderWithTheme(React.createElement(Chip, {
      disabled: true
    }, "chip"));
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
  test('Chip accepts a prefix and renders it with correct style', () => {
    renderWithTheme(React.createElement(Chip, {
      prefix: "role"
    }, "admin"));
    expect(screen.getByText(/\brole\b/)).toHaveStyleRule('font-weight: 400');
  });
  test('onDelete works correctly', () => {
    const onDeleteTrigger = jest.fn();
    renderWithTheme(React.createElement(Chip, {
      onDelete: onDeleteTrigger,
      "data-testid": "chip"
    }, "clickable"));
    fireEvent.click(screen.getByRole('button'));
    expect(onDeleteTrigger).toHaveBeenCalledTimes(1);
    const chip = screen.getByTestId('chip');
    fireEvent.keyDown(chip, {
      key: 'Backspace'
    });
    expect(onDeleteTrigger).toHaveBeenCalledTimes(2);
  });
});
//# sourceMappingURL=Chip.spec.js.map