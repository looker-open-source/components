import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { DataTableCheckbox } from './DataTableCheckbox';
describe('DataTableCheckbox', () => {
  test('Renders checked', () => {
    renderWithTheme(React.createElement(DataTableCheckbox, {
      checked: true
    }));
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });
  test('Renders unchecked', () => {
    renderWithTheme(React.createElement(DataTableCheckbox, null));
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });
  test('Renders disabled', () => {
    renderWithTheme(React.createElement(DataTableCheckbox, {
      disabled: true
    }));
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });
  test('Calls onChange callback', () => {
    const onChange = jest.fn();
    renderWithTheme(React.createElement(DataTableCheckbox, {
      onChange: onChange
    }));
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledTimes(1);
    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledTimes(2);
  });
  test('Renders aria-label when checked if id = headerId', () => {
    renderWithTheme(React.createElement(DataTableCheckbox, {
      id: "headerId",
      checked: true
    }));
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-label', 'Select none');
  });
  test('Renders aria-label when unchecked if id = headerId', () => {
    renderWithTheme(React.createElement(DataTableCheckbox, {
      id: "headerId"
    }));
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-label', 'Select all rows');
  });
  test('no aria-label if id != headerId', () => {
    renderWithTheme(React.createElement(DataTableCheckbox, {
      id: "idValue"
    }));
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toHaveAttribute('aria-label');
  });
  test('Renders aria-labelledby with primary column value passed as id', () => {
    const {
      container
    } = renderWithTheme(React.createElement(DataTableCheckbox, {
      id: "primaryColumn"
    }));
    expect(container.firstChild).toHaveAttribute('aria-labelledby', 'rowheader-primaryColumn');
  });
});
//# sourceMappingURL=DataTableCheckbox.spec.js.map