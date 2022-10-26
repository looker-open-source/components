import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import '@testing-library/jest-dom/extend-expect';
import { act, fireEvent, screen } from '@testing-library/react';
import 'jest-styled-components';
import React, { useState } from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { AnimationCallbacks, Nested } from './Panel.stories';
import { Panel, Panels, usePanel } from './';
const globalConsole = global.console;

const runTimers = () => act(() => {
  jest.runOnlyPendingTimers();
});

beforeEach(() => {
  jest.useFakeTimers();
  global.console = _objectSpread(_objectSpread({}, globalConsole), {}, {
    error: jest.fn(),
    warn: jest.fn()
  });
});
afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
  jest.resetAllMocks();
  global.console = globalConsole;
});
describe('Panel', () => {
  const UsePanelHook = () => {
    const [isOpen, setOpen] = useState(false);

    const open = () => setOpen(true);

    const canClose = () => true;

    const {
      panel
    } = usePanel({
      canClose,
      content: 'Panel content',
      direction: 'left',
      isOpen,
      setOpen,
      title: 'Panel Hook'
    });
    return React.createElement(React.Fragment, null, panel, React.createElement("ul", null, React.createElement("li", {
      onClick: open
    }, "Option A"), React.createElement("li", null, "Option B")));
  };

  const ControlledPanel = () => {
    const [option, setOption] = useState(false);

    const toggleOption = () => setOption(!option);

    return React.createElement(Panels, null, React.createElement("ul", null, React.createElement("li", {
      onClick: toggleOption
    }, "Option 1"), React.createElement("li", null, "Option 2"), React.createElement("li", null, "Option 3")), React.createElement(Panel, {
      isOpen: option,
      setOpen: setOption,
      direction: "left",
      title: "return to main option",
      content: React.createElement("ul", null, React.createElement("li", null, "Panel 1"), React.createElement("li", null, "Panel 2"), React.createElement("li", null, "Panel 3"))
    }));
  };

  const UncontrolledPanel = () => React.createElement(Panels, null, React.createElement("ul", null, React.createElement(Panel, {
    content: 'content from the right edge...',
    direction: "right",
    title: "Right"
  }, React.createElement("li", null, "Right")), React.createElement(Panel, {
    title: "Left",
    content: 'content from the left edge...'
  }, React.createElement("li", null, "Left")), React.createElement(Panel, {
    content: "My neat dialog",
    title: "render prop"
  }, panelProps => React.createElement("li", panelProps, "render prop"))));

  test('Panel works properly when direction is equal to right', () => {
    renderWithTheme(React.createElement(UncontrolledPanel, null));
    const right = screen.getByText('Right');
    expect(right).toBeInTheDocument();
    fireEvent.click(right);
    expect(screen.getByText('content from the right edge...')).toBeInTheDocument();
  });
  test('uncontrolled Panel displays content prop', () => {
    renderWithTheme(React.createElement(UncontrolledPanel, null));
    const left = screen.getByText('Left');
    expect(left).toBeInTheDocument();
    fireEvent.click(left);
    expect(screen.getByText('content from the left edge...')).toBeInTheDocument();
  });
  test('controlled Panel displays content', () => {
    renderWithTheme(React.createElement(ControlledPanel, null));
    const liElement = screen.getByText('Option 1');
    expect(liElement).toBeInTheDocument();
    fireEvent.click(liElement);
    expect(screen.getByText('Panel 1')).toBeInTheDocument();
    expect(screen.getByText('Panel 3')).toBeInTheDocument();
  });
  test('returns to previous display if title prop is clicked', () => {
    renderWithTheme(React.createElement(ControlledPanel, null));
    const liElement = screen.getByText('Option 1');
    expect(liElement).toBeInTheDocument();
    fireEvent.click(liElement);
    expect(screen.getByText('Panel 1')).toBeInTheDocument();
    const returnToExplore = screen.getByText('return to main option');
    fireEvent.click(returnToExplore);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });
  test('usePanel hook works as expected', () => {
    renderWithTheme(React.createElement(UsePanelHook, null));
    expect(screen.getByText('Option A')).toBeInTheDocument();
    expect(screen.getByText('Option B')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Option A'));
    expect(screen.getByText('Panel content')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Close Panel Hook'));
    expect(screen.getByText('Option A')).toBeInTheDocument();
  });
  test('with no content fails', () => {
    renderWithTheme(React.createElement(UncontrolledPanel, null));
    expect(screen.getByText('render prop')).toBeInTheDocument();
    fireEvent.click(screen.getByText('render prop'));
    expect(screen.getByText('My neat dialog')).toBeInTheDocument();
  });
  test('triggers console.warn if no children are passed', () => {
    renderWithTheme(React.createElement(Panel, null));
    expect(console.warn).toHaveBeenCalled();
  });
  test('hidden content under panel is not reachable via keyboard nav', () => {
    renderWithTheme(React.createElement(Nested, null));
    const listItem = screen.getByText('option A');
    fireEvent.click(listItem);
    runTimers();
    expect(listItem).not.toBeVisible();
    const nestedPanelButton = screen.getByText('Open nested panel');
    expect(nestedPanelButton.closest('[data-panel]')).toHaveStyle('visibility: visible;');
    fireEvent.click(nestedPanelButton);
    runTimers();
    expect(listItem).not.toBeVisible();
    expect(nestedPanelButton).not.toBeVisible();
    const closeButton = screen.getByRole('button', {
      name: 'Close Nested'
    });
    expect(closeButton.closest('[data-panel]')).toHaveStyle('visibility: visible;');
  });
  test('onAfterOpen, onAfterClose', () => {
    jest.useFakeTimers();
    renderWithTheme(React.createElement(AnimationCallbacks, null));
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const input = screen.getByRole('textbox');
    expect(input).not.toHaveFocus();
    act(() => {
      jest.runOnlyPendingTimers();
    });
    expect(input).toHaveFocus();
    const closeButton = screen.getByRole('button', {
      name: 'Close Animation Callbacks'
    });
    fireEvent.click(closeButton);
    expect(screen.queryByText('Panel closed')).not.toBeInTheDocument();
    act(() => {
      jest.runOnlyPendingTimers();
    });
    expect(screen.queryByText('Panel closed')).toBeVisible();
    jest.useRealTimers();
  });
});
//# sourceMappingURL=Panel.spec.js.map