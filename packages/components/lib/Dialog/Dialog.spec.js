import 'jest-styled-components';
import React, { useState } from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { act, screen, fireEvent, waitForElementToBeRemoved, within } from '@testing-library/react';
import { SimpleContent } from '../fixtures/DialogContentSimple';
import { DialogMediumContent } from '../fixtures/DialogMediumContent';
import { Dialog } from './Dialog';
import { Controlled, ControlledLegacy, ControlledNoChildren } from './stories/Controlled';
import { CloseIconButton } from './stories/Dialog.stories';
describe('Dialog', () => {
  test('Verify initial state', () => {
    renderWithTheme(React.createElement(Dialog, {
      content: React.createElement(SimpleContent, null)
    }));
    expect(screen.queryByText('Dialog content')).not.toBeInTheDocument();
  });
  test('Placement functions', () => {
    renderWithTheme(React.createElement(Dialog, {
      isOpen: true,
      placement: "top",
      content: React.createElement(SimpleContent, null)
    }));
    expect(screen.getByText('Dialog content')).toBeInTheDocument();
  });
  test('defaultOpen', async () => {
    renderWithTheme(React.createElement(Dialog, {
      defaultOpen: true,
      content: React.createElement(DialogMediumContent, null)
    }));
    expect(screen.getByText(/We the People/)).toBeInTheDocument();
    expect(screen.getByLabelText(/The Constitution/, {
      selector: '[role="dialog"]'
    })).toBeInTheDocument();
    const doneButton = screen.getByText('Done Reading');
    fireEvent.click(doneButton);
    await waitForElementToBeRemoved(() => screen.queryByText(/We the People/));
  });
  test('Dialog can be opened & closed', async () => {
    renderWithTheme(React.createElement(Dialog, {
      content: React.createElement(SimpleContent, null)
    }, React.createElement("a", null, "Open Dialog")));
    expect(screen.queryByText('Dialog content')).not.toBeInTheDocument();
    const link = screen.getByText('Open Dialog');
    expect(link).toBeInTheDocument();
    fireEvent.click(link);
    expect(screen.getByText('Dialog content')).toBeInTheDocument();
    const doneButton = screen.getByText('Done');
    fireEvent.click(doneButton);
    await waitForElementToBeRemoved(() => screen.queryByText('Dialog content'));
  });
  test('Backdrop can be clicked to close', async () => {
    renderWithTheme(React.createElement(Dialog, {
      defaultOpen: true,
      content: React.createElement(SimpleContent, null)
    }, React.createElement("a", null, "Open Dialog")));
    expect(screen.getByText('Dialog content')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('backdrop'));
    await waitForElementToBeRemoved(() => screen.queryByText('Dialog content'));
  });
  test('Render props style', async () => {
    renderWithTheme(React.createElement(Dialog, {
      content: React.createElement(SimpleContent, null)
    }, dialogProps => React.createElement("a", dialogProps, "Open Dialog")));
    const link = screen.getByText('Open Dialog');
    fireEvent.click(link);
    expect(screen.getByText('Dialog content')).toBeInTheDocument();
    const doneButton = screen.getByText('Done');
    fireEvent.click(doneButton);
    await waitForElementToBeRemoved(() => screen.queryByText('Dialog content'));
  });
  test('Controlled', async () => {
    renderWithTheme(React.createElement(Controlled, null));
    const link = screen.getByText('Open Dialog');
    fireEvent.click(link);
    expect(screen.getByText(/We the People/)).toBeInTheDocument();
    const doneButton = screen.getByText('Done Reading');
    fireEvent.click(doneButton);
    await waitForElementToBeRemoved(() => screen.queryByText(/We the People/));
  });
  test('Controlled no callbacks', async () => {
    const SimpleControlled = () => {
      const [isOpen, setOpen] = useState(false);
      return React.createElement(React.Fragment, null, React.createElement(Dialog, {
        content: React.createElement(DialogMediumContent, null),
        isOpen: isOpen
      }), React.createElement("button", {
        onClick: () => setOpen(true)
      }, "Open Dialog"));
    };

    renderWithTheme(React.createElement(SimpleControlled, null));
    const link = screen.getByText('Open Dialog');
    fireEvent.click(link);
    expect(screen.getByText(/We the People/)).toBeInTheDocument();
  });
  test('Controlled - no children', async () => {
    renderWithTheme(React.createElement(ControlledNoChildren, null));
    const link = screen.getByText('Open Dialog');
    fireEvent.click(link);
    expect(screen.getByText(/We the People/)).toBeInTheDocument();
    const doneButton = screen.getByText('Done Reading');
    fireEvent.click(doneButton);
    await waitForElementToBeRemoved(() => screen.queryByText(/We the People/));
  });
  test('Controlled - legacy', async () => {
    renderWithTheme(React.createElement(ControlledLegacy, null));
    const link = screen.getByText('Open Dialog');
    fireEvent.click(link);
    expect(screen.getByText(/We the People/)).toBeInTheDocument();
    const doneButton = screen.getByText('Done Reading');
    fireEvent.click(doneButton);
    await waitForElementToBeRemoved(() => screen.queryByText(/We the People/));
  });
  describe('Animation behavior', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    const runTimers = () => act(() => {
      jest.runOnlyPendingTimers();
    });

    afterEach(() => {
      runTimers();
      jest.useRealTimers();
    });
    test('props onAfterClose and onAfterOpen are called', async () => {
      const onAfterClose = jest.fn();
      const onAfterOpen = jest.fn();
      renderWithTheme(React.createElement(Dialog, {
        onAfterClose: onAfterClose,
        onAfterOpen: onAfterOpen,
        content: React.createElement(SimpleContent, null)
      }, React.createElement("a", null, "Open Dialog")));
      fireEvent.click(screen.getByText('Open Dialog'));
      runTimers();
      expect(onAfterOpen).toBeCalled();
      fireEvent.click(screen.getByText('Done'));
      await waitForElementToBeRemoved(() => screen.queryByText('Dialog content'));
      expect(onAfterClose).toBeCalled();
    });
    test('Close IconButton does not have tooltip when auto-focused', () => {
      renderWithTheme(React.createElement(CloseIconButton, null));
      fireEvent.click(screen.getByText('Open Dialog'));
      runTimers();
      const closeButton = within(screen.getByRole('dialog')).getByRole('button');
      expect(closeButton).toHaveFocus();
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
      fireEvent.blur(closeButton);
      fireEvent.focus(closeButton);
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
      fireEvent.click(closeButton);
      runTimers();
    });
  });
  test('onClose callback', () => {
    const onClose = jest.fn();
    renderWithTheme(React.createElement(Dialog, {
      content: React.createElement(SimpleContent, null),
      defaultOpen: true,
      onClose: onClose
    }));
    fireEvent.click(screen.getByText('Done'));
    expect(onClose).toBeCalledTimes(1);
  });
  test('onClose callback called when canClose=true', () => {
    const onClose = jest.fn();
    renderWithTheme(React.createElement(Dialog, {
      content: React.createElement(SimpleContent, null),
      defaultOpen: true,
      canClose: () => true,
      onClose: onClose
    }));
    fireEvent.click(screen.getByText('Done'));
    expect(onClose).toBeCalledTimes(1);
  });
  test('onClose callback not called when canClose=false', () => {
    const onClose = jest.fn();
    renderWithTheme(React.createElement(Dialog, {
      content: React.createElement(SimpleContent, null),
      defaultOpen: true,
      canClose: () => false,
      onClose: onClose
    }));
    fireEvent.click(screen.getByText('Done'));
    expect(onClose).toBeCalledTimes(0);
  });
  describe('width', () => {
    test('xsmall', () => {
      renderWithTheme(React.createElement(Dialog, {
        content: React.createElement(SimpleContent, null),
        defaultOpen: true,
        width: "xxsmall"
      }));
      expect(screen.getByText('Dialog content')).toHaveStyleRule('width', '16rem');
    });
    test('small', () => {
      renderWithTheme(React.createElement(Dialog, {
        content: React.createElement(SimpleContent, null),
        defaultOpen: true,
        width: "small"
      }));
      expect(screen.getByText('Dialog content')).toHaveStyleRule('width', '28rem');
    });
    test('large', () => {
      renderWithTheme(React.createElement(Dialog, {
        content: React.createElement(SimpleContent, null),
        defaultOpen: true,
        width: "large"
      }));
      expect(screen.getByText('Dialog content')).toHaveStyleRule('width', '50rem');
    });
    test('arbitrary', () => {
      renderWithTheme(React.createElement(Dialog, {
        content: React.createElement(SimpleContent, null),
        defaultOpen: true,
        width: "24.5rem"
      }));
      expect(screen.getByText('Dialog content')).toHaveStyleRule('width', '24.5rem');
    });
    test('Dialog without content throws console warning', () => {
      const globalConsole = global.console;
      const errorMock = jest.fn();
      global.console = {
        error: errorMock
      };
      renderWithTheme(React.createElement(Dialog, null));
      expect(errorMock.mock.calls).toMatchInlineSnapshot(`
         Array [
           Array [
             "Dialog cannot be used without specifying content",
           ],
         ]
       `);
      global.console = globalConsole;
    });
  });
});
//# sourceMappingURL=Dialog.spec.js.map