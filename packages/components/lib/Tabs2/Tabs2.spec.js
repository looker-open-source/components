import _extends from "@babel/runtime/helpers/extends";
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { renderWithTheme } from '@looker/components-test-utils';
import React, { useState } from 'react';
import { act, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StateChanges } from './Tabs2.stories';
import { Tab2, Tabs2 } from './';
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

const Basic = args => React.createElement(Tabs2, _extends({
  ripple: false
}, args), React.createElement(Tab2, {
  id: "cats",
  label: "Cats"
}, "Here's awesome story about cats"), React.createElement(Tab2, {
  id: "dogs",
  label: "Dogs"
}, "Cats are way better than dogs. Go to other tab"), React.createElement(Tab2, {
  label: "Fish"
}, "Are kinda smelly"), React.createElement(Tab2, {
  disabled: true,
  label: "Human"
}, "Humans tab is disabled"));

describe('Tabs2', () => {
  test('basic', () => {
    renderWithTheme(React.createElement(Basic, null));
    expect(screen.getAllByRole('tab')).toHaveLength(4);
    expect(screen.getByText("Here's awesome story about cats")).toBeInTheDocument();
  });
  test('clicking on tab opens correct panel', () => {
    renderWithTheme(React.createElement(Basic, null));
    expect(screen.getByText("Here's awesome story about cats")).toBeInTheDocument();
    expect(screen.queryByText('Are kinda smelly')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Fish'));
    expect(screen.queryByText("Here's awesome story about cats")).not.toBeInTheDocument();
    expect(screen.getByText('Are kinda smelly')).toBeInTheDocument();
  });
  test('defaultTabId', () => {
    renderWithTheme(React.createElement(Basic, {
      defaultTabId: "dogs"
    }));
    expect(screen.getByText('Cats are way better than dogs. Go to other tab')).toBeInTheDocument();
  });
  test('disabled', () => {
    renderWithTheme(React.createElement(Basic, null));
    expect(screen.getByText("Here's awesome story about cats")).toBeInTheDocument();
    expect(screen.queryByText('Humans tab is disabled')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Human'));
    expect(screen.getByText("Here's awesome story about cats")).toBeInTheDocument();
    expect(screen.queryByText('Humans tab is disabled')).not.toBeInTheDocument();
  });
  test('no defaultTabId should display first tab that is not disabled', () => {
    renderWithTheme(React.createElement(Basic, null));
    expect(screen.getByText("Here's awesome story about cats")).toBeInTheDocument();
    expect(screen.queryByText('not available')).not.toBeInTheDocument();
  });
  test('no defaultTabId should not revert to first tab after state change', () => {
    renderWithTheme(React.createElement(StateChanges, null));
    fireEvent.click(screen.getByText('Tab 2'));
    const textfield = screen.getByRole('textbox');
    userEvent.type(textfield, 'test');
    expect(textfield).toBeInTheDocument();
  });
  test('Distributed', () => {
    renderWithTheme(React.createElement(Basic, {
      distributed: true
    }));
    expect(screen.getByText('Cats').closest('div')).toHaveStyleRule('grid-auto-columns: 1fr');
  });

  const Controlled = () => {
    const [currentTabId, setTabId] = useState('cats');
    return React.createElement(React.Fragment, null, React.createElement("p", null, "The current selected tab is: ", currentTabId), React.createElement("button", {
      onClick: () => setTabId('cats')
    }, "Switch to Cats"), React.createElement("button", {
      onClick: () => setTabId('dogs')
    }, "Switch to Dogs"), React.createElement(Tabs2, {
      tabId: currentTabId,
      onTabChange: setTabId
    }, React.createElement(Tab2, {
      id: "cats",
      label: "Cats"
    }, "Here's awesome story about cats"), React.createElement(Tab2, {
      id: "dogs",
      label: "Dogs"
    }, "Cats are way better than dogs. Go to other tab")));
  };

  test('controlled', () => {
    renderWithTheme(React.createElement(Controlled, null));
    expect(screen.getByText("Here's awesome story about cats")).toBeInTheDocument();
    fireEvent.click(screen.getByText('Switch to Dogs'));
    expect(screen.getByText('Cats are way better than dogs. Go to other tab')).toBeInTheDocument();
  });
  test('validates controlled vs uncontrolled prop combinations', () => {
    renderWithTheme(React.createElement(Tabs2, {
      tabId: "3"
    }, React.createElement(Tab2, {
      id: "tab",
      label: "Tab"
    }, "A single Tab")));
    renderWithTheme(React.createElement(Tabs2, {
      onTabChange: "3"
    }, React.createElement(Tab2, {
      id: "tab",
      label: "Tab"
    }, "A single Tab")));
    renderWithTheme(React.createElement(Tabs2, {
      tabId: "3",
      defaultTabId: "5"
    }, React.createElement(Tab2, {
      id: "tab",
      label: "Tab"
    }, "A single Tab")));
  });
  describe('ripple effect', () => {
    test('default', () => {
      renderWithTheme(React.createElement(Basic, null));
      const tabs = screen.getByText('Cats').closest('button');
      expect(tabs).not.toHaveClass('bg-on fg-in');
      expect(tabs).toHaveStyle({
        '--ripple-color': '#6C43E0',
        '--ripple-scale-end': '1',
        '--ripple-scale-start': '0.1',
        '--ripple-size': '100%',
        '--ripple-translate': '0, 0'
      });
      tabs && fireEvent.focus(tabs);
      expect(tabs).toHaveClass('bg-on');
      tabs && fireEvent.mouseDown(tabs);
      expect(tabs).toHaveClass('bg-on fg-in');
      tabs && fireEvent.mouseUp(tabs);
      runTimers();
      expect(tabs).toHaveClass('bg-on fg-out');
      runTimers();
      expect(tabs).toHaveClass('bg-on');
      tabs && fireEvent.blur(tabs);
      expect(tabs).not.toHaveClass('bg-on fg-in');
    });
  });
});
//# sourceMappingURL=Tabs2.spec.js.map