import _extends from "@babel/runtime/helpers/extends";
import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';
import React, { useState } from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { theme } from '@looker/design-tokens';
import { Button } from '../../Button';
import { Prompt } from './Prompt';
const onSaveCallback = jest.fn();
const requiredProps = {
  inputLabel: 'Foo',
  onSave: (_, close) => {
    close();
    onSaveCallback();
  },
  title: 'Bar'
};
const optionalProps = {
  cancelColor: 'critical',
  cancelLabel: 'Cancel Cheese',
  defaultValue: 'Default Value Cheese',
  onCancel: jest.fn(),
  saveLabel: 'Save Cheese',
  secondary: React.createElement("div", null, "Secondary Cheese")
};
afterEach(() => {
  onSaveCallback.mockClear();
});
test('<Prompt/> with defaults', async () => {
  renderWithTheme(React.createElement(Prompt, requiredProps, open => React.createElement(Button, {
    onClick: open
  }, "Open Prompt")));
  const opener = screen.getByText('Open Prompt');
  fireEvent.click(opener);
  const saveButton = screen.getByText('Save');
  const input = screen.getByPlaceholderText(requiredProps.inputLabel);
  expect(input).toBeVisible();
  expect(screen.getByText(requiredProps.title)).toBeVisible();
  expect(saveButton).toHaveStyleRule(`background: ${theme.colors.key}`);
  fireEvent.click(saveButton);
  expect(onSaveCallback).toHaveBeenCalledTimes(0);
  fireEvent.change(input, {
    target: {
      value: 'Has Text In It'
    }
  });
  fireEvent.click(saveButton);
  expect(onSaveCallback).toHaveBeenCalledTimes(1);
  await waitForElementToBeRemoved(() => screen.queryByText(requiredProps.inputLabel));
  expect(screen.queryByText(requiredProps.inputLabel)).not.toBeInTheDocument();
  expect(screen.queryByText(requiredProps.title)).not.toBeInTheDocument();
});
test('<Prompt/> with custom props', () => {
  renderWithTheme(React.createElement(Prompt, _extends({}, optionalProps, requiredProps), open => React.createElement(Button, {
    onClick: open
  }, "Open Prompt")));
  const opener = screen.getByText('Open Prompt');
  fireEvent.click(opener);
  const saveButton = screen.getByText(optionalProps.saveLabel);
  const cancelButton = screen.getByText(optionalProps.cancelLabel);
  expect(cancelButton).toBeInTheDocument();
  expect(cancelButton).toHaveStyleRule(`color: ${theme.colors.critical}`);
  expect(saveButton).toBeInTheDocument();
  expect(saveButton).toHaveStyleRule(`background: ${theme.colors.key}`);
  expect(screen.getByDisplayValue(optionalProps.defaultValue)).toBeInTheDocument();
  expect(screen.getByText('Secondary Cheese')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Cancel Cheese'));
  expect(optionalProps.onCancel).toHaveBeenCalledTimes(1);
  expect(onSaveCallback).toHaveBeenCalledTimes(0);
});
test('<Prompt /> does not clear value after closing', () => {
  renderWithTheme(React.createElement(Prompt, requiredProps, open => React.createElement(Button, {
    onClick: open
  }, "Open Prompt")));
  const opener = screen.getByText('Open Prompt');
  fireEvent.click(opener);
  const cancelButton = screen.getByText('Cancel');
  let input = screen.getByPlaceholderText(requiredProps.inputLabel);
  fireEvent.change(input, {
    target: {
      value: 'Hello World'
    }
  });
  expect(input).toHaveValue('Hello World');
  fireEvent.click(cancelButton);
  fireEvent.click(opener);
  input = screen.getByPlaceholderText(requiredProps.inputLabel);
  expect(input).toHaveValue('Hello World');
});
test('<Prompt /> clears value after closing with clearOnCancel', () => {
  renderWithTheme(React.createElement(Prompt, _extends({
    clearOnCancel: true
  }, requiredProps), open => React.createElement(Button, {
    onClick: open
  }, "Open Prompt")));
  const opener = screen.getByText('Open Prompt');
  fireEvent.click(opener);
  const cancelButton = screen.getByText('Cancel');
  let input = screen.getByPlaceholderText(requiredProps.inputLabel);
  fireEvent.change(input, {
    target: {
      value: 'Hello World'
    }
  });
  expect(input).toHaveValue('Hello World');
  fireEvent.click(cancelButton);
  fireEvent.click(opener);
  input = screen.getByPlaceholderText(requiredProps.inputLabel);
  expect(input).toHaveValue('');
});
test('<Prompt /> updates when defaultValue changes', () => {
  const PromptTest = () => {
    const [defaultValue, setDefaultValue] = useState('Gouda');
    return React.createElement(React.Fragment, null, React.createElement(Prompt, _extends({}, requiredProps, {
      defaultValue: defaultValue
    }), open => React.createElement(Button, {
      onClick: open
    }, "Open Prompt")), React.createElement(Button, {
      onClick: () => setDefaultValue('Swiss')
    }, "Set Default Value to Swiss"));
  };

  renderWithTheme(React.createElement(PromptTest, null));
  fireEvent.click(screen.getByText('Open Prompt'));
  screen.getByDisplayValue('Gouda');
  fireEvent.click(screen.getByText('Cancel'));
  fireEvent.click(screen.getByText('Set Default Value to Swiss'));
  fireEvent.click(screen.getByText('Open Prompt'));
  screen.getByDisplayValue('Swiss');
});
//# sourceMappingURL=Prompt.spec.js.map