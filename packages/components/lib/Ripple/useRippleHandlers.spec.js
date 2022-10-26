import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { useRippleHandlers } from './useRippleHandlers';

const RippleHandlersComponent = ({
  callbacks,
  currentHandlers,
  disabled
}) => {
  const handlers = useRippleHandlers(callbacks, currentHandlers, disabled);
  return React.createElement("button", handlers);
};

const callbackMocks = {
  endBG: jest.fn(),
  endFG: jest.fn(),
  startBG: jest.fn(),
  startFG: jest.fn()
};
const handlerMocks = {
  onBlur: jest.fn(),
  onFocus: jest.fn(),
  onKeyDown: jest.fn(),
  onKeyUp: jest.fn(),
  onMouseDown: jest.fn(),
  onMouseEnter: jest.fn(),
  onMouseLeave: jest.fn(),
  onMouseUp: jest.fn()
};
afterEach(() => {
  jest.clearAllMocks();
});
describe('useRippleHandlers', () => {
  test('maps handlers', () => {
    render(React.createElement(RippleHandlersComponent, {
      callbacks: callbackMocks,
      currentHandlers: handlerMocks
    }));
    const button = screen.getByRole('button');
    fireEvent.mouseEnter(button);
    expect(callbackMocks.startBG).toHaveBeenCalledTimes(1);
    expect(handlerMocks.onMouseEnter).toHaveBeenCalledTimes(1);
    fireEvent.mouseLeave(button);
    expect(callbackMocks.endBG).toHaveBeenCalledTimes(1);
    expect(callbackMocks.endFG).toHaveBeenCalledTimes(1);
    expect(handlerMocks.onMouseLeave).toHaveBeenCalledTimes(1);
    fireEvent.focus(button);
    expect(callbackMocks.startBG).toHaveBeenCalledTimes(2);
    expect(handlerMocks.onFocus).toHaveBeenCalledTimes(1);
    fireEvent.blur(button);
    expect(callbackMocks.endBG).toHaveBeenCalledTimes(2);
    expect(handlerMocks.onBlur).toHaveBeenCalledTimes(1);
    fireEvent.mouseDown(button);
    expect(callbackMocks.startFG).toHaveBeenCalledTimes(1);
    expect(handlerMocks.onMouseDown).toHaveBeenCalledTimes(1);
    fireEvent.mouseUp(button);
    expect(callbackMocks.endFG).toHaveBeenCalledTimes(2);
    expect(handlerMocks.onMouseUp).toHaveBeenCalledTimes(1);
    fireEvent.keyDown(button, {
      key: 'Enter'
    });
    expect(callbackMocks.startFG).toHaveBeenCalledTimes(2);
    fireEvent.keyDown(button, {
      key: ' '
    });
    expect(callbackMocks.startFG).toHaveBeenCalledTimes(3);
    expect(handlerMocks.onKeyDown).toHaveBeenCalledTimes(2);
    fireEvent.keyUp(button);
    expect(callbackMocks.endFG).toHaveBeenCalledTimes(3);
    expect(handlerMocks.onKeyUp).toHaveBeenCalledTimes(1);
  });
  test('disabled', () => {
    render(React.createElement(RippleHandlersComponent, {
      callbacks: callbackMocks,
      currentHandlers: handlerMocks,
      disabled: true
    }));
    const button = screen.getByRole('button');
    fireEvent.mouseEnter(button);
    fireEvent.mouseLeave(button);
    fireEvent.focus(button);
    fireEvent.blur(button);
    fireEvent.mouseDown(button);
    fireEvent.mouseUp(button);
    fireEvent.keyDown(button, {
      key: 'Enter'
    });
    fireEvent.keyDown(button, {
      key: ' '
    });
    fireEvent.keyUp(button);
    expect(callbackMocks.startBG).not.toHaveBeenCalled();
    expect(callbackMocks.endBG).not.toHaveBeenCalled();
    expect(callbackMocks.startFG).not.toHaveBeenCalled();
    expect(callbackMocks.endFG).not.toHaveBeenCalled();
    expect(handlerMocks.onMouseEnter).not.toHaveBeenCalled();
    expect(handlerMocks.onMouseLeave).not.toHaveBeenCalled();
    expect(handlerMocks.onFocus).not.toHaveBeenCalled();
    expect(handlerMocks.onBlur).not.toHaveBeenCalled();
    expect(handlerMocks.onMouseDown).not.toHaveBeenCalled();
    expect(handlerMocks.onMouseUp).not.toHaveBeenCalled();
    expect(handlerMocks.onKeyDown).not.toHaveBeenCalled();
    expect(handlerMocks.onKeyUp).not.toHaveBeenCalled();
  });
});
//# sourceMappingURL=useRippleHandlers.spec.js.map