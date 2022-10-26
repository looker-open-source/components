import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["focusVisible"];
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { useClickable } from './useClickable';

const ClickableComponent = props => {
  const _useClickable = useClickable(props),
        {
    focusVisible
  } = _useClickable,
        clickableProps = _objectWithoutProperties(_useClickable, _excluded);

  return React.createElement("div", _extends({}, clickableProps, {
    "data-testid": "wrapper"
  }), "focusVisible: ", focusVisible.toString());
};

describe('useClickable', () => {
  describe('role', () => {
    test('undefined if no onClick', () => {
      render(React.createElement(ClickableComponent, null));
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
    test('button if onClick and absent in props', () => {
      render(React.createElement(ClickableComponent, {
        onClick: () => null
      }));
      expect(screen.getByRole('button')).toBeVisible();
    });
    test('overwrite-able', () => {
      render(React.createElement(ClickableComponent, {
        onClick: () => null,
        role: "option"
      }));
      expect(screen.getByRole('option')).toBeVisible();
    });
  });
  test('focusVisible', () => {
    render(React.createElement(ClickableComponent, null));
    const wrapper = screen.getByTestId('wrapper');
    expect(wrapper).toHaveTextContent('focusVisible: false');
    fireEvent.focus(wrapper);
    expect(wrapper).toHaveTextContent('focusVisible: false');
    fireEvent.keyUp(wrapper, {
      key: 'ArrowUp'
    });
    expect(wrapper).toHaveTextContent('focusVisible: true');
    fireEvent.blur(wrapper);
    expect(wrapper).toHaveTextContent('focusVisible: false');
    fireEvent.focus(wrapper);
    fireEvent.keyUp(wrapper, {
      key: 'Tab'
    });
    expect(wrapper).toHaveTextContent('focusVisible: true');
  });
  describe('tabIndex', () => {
    test('0 by default', () => {
      render(React.createElement(ClickableComponent, null));
      expect(screen.getByTestId('wrapper')).toHaveAttribute('tabindex', '0');
    });
    test('undefined when disabled', () => {
      render(React.createElement(ClickableComponent, {
        disabled: true
      }));
      expect(screen.getByTestId('wrapper')).not.toHaveAttribute('tabindex');
    });
  });
  describe('onClick', () => {
    test('not called if disabled', () => {
      const onClickMock = jest.fn();
      render(React.createElement(ClickableComponent, {
        onClick: onClickMock,
        disabled: true
      }));
      fireEvent.click(screen.getByTestId('wrapper'));
      expect(onClickMock).not.toHaveBeenCalled();
    });
    test('called on click', () => {
      const onClickMock = jest.fn();
      render(React.createElement(ClickableComponent, {
        onClick: onClickMock
      }));
      fireEvent.click(screen.getByTestId('wrapper'));
      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
    test('called on enter keyup', () => {
      const onClickMock = jest.fn();
      const onKeyUpMock = jest.fn();
      render(React.createElement(ClickableComponent, {
        onClick: onClickMock,
        onKeyUp: onKeyUpMock
      }));
      fireEvent.keyUp(screen.getByTestId('wrapper'), {
        key: 'Enter'
      });
      expect(onClickMock).toHaveBeenCalledTimes(1);
      expect(onKeyUpMock).toHaveBeenCalledTimes(1);
    });
    test('called on space keyup', () => {
      const onClickMock = jest.fn();
      const onKeyUpMock = jest.fn();
      render(React.createElement(ClickableComponent, {
        onClick: onClickMock,
        onKeyUp: onKeyUpMock
      }));
      fireEvent.keyUp(screen.getByTestId('wrapper'), {
        key: ' '
      });
      expect(onClickMock).toHaveBeenCalledTimes(1);
      expect(onKeyUpMock).toHaveBeenCalledTimes(1);
    });
  });
});
//# sourceMappingURL=useClickable.spec.js.map