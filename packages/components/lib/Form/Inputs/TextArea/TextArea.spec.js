import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { TextArea } from './TextArea';
describe('TextArea', () => {
  test('with placeholder', () => {
    renderWithTheme(React.createElement(TextArea, {
      placeholder: "this is a placeholder"
    }));
    expect(screen.getByPlaceholderText('this is a placeholder')).toBeInTheDocument();
  });
  test('should accept disabled', () => {
    renderWithTheme(React.createElement(TextArea, {
      disabled: true
    }));
    expect(screen.getByRole('textbox')).toBeDisabled();
  });
  test('with an error validation', () => {
    renderWithTheme(React.createElement(TextArea, {
      validationType: "error"
    }));
    expect(screen.getByRole('textbox')).toBeInvalid();
  });
  test('TextArea resizes with prop resize = true', () => {
    renderWithTheme(React.createElement(TextArea, {
      resize: true
    }));
    expect(screen.getByRole('textbox')).toHaveStyle('resize: vertical');
  });
  test('TextArea resizes with prop resize = false', () => {
    renderWithTheme(React.createElement(TextArea, {
      resize: false
    }));
    expect(screen.getByRole('textbox')).toHaveStyle('resize: none');
  });
  test('TextArea resizes with prop resize = none', () => {
    renderWithTheme(React.createElement(TextArea, {
      resize: "none"
    }));
    expect(screen.getByRole('textbox')).toHaveStyle('resize: none');
  });
  test('TextArea resizes with prop resize = vertical', () => {
    renderWithTheme(React.createElement(TextArea, {
      resize: "vertical"
    }));
    expect(screen.getByRole('textbox')).toHaveStyle('resize: vertical');
  });
});
//# sourceMappingURL=TextArea.spec.js.map