import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["onBlur", "onKeyUp"],
      _excluded2 = ["focusVisible"];
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { useFocusVisible } from './useFocusVisible';

const FocusVisibleComponent = _ref => {
  let {
    onBlur,
    onKeyUp
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const _useFocusVisible = useFocusVisible({
    onBlur,
    onKeyUp
  }),
        {
    focusVisible
  } = _useFocusVisible,
        handlers = _objectWithoutProperties(_useFocusVisible, _excluded2);

  return React.createElement("button", _extends({}, props, handlers, {
    type: "button"
  }), focusVisible.toString());
};

describe('useFocusVisible', () => {
  test('false when clicking', () => {
    render(React.createElement(FocusVisibleComponent, null));
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(button).toHaveFocus();
    expect(button).toHaveTextContent('false');
  });
  test('true when tabbing', () => {
    render(React.createElement(FocusVisibleComponent, null));
    const button = screen.getByRole('button');
    userEvent.tab();
    expect(button).toHaveFocus();
    expect(button).toHaveTextContent('true');
  });
  test('removed on blur', () => {
    render(React.createElement(FocusVisibleComponent, null));
    const button = screen.getByRole('button');
    userEvent.tab();
    expect(button).toHaveTextContent('true');
    userEvent.tab();
    expect(button).toHaveTextContent('false');
  });
});
//# sourceMappingURL=useFocusVisible.spec.js.map