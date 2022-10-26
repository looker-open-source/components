import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { Tooltip } from '../Tooltip';
import { Status } from './Status';
describe('Status', () => {
  test('default', () => {
    renderWithTheme(React.createElement(Status, {
      "data-testid": "status"
    }));
    expect(screen.getByTestId('status')).toHaveStyle('color: rgb(113, 118, 122)');
  });
  test('critical Status', () => {
    renderWithTheme(React.createElement(Status, {
      intent: "critical"
    }));
    expect(screen.getByTitle('Error').parentElement).toHaveStyle('color: rgb(204, 31, 54)');
  });
  test('inform', () => {
    renderWithTheme(React.createElement(Status, {
      intent: "inform"
    }));
    expect(screen.getByTitle('Inform').parentElement).toHaveStyle('color: rgb(0, 135, 225)');
  });
  test('neutral', () => {
    renderWithTheme(React.createElement(Status, {
      "data-testid": "neutral-icon",
      intent: "neutral"
    }));
    expect(screen.getByTestId('neutral-icon')).toHaveStyle('color: rgb(113, 118, 122)');
  });
  test('positive', () => {
    renderWithTheme(React.createElement(Status, {
      intent: "positive"
    }));
    expect(screen.getByTitle('Success').parentElement).toHaveStyle('color: rgb(36, 178, 95)');
  });
  test('warn', () => {
    renderWithTheme(React.createElement(Status, {
      intent: "warn"
    }));
    expect(screen.getByTitle('Warning').parentElement).toHaveStyle('color: rgb(255, 168, 0)');
  });
  test('wrapping in tooltip disable intent title', async () => {
    renderWithTheme(React.createElement(Tooltip, {
      content: "Meh"
    }, React.createElement(Status, {
      "data-testid": "status",
      title: "Gone gone"
    })));
    fireEvent.mouseEnter(screen.getByTestId('status'));
    await waitFor(() => {
      expect(screen.queryByRole('tooltip', {
        name: 'Gone Gone'
      })).not.toBeInTheDocument();
    });
  });
});
//# sourceMappingURL=Status.spec.js.map