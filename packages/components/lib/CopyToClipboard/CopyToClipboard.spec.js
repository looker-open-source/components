import { act, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { Button } from '../Button';
import { CopyToClipboard } from './CopyToClipboard';

const CopyToClipboardComponent = () => {
  const content = 'here is some text to be copied';
  return React.createElement(CopyToClipboard, {
    content: content
  });
};

describe('CopyToClipboard', () => {
  beforeAll(() => {
    Object.defineProperty(document, 'execCommand', {
      value: jest.fn()
    });
  });
  it('renders the CopyToClipboard', () => {
    renderWithTheme(React.createElement(CopyToClipboardComponent, null));
    expect(screen.getByText('Copy to Clipboard')).toBeVisible();
  });
  it('renders the CopyToClipboard with different string values as children and success', () => {
    const content = 'here is some text to be copied';
    renderWithTheme(React.createElement(CopyToClipboard, {
      content: content,
      success: "it was copied"
    }, "copy something"));
    const copyButton = screen.getByText('copy something');
    expect(copyButton).toBeVisible();
    fireEvent.click(copyButton);
    expect(screen.getByText('it was copied')).toBeVisible();
  });
  it('renders the CopyToClipboard with different components as children and success', () => {
    const content = 'here is some text to be copied';
    renderWithTheme(React.createElement(CopyToClipboard, {
      content: content,
      success: React.createElement(Button, null, "Success")
    }, React.createElement(Button, null, "Copy stuff")));
    const copyButton = screen.getByText('Copy stuff');
    expect(copyButton).toBeVisible();
    fireEvent.click(copyButton);
    expect(screen.getByText('Success')).toBeVisible();
  });
  it('transitions from copy to copied state and back when clicked', async () => {
    jest.useFakeTimers();
    renderWithTheme(React.createElement(CopyToClipboardComponent, null));
    const button = screen.getByText('Copy to Clipboard');
    fireEvent.click(button);
    expect(screen.getByText('Copied')).toBeVisible();
    act(() => {
      jest.runOnlyPendingTimers();
    });
    expect(screen.getByText('Copy to Clipboard')).toBeVisible();
    jest.useRealTimers();
  });
  it('copies the refs textarea content on copy click', () => {
    jest.spyOn(document, 'execCommand');
    renderWithTheme(React.createElement(CopyToClipboardComponent, null));
    const button = screen.getByText('Copy to Clipboard');
    fireEvent.click(button);
    expect(document.execCommand).toHaveBeenCalledWith('copy');
  });
});
//# sourceMappingURL=CopyToClipboard.spec.js.map