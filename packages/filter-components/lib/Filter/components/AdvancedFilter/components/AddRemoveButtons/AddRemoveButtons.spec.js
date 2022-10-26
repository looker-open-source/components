import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { AddRemoveButtons } from './AddRemoveButtons';
describe('AddRemoveButtons', () => {
  const mockOnAdd = jest.fn();
  const mockOnRemove = jest.fn();
  beforeEach(() => {
    mockOnAdd.mockReset();
    mockOnRemove.mockReset();
  });
  it('should render an add button when showAdd is true', () => {
    renderWithTheme(React.createElement(AddRemoveButtons, {
      onAdd: mockOnAdd,
      onRemove: mockOnRemove,
      showAdd: true,
      showRemove: false
    }));
    const addButton = screen.getByText('Add');
    expect(addButton).toBeVisible();
  });
  it('should render a remove button when showRemove is true', () => {
    renderWithTheme(React.createElement(AddRemoveButtons, {
      onAdd: mockOnAdd,
      onRemove: mockOnRemove,
      showAdd: false,
      showRemove: true
    }));
    const removeButton = screen.getByText('Remove');
    expect(removeButton).toBeVisible();
  });
  it('should call the onAdd handler when the add button is clicked', () => {
    renderWithTheme(React.createElement(AddRemoveButtons, {
      onAdd: mockOnAdd,
      onRemove: mockOnRemove,
      showAdd: true,
      showRemove: true
    }));
    const addButton = screen.getByText('Add');
    fireEvent.click(addButton);
    expect(mockOnAdd).toHaveBeenCalled();
  });
  it('should call the onRemove handler when the remove button is clicked', () => {
    renderWithTheme(React.createElement(AddRemoveButtons, {
      onAdd: mockOnAdd,
      onRemove: mockOnRemove,
      showAdd: true,
      showRemove: true
    }));
    const removeButton = screen.getByText('Remove');
    fireEvent.click(removeButton);
    expect(mockOnRemove).toHaveBeenCalled();
  });
});
//# sourceMappingURL=AddRemoveButtons.spec.js.map