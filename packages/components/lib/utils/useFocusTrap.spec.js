import { FocusTrapProvider } from '@looker/components-providers';
import { renderWithTheme } from '@looker/components-test-utils';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { FieldSelect, FieldText } from '../Form/Fields';
import { useFocusTrap, useToggle } from './';
beforeEach(() => {
  jest.useFakeTimers();
});
afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

const Inner = ({
  children,
  clickOutsideDeactivates
}) => {
  const [, ref] = useFocusTrap({
    clickOutsideDeactivates
  });
  const {
    value,
    setOff,
    toggle
  } = useToggle();
  return React.createElement(React.Fragment, null, value && React.createElement("div", {
    ref: ref
  }, children, React.createElement("button", {
    tabIndex: -1,
    onClick: setOff
  }, "Close")), React.createElement("button", {
    onClick: toggle
  }, "toggle"), React.createElement("button", {
    onClick: setOff
  }, "Another button"));
};

const FocusTrapComponent = props => {
  return React.createElement(FocusTrapProvider, null, React.createElement(Inner, props));
};

const Surface = ({
  children
}) => React.createElement("div", {
  tabIndex: -1,
  "data-testid": "surface",
  "data-overlay-surface": "true"
}, children);

describe('useFocusTrap', () => {
  describe('initial focus', () => {
    test('focus starts on surface', async () => {
      render(React.createElement(FocusTrapComponent, null, React.createElement(Surface, null)));
      const toggle = screen.getByText('toggle');
      fireEvent.click(toggle);
      await waitFor(() => expect(screen.getByTestId('surface')).toHaveFocus());
    });
    test('focus starts on autoFocus element', async () => {
      renderWithTheme(React.createElement(FocusTrapComponent, null, React.createElement(Surface, null, React.createElement(FieldText, {
        label: "Text field A"
      }), React.createElement(FieldText, {
        label: "Text field B",
        autoFocus: true
      }))));
      const toggle = screen.getByText('toggle');
      fireEvent.click(toggle);
      await waitFor(() => expect(screen.getByLabelText('Text field B')).toHaveFocus());
    });
    describe('focus starts on tabbable element by priority', () => {
      const inputElements = React.createElement(React.Fragment, null, React.createElement("input", {
        type: "hidden"
      }), React.createElement(FieldText, {
        label: "Hidden text field",
        style: {
          display: 'none'
        }
      }), React.createElement(FieldText, {
        label: "Text field"
      }));
      const footerElement = React.createElement("footer", null, React.createElement("button", null, "Footer button"));
      const firstTabbableElement = React.createElement("button", null, "First button");
      test('input element is 1st priority', async () => {
        renderWithTheme(React.createElement(FocusTrapComponent, null, React.createElement(Surface, null, firstTabbableElement, footerElement, inputElements)));
        const toggle = screen.getByText('toggle');
        fireEvent.click(toggle);
        await waitFor(() => expect(screen.getByLabelText('Text field')).toHaveFocus());
      });
      test('footer element is 2nd priority', async () => {
        renderWithTheme(React.createElement(FocusTrapComponent, null, React.createElement(Surface, null, firstTabbableElement, footerElement)));
        const toggle = screen.getByText('toggle');
        fireEvent.click(toggle);
        await waitFor(() => expect(screen.getByText('Footer button')).toHaveFocus());
      });
      test('first tabbable element is 3rd priority', async () => {
        renderWithTheme(React.createElement(FocusTrapComponent, null, React.createElement(Surface, null, firstTabbableElement, React.createElement("button", null, "Other button"), React.createElement("footer", null))));
        const toggle = screen.getByText('toggle');
        fireEvent.click(toggle);
        await waitFor(() => expect(screen.getByText('First button')).toHaveFocus());
      });
    });
    test('error without autoFocus or surface', async () => {
      renderWithTheme(React.createElement(FocusTrapComponent, null));
      const toggle = screen.getByText('toggle');
      fireEvent.click(toggle);
      act(() => {
        try {
          jest.runOnlyPendingTimers();
        } catch (e) {
          expect(e).toMatchInlineSnapshot(`[Error: Your focus trap needs to have at least one focusable element]`);
        }
      });
    });
  });
  describe('return focus', () => {
    test('focus returns to trigger', async () => {
      render(React.createElement(FocusTrapComponent, null, React.createElement(Surface, null)));
      const toggle = screen.getByText('toggle');
      toggle.focus();
      fireEvent.click(toggle);
      await waitFor(() => expect(screen.getByTestId('surface')).toHaveFocus());
      fireEvent.click(toggle);
      await waitFor(() => expect(toggle).toHaveFocus());
    });
    test('focus does not return to trigger', async () => {
      render(React.createElement(FocusTrapComponent, null, React.createElement(Surface, null)));
      const toggle = screen.getByText('toggle');
      toggle.focus();
      fireEvent.click(toggle);
      await waitFor(() => expect(screen.getByTestId('surface')).toHaveFocus());
      const otherButton = screen.getByText('Another button');
      fireEvent.click(otherButton);
      otherButton.focus();
      expect(otherButton).toHaveFocus();
    });
    test('With nested traps', async () => {
      render(React.createElement(FocusTrapComponent, null, React.createElement(Surface, null, React.createElement(Inner, null, React.createElement(Surface, null)))));
      const toggle = screen.getByText('toggle');
      toggle.focus();
      fireEvent.click(toggle);
      const toggleInner = screen.getAllByText('toggle')[0];
      toggleInner.focus();
      fireEvent.click(toggleInner);
      const closeButtons = screen.getAllByText('Close');
      fireEvent.click(closeButtons[0]);
      fireEvent.click(closeButtons[1]);
      await waitFor(() => expect(toggle).toHaveFocus());
    });
  });
  describe('cycle focus when tabbing', () => {
    const CycleFocus = () => React.createElement(FocusTrapComponent, null, React.createElement(Surface, null, React.createElement("button", null, "First"), React.createElement("input", {
      type: "text"
    }), React.createElement("a", {
      href: "#"
    }, "Last"), React.createElement("span", null, "Not tabbable")));

    test('focus the first tabbable element after tabbing from the last', async () => {
      render(React.createElement(CycleFocus, null));
      const toggle = screen.getByText('toggle');
      fireEvent.click(toggle);
      const last = screen.getByText('Last');
      last.focus();
      fireEvent.keyDown(last, {
        key: 'Tab'
      });
      expect(screen.getByText('First')).toHaveFocus();
    });
    test('focus the last tabbable element after shift-tabbing from the first', async () => {
      render(React.createElement(CycleFocus, null));
      const toggle = screen.getByText('toggle');
      fireEvent.click(toggle);
      const first = screen.getByText('First');
      first.focus();
      fireEvent.keyDown(first, {
        key: 'Tab',
        shiftKey: true
      });
      expect(screen.getByText('Last')).toHaveFocus();
    });
    test('do nothing when not focused on first or last tabbable element', async () => {
      render(React.createElement(CycleFocus, null));
      const toggle = screen.getByText('toggle');
      fireEvent.click(toggle);
      const input = screen.getByRole('textbox');
      input.focus();
      fireEvent.keyDown(input, {
        key: 'Tab'
      });
      expect(input).toHaveFocus();
    });
  });
  describe('click outside', () => {
    test('does not deactivate by default', async () => {
      render(React.createElement(React.Fragment, null, React.createElement(FocusTrapComponent, null, React.createElement(Surface, null)), React.createElement("button", null, "outside")));
      userEvent.click(screen.getByText('toggle'));
      const surface = screen.getByTestId('surface');
      await waitFor(() => expect(surface).toHaveFocus());
      userEvent.click(screen.getByText('outside'));
      expect(surface).toHaveFocus();
    });
    test('with clickOutsideDeactivates', async () => {
      render(React.createElement(React.Fragment, null, React.createElement(FocusTrapComponent, {
        clickOutsideDeactivates: true
      }, React.createElement(Surface, null)), React.createElement("button", null, "outside")));
      userEvent.click(screen.getByText('toggle'));
      const surface = screen.getByTestId('surface');
      await waitFor(() => expect(surface).toHaveFocus());
      const outside = screen.getByText('outside');
      userEvent.click(outside);
      expect(outside).toHaveFocus();
    });
  });
});
test('Focus maintained with Select', async () => {
  renderWithTheme(React.createElement(Inner, null, React.createElement(FieldText, {
    placeholder: "Input Text"
  }), React.createElement(FieldSelect, {
    options: [{
      label: '1',
      value: '1'
    }],
    placeholder: "Components Select"
  })));
  fireEvent.click(screen.getByText('toggle'));
  const select = screen.getByPlaceholderText('Components Select');
  fireEvent.focus(select);
  fireEvent.click(select);
  fireEvent.click(screen.getByText('1'));
  expect(select).not.toHaveFocus();
  await waitFor(() => {
    expect(select).toHaveFocus();
  });
});
//# sourceMappingURL=useFocusTrap.spec.js.map