import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { FieldTimeSelect } from './FieldTimeSelect';
describe('FieldTimeSelect', () => {
  test('should associate label and input field', () => {
    renderWithTheme(React.createElement(FieldTimeSelect, {
      label: "Field Time Label",
      id: "field-time-select",
      interval: 10
    }));
    expect(screen.getByLabelText('Field Time Label').tagName).toEqual('INPUT');
  });
  test('should accept required attributes', () => {
    renderWithTheme(React.createElement(FieldTimeSelect, {
      label: "Label",
      id: "field-time-select",
      interval: 10,
      required: true
    }));
    expect(screen.getByText('required')).toBeVisible();
  });
  test('should display error message', () => {
    const errorMessage = 'This is an error';
    renderWithTheme(React.createElement(FieldTimeSelect, {
      id: "field-time-select",
      interval: 10,
      label: "Label",
      validationMessage: {
        message: errorMessage,
        type: 'error'
      }
    }));
    expect(screen.getByText('This is an error')).toBeVisible();
  });
  test('should trigger onChange handler', () => {
    const onChange = jest.fn();
    renderWithTheme(React.createElement(FieldTimeSelect, {
      label: "Label",
      id: "field-time-select",
      interval: 10,
      onChange: onChange
    }));
    fireEvent.click(screen.getByLabelText('Label'));
    fireEvent.change(screen.getByLabelText('Label'), {
      target: {
        value: '2pm'
      }
    });
    fireEvent.keyDown(screen.getByLabelText('Label'), {
      key: 'Enter'
    });
    expect(onChange).toHaveBeenCalledTimes(1);
    fireEvent.click(document);
  });
  test('should display error message for invalid time input', () => {
    renderWithTheme(React.createElement(FieldTimeSelect, {
      label: "Label",
      id: "field-time-select",
      interval: 10
    }));
    fireEvent.click(screen.getByLabelText('Label'));
    fireEvent.change(screen.getByLabelText('Label'), {
      target: {
        value: 'invalid time'
      }
    });
    fireEvent.keyDown(screen.getByLabelText('Label'), {
      key: 'Enter'
    });
    expect(screen.getAllByText('Please use format HH:MM')[0]).toBeInTheDocument();
    fireEvent.click(document);
  });
  test('should reset any format errors on blur', () => {
    renderWithTheme(React.createElement(FieldTimeSelect, {
      label: "Label",
      id: "field-time-select",
      interval: 10
    }));
    fireEvent.click(screen.getByLabelText('Label'));
    fireEvent.change(screen.getByLabelText('Label'), {
      target: {
        value: 'invalid time'
      }
    });
    fireEvent.keyDown(screen.getByLabelText('Label'), {
      key: 'Enter'
    });
    expect(screen.getAllByText('Please use format HH:MM')[0]).toBeInTheDocument();
    fireEvent.click(document);
    fireEvent.blur(screen.getByLabelText('Label'));
    const errorMessage = screen.queryByText('Please use format HH:MM');
    expect(errorMessage).not.toBeInTheDocument();
  });
});
//# sourceMappingURL=FieldTimeSelect.spec.js.map