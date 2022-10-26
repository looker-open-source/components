import 'jest-styled-components';
import React, { useState } from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen, act } from '@testing-library/react';
import { MultiFunctionButton } from './MultiFunctionButton';

const CopyToClipboard = () => {
  const [change, setChange] = useState(false);

  const handleSwap = () => {
    setChange(true);
    setTimeout(() => setChange(false), 1500);
  };

  return React.createElement(MultiFunctionButton, {
    alternate: React.createElement("button", null, "Copied!"),
    swap: change
  }, React.createElement("button", {
    onClick: handleSwap
  }, "Copy to Clipboard"));
};

describe('MultiFunctionButton', () => {
  test('render children', () => {
    renderWithTheme(React.createElement(CopyToClipboard, null));
    expect(screen.getByText('Copy to Clipboard')).toBeInTheDocument();
  });
  test('if swap is false alternate button should display', () => {
    renderWithTheme(React.createElement(MultiFunctionButton, {
      alternate: React.createElement("button", null, "Copied!"),
      swap: false
    }, React.createElement("button", null, "Copy to Clipboard")));
    expect(screen.getByText('Copied!')).toBeInTheDocument();
  });
  test('alternate button is displayed when swap is true', () => {
    renderWithTheme(React.createElement(CopyToClipboard, null));
    const button = screen.getByText('Copy to Clipboard');
    fireEvent.click(button);
    expect(screen.getByText('Copied!')).toBeInTheDocument();
  });
  test('component switch focus based on the displayed button', () => {
    renderWithTheme(React.createElement(CopyToClipboard, null));
    const button = screen.getByText('Copy to Clipboard');
    expect(button).not.toHaveFocus();
    button.focus();
    fireEvent.click(button);
    const alternate = screen.getByText('Copied!');
    expect(alternate).toHaveFocus();
  });
});
describe('MultiFunctionButton focus returns to children', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
  test('after swap goes back to false', () => {
    renderWithTheme(React.createElement(CopyToClipboard, null));
    const button = screen.getByText('Copy to Clipboard');
    button.focus();
    fireEvent.click(button);
    const alternate = screen.getByText('Copied!');
    expect(alternate).toHaveFocus();
    act(() => {
      jest.runOnlyPendingTimers();
    });
    expect(button).toHaveFocus();
  });
});
//# sourceMappingURL=MultiFunctionButton.spec.js.map