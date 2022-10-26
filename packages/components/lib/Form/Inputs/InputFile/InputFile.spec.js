import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { InputFile } from '.';
test('displays input text and button', () => {
  renderWithTheme(React.createElement(InputFile, {
    handleFile: jest.fn()
  }));
  expect(screen.getByText('Upload File')).toBeVisible();
});
test('button text prop changes button text', () => {
  renderWithTheme(React.createElement(InputFile, {
    handleFile: jest.fn(),
    buttonText: "ButtonTest"
  }));
  expect(screen.getByText('ButtonTest')).toBeVisible();
});
test('should allow user to choose a file and calls handleFile on selection', async () => {
  const handleFileMock = jest.fn();
  renderWithTheme(React.createElement(InputFile, {
    handleFile: handleFileMock
  }));
  const file = new File(['testing'], 'testing.json', {
    type: 'application/JSON'
  });
  const input = screen.getByTestId('input-file');
  fireEvent.change(input, {
    target: {
      files: [file]
    }
  });
  expect(handleFileMock).toBeCalledTimes(1);
  expect(handleFileMock).toHaveBeenCalledWith(file);
});
test('should show file name in textbox once file uploads', async () => {
  renderWithTheme(React.createElement(InputFile, {
    handleFile: jest.fn()
  }));
  const file = new File(['testing'], 'testing.json', {
    type: 'application/JSON'
  });
  const input = screen.getByTestId('input-file');
  const text = screen.getByRole('textbox');
  fireEvent.change(input, {
    target: {
      files: [file]
    }
  });
  expect(text).toHaveValue('testing.json');
});
//# sourceMappingURL=InputFile.spec.js.map