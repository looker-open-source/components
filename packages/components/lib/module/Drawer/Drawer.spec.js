

import 'jest-styled-components';
import React, { useContext } from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { act, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import { DialogContext } from '../Dialog/DialogContext';
import { Drawer } from './Drawer';
import { UseDrawer } from './stories/index.stories';
const SimpleContent = () => {
  const {
    closeModal
  } = useContext(DialogContext);
  return React.createElement(React.Fragment, null, "Drawer content", React.createElement("button", {
    onClick: closeModal
  }, "Done"));
};
beforeEach(() => {
  jest.useFakeTimers();
});
afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});
const runTimers = () => act(() => {
  jest.runOnlyPendingTimers();
});
describe('Drawer', () => {
  test('Basic render', () => {
    renderWithTheme(React.createElement(Drawer, {
      content: React.createElement(SimpleContent, null)
    }));
    expect(screen.queryByText('Drawer content')).not.toBeInTheDocument();
  });
  test('defaultOpen', async () => {
    renderWithTheme(React.createElement(Drawer, {
      defaultOpen: true,
      content: React.createElement(SimpleContent, null)
    }));
    runTimers();
    expect(screen.getByText('Drawer content')).toBeInTheDocument();
    const doneButton = screen.getByText('Done');
    fireEvent.click(doneButton);
    await waitForElementToBeRemoved(() => screen.queryByText('Drawer content'));
  });
  test('useDrawer hook', async () => {
    renderWithTheme(React.createElement(UseDrawer, null));

    expect(screen.queryByText('Drawer content')).not.toBeInTheDocument();

    const link = screen.getByText('Open Drawer');
    fireEvent.click(link);
    runTimers();
    expect(screen.getByText('Drawer content')).toBeInTheDocument();

    const backdrop = screen.getByTestId('backdrop');
    fireEvent.click(backdrop);
    await waitForElementToBeRemoved(() => screen.queryByText('Drawer content'));
  });
  test('drawer form', async () => {
    renderWithTheme(React.createElement(Drawer, {
      defaultOpen: true,
      width: "rail",
      content: React.createElement(SimpleContent, null)
    }));
    expect(screen.getByText('Drawer content')).toHaveStyleRule('width', '3.5rem');
  });
});
//# sourceMappingURL=Drawer.spec.js.map