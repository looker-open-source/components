import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '@looker/components-test-utils';
import { AccountCircle } from '@styled-icons/material-outlined';
import { Favorite } from '@styled-icons/material';
import React from 'react';
import { InputText } from './InputText';
const globalConsole = global.console;
const warnMock = jest.fn();
beforeEach(() => {
  jest.useFakeTimers();
  global.console = {
    warn: warnMock
  };
});
afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
  jest.resetAllMocks();
  global.console = globalConsole;
});
describe('InputText', () => {
  test('with name and id', () => {
    renderWithTheme(React.createElement(InputText, {
      name: "Bob",
      id: "Bobby"
    }));
    expect(screen.getByRole('textbox')).toHaveAttribute('name', 'Bob');
    expect(screen.getByRole('textbox')).toHaveAttribute('id', 'Bobby');
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');
  });
  test('should accept disabled', () => {
    renderWithTheme(React.createElement(InputText, {
      disabled: true
    }));
    expect(screen.getByRole('textbox')).toBeDisabled();
  });
  test('with a placeholder', () => {
    renderWithTheme(React.createElement(InputText, {
      placeholder: "I am a placeholder"
    }));
    expect(screen.getByPlaceholderText('I am a placeholder')).toBeInTheDocument();
  });
  test('should accept readOnly', () => {
    renderWithTheme(React.createElement(InputText, {
      readOnly: true
    }));
    expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
  });
  test('should accept type', () => {
    renderWithTheme(React.createElement(InputText, {
      type: "tel"
    }));
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'tel');
  });
  test('should accept required', () => {
    renderWithTheme(React.createElement(InputText, {
      required: true
    }));
    expect(screen.getByRole('textbox')).toBeRequired();
  });
  test('should accept defaultValue', () => {
    renderWithTheme(React.createElement(InputText, {
      defaultValue: "Some value"
    }));
    expect(screen.getByRole('textbox')).toHaveValue('Some value');
  });
  test('with aria-describedby', () => {
    renderWithTheme(React.createElement(InputText, {
      "aria-describedby": "some-id"
    }));
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-describedby', 'some-id');
  });
  test('autoResize', () => {
    const {
      container
    } = renderWithTheme(React.createElement(InputText, {
      autoResize: true,
      placeholder: "resize me"
    }));
    expect(container.firstChild).toHaveStyleRule('width: auto');
    expect(screen.getByPlaceholderText('resize me')).toHaveStyleRule('position: absolute');
    expect(screen.getByText('resize me')).toBeVisible();
  });
  test('with an error validation', () => {
    renderWithTheme(React.createElement(InputText, {
      placeholder: "Hello",
      validationType: "error"
    }));
    expect(screen.getByPlaceholderText('Hello')).toHaveAttribute('aria-invalid');
  });
  describe('before & after', () => {
    test('ReactNode', () => {
      renderWithTheme(React.createElement(InputText, {
        before: "before",
        after: "after"
      }));
      expect(screen.getByText('before')).toBeVisible();
      expect(screen.getByText('after')).toBeVisible();
    });
    test('Simple string', () => {
      renderWithTheme(React.createElement(InputText, {
        before: "before",
        after: "after"
      }));
      expect(screen.getByText('before')).toBeVisible();
      expect(screen.getByText('after')).toBeVisible();
    });
    test('icons', () => {
      renderWithTheme(React.createElement(InputText, {
        iconBefore: React.createElement(Favorite, {
          title: "Before Title"
        }),
        iconAfter: React.createElement(AccountCircle, {
          title: "After Title"
        })
      }));
      expect(screen.getByTitle('Before Title')).toBeInTheDocument();
      expect(screen.getByTitle('After Title')).toBeInTheDocument();
    });
    test('redundant ones should not render', () => {
      renderWithTheme(React.createElement(React.Fragment, null, React.createElement(InputText, {
        placeholder: "Hello",
        iconBefore: React.createElement(Favorite, null),
        before: "$"
      }), React.createElement(InputText, {
        placeholder: "Goodbye",
        iconAfter: React.createElement(AccountCircle, null),
        after: "%"
      })));
      expect(screen.queryByPlaceholderText('Hello')).not.toBeInTheDocument();
      expect(screen.queryByPlaceholderText('Goodbye')).not.toBeInTheDocument();
      expect(warnMock.mock.calls).toMatchInlineSnapshot(`
        Array [
          Array [
            "Use before or iconBefore, but not both at the same time.",
          ],
          Array [
            "Use after or iconAfter, but not both at the same time.",
          ],
        ]
      `);
    });
    test.skip('focus & blur behavior', () => {
      const handleBlur = jest.fn();
      const handleFocus = jest.fn();
      renderWithTheme(React.createElement(InputText, {
        onBlur: handleBlur,
        onFocus: handleFocus,
        after: "after"
      }));
      const after = screen.getByText('after');
      userEvent.click(after);
      expect(handleFocus).toHaveBeenCalled();
      expect(screen.getByRole('textbox')).toHaveFocus();
      userEvent.click(after);
      expect(handleBlur).not.toHaveBeenCalled();
      expect(screen.getByRole('textbox')).toHaveFocus();
    });
  });
  test('Should trigger onChange handler', () => {
    const onChange = jest.fn();
    renderWithTheme(React.createElement(InputText, {
      onChange: onChange
    }));
    userEvent.type(screen.getByRole('textbox'), 'Hello world');
    expect(onChange).toHaveBeenCalled();
  });
  test('onBlur & onFocus callbacks', () => {
    const handleBlur = jest.fn();
    const handleFocus = jest.fn();
    renderWithTheme(React.createElement(React.Fragment, null, React.createElement(InputText, {
      onBlur: handleBlur,
      onFocus: handleFocus
    }), React.createElement("button", null, "click")));
    userEvent.click(screen.getByRole('textbox'));
    expect(handleFocus).toHaveBeenCalled();
    expect(screen.getByRole('textbox')).toHaveFocus();
    userEvent.click(screen.getByText('click'));
    expect(handleBlur).toHaveBeenCalled();
    expect(screen.getByRole('textbox')).not.toHaveFocus();
  });
});
//# sourceMappingURL=InputText.spec.js.map