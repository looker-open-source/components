import 'jest-styled-components';
import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { theme } from '@looker/design-tokens';
import { renderWithTheme, withThemeProvider } from '@looker/components-test-utils';
import { MessageBar } from './MessageBar';
describe('MessageBar', () => {
  test('controlled component', () => {
    const handleDismiss = jest.fn();
    const {
      rerender
    } = renderWithTheme(React.createElement(MessageBar, {
      onPrimaryClick: handleDismiss,
      visible: true
    }, "Message text"));
    expect(screen.getByText('Message text')).toBeInTheDocument();
    expect(handleDismiss).not.toHaveBeenCalled();
    const dismissButton = screen.getByText('Dismiss Inform').closest('button') || document.createElement('button');
    fireEvent.click(dismissButton);
    expect(handleDismiss).toHaveBeenCalledTimes(1);
    expect(screen.getByText('Message text')).toBeInTheDocument();
    rerender(withThemeProvider(React.createElement(MessageBar, {
      onPrimaryClick: handleDismiss,
      visible: false
    }, "Message text")));
    expect(screen.queryByText('Message text')).not.toBeInTheDocument();
  });
  describe('action buttons', () => {
    test('renders standard Dismiss button by default', () => {
      renderWithTheme(React.createElement(MessageBar, null, "Message text"));
      expect(screen.getByText('Message text')).toBeInTheDocument();
      const dismissButton = screen.getByText('Dismiss Inform').closest('button') || document.createElement('button');
      fireEvent.click(dismissButton);
      expect(screen.queryByText('Message text')).not.toBeInTheDocument();
    });
    test('hides the dismiss button', () => {
      const {
        rerender
      } = renderWithTheme(React.createElement(MessageBar, null, "Message text"));
      expect(screen.getByText('Dismiss Inform')).toBeInTheDocument();
      rerender(withThemeProvider(React.createElement(MessageBar, {
        noActions: true
      }, "Message text")));
      expect(screen.queryByText('Dismiss Inform')).not.toBeInTheDocument();
    });
    test('accepts a text label to customize primaryAction', () => {
      const handlePrimaryClick = jest.fn();
      renderWithTheme(React.createElement(MessageBar, {
        primaryAction: "Take the red pill",
        onPrimaryClick: handlePrimaryClick
      }, "Do you want to know what the matrix is?"));
      const primaryButton = screen.getByText('Take the red pill');
      expect(primaryButton).toBeInTheDocument();
      expect(screen.getByText('Do you want to know what the matrix is?')).toBeInTheDocument();
      expect(screen.queryByText('Dismiss Inform')).not.toBeInTheDocument();
      fireEvent.click(primaryButton);
      expect(handlePrimaryClick).toBeCalledTimes(1);
      expect(screen.queryByText('Do you want to know what the matrix is?')).not.toBeInTheDocument();
    });
    test('accepts a text label to customize secondaryAction', () => {
      const handleSecondaryClick = jest.fn();
      renderWithTheme(React.createElement(MessageBar, {
        secondaryAction: "Take the blue pill",
        onSecondaryClick: handleSecondaryClick
      }, "Do you want to know what the matrix is?"));
      const secondaryButton = screen.getByText('Take the blue pill');
      expect(secondaryButton).toBeInTheDocument();
      expect(screen.getByText('Do you want to know what the matrix is?')).toBeInTheDocument();
      fireEvent.click(secondaryButton);
      expect(handleSecondaryClick).toBeCalledTimes(1);
      expect(screen.queryByText('Do you want to know what the matrix is?')).not.toBeInTheDocument();
    });
    test('renders custom JSX Button elements for primary and secondary actions', () => {
      renderWithTheme(React.createElement(MessageBar, {
        intent: "inform",
        primaryAction: React.createElement("button", null, "Take the red pill"),
        secondaryAction: React.createElement("button", null, "Take the blue pill")
      }, "Message text"));
      expect(screen.getByText('Take the red pill')).toBeInTheDocument();
      expect(screen.getByText('Take the blue pill')).toBeInTheDocument();
      expect(screen.queryByText('Dismiss Inform')).not.toBeInTheDocument();
    });
    test('renders secondaryButton next to default Dismiss button', () => {
      renderWithTheme(React.createElement(MessageBar, {
        intent: "inform",
        secondaryAction: React.createElement("button", null, "secondary action")
      }, "Message text"));
      expect(screen.getByText('secondary action')).toBeInTheDocument();
      expect(screen.getByText('Dismiss Inform')).toBeInTheDocument();
    });
  });
  describe('intent styling', () => {
    test('Warn MessageBar', () => {
      renderWithTheme(React.createElement(MessageBar, {
        intent: "warn"
      }, "Warn"));
      expect(screen.getByText('Dismiss Warning')).toBeInTheDocument();
      expect(screen.getByTitle('Warning').closest('svg')).toHaveStyle(`color: ${theme.colors.warn}`);
    });
    test('Error MessageBar', () => {
      renderWithTheme(React.createElement(MessageBar, {
        intent: "critical",
        id: "test-message-bar"
      }, "Error"));
      expect(screen.getByText('Dismiss Error')).toBeInTheDocument();
      expect(screen.getByTitle('Error').closest('svg')).toHaveStyle(`color: ${theme.colors.critical}`);
      expect(screen.getByRole('status')).toHaveStyleRule('background-color', theme.colors.criticalAccent);
    });
    test('Info MessageBar', () => {
      renderWithTheme(React.createElement(MessageBar, {
        intent: "inform",
        id: "test-message-bar"
      }, "Inform"));
      expect(screen.getByText('Dismiss Inform')).toBeInTheDocument();
      expect(screen.getByTitle('Inform').closest('svg')).toHaveStyle(`color: ${theme.colors.inform}`);
    });
    test('Confirmation MessageBar', () => {
      renderWithTheme(React.createElement(MessageBar, {
        intent: "positive",
        id: "test-message-bar"
      }, "Confirmation"));
      expect(screen.getByText('Dismiss Success')).toBeInTheDocument();
      expect(screen.getByTitle('Success').closest('svg')).toHaveStyle(`color: ${theme.colors.positive}`);
    });
  });
});
//# sourceMappingURL=MessageBar.spec.js.map