import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["children"];
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import { fireEvent, screen } from '@testing-library/react';
import { theme } from '@looker/design-tokens';
import { FloatingLabelField } from './FloatingLabelField';

const TestComponent = _ref => {
  let {
    children = React.createElement("input", {
      id: "test",
      type: "text"
    })
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: false
      }
    }
  }, React.createElement(FloatingLabelField, _extends({
    id: "test",
    label: "hello!"
  }, props), children));
};

describe('FloatingLabelField', () => {
  test('No value', () => {
    renderWithTheme(React.createElement(TestComponent, null));
    expect(screen.getByText('hello!').closest('div')).toHaveClass('label-down');
  });
  test('With value (controlled)', () => {
    renderWithTheme(React.createElement(TestComponent, {
      hasValue: true
    }, React.createElement("input", {
      id: "test",
      type: "text",
      defaultValue: "test"
    })));
    expect(screen.getByText('hello!').closest('div')).toHaveClass('label-up');
  });
  test('externalLabel', () => {
    renderWithTheme(React.createElement(TestComponent, {
      hasValue: true,
      externalLabel: true
    }, React.createElement("input", {
      id: "test",
      type: "text",
      defaultValue: "test"
    })));
    expect(screen.getByText('hello!').closest('div')).not.toHaveClass('label-up');
  });
  test('Focus/change/blur', () => {
    renderWithTheme(React.createElement(TestComponent, null));
    const input = screen.getByLabelText('hello!');
    const label = screen.getByText('hello!');
    const wrapper = label.closest('div');
    expect(wrapper).toHaveClass('label-down');
    fireEvent.focus(input);
    expect(label).toHaveStyle(`color: ${theme.colors.key}`);
    expect(wrapper).toHaveClass('label-up');
    fireEvent.blur(input, {
      relatedTarget: document.body
    });
    expect(wrapper).toHaveClass('label-down');
    fireEvent.focus(input);
    fireEvent.change(input, {
      target: {
        value: 'Hello World'
      }
    });
    fireEvent.blur(input);
    expect(wrapper).toHaveClass('label-up');
  });
  test('Error', () => {
    renderWithTheme(React.createElement(TestComponent, {
      validationMessage: {
        message: 'Oops',
        type: 'error'
      }
    }));
    const label = screen.getByText('hello!');
    expect(label).toHaveStyle(`color: ${theme.colors.critical}`);
  });
  test('Detail', () => {
    renderWithTheme(React.createElement(TestComponent, {
      detail: "0/50"
    }));
    screen.getByText('0/50');
  });
});
//# sourceMappingURL=FloatingLabelField.spec.js.map