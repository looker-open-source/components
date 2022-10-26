import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { renderWithTheme } from '@looker/components-test-utils';
import React from 'react';
import { act, fireEvent, screen } from '@testing-library/react';
import { Tab } from './Tab';
import { TabList } from './TabList';
import { TabPanel } from './TabPanel';
import { TabPanels } from './TabPanels';
import { Tabs, useTabs } from './Tabs';
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

const TabsComponent = () => React.createElement(Tabs, null, React.createElement(TabList, null, React.createElement(Tab, null, "tab1"), React.createElement(Tab, null, "tab2"), React.createElement(Tab, {
  disabled: true
}, "tab3")), React.createElement(TabPanels, null, React.createElement(TabPanel, null, "this is tab1 content"), React.createElement(TabPanel, null, "this is tab2 content"), React.createElement(TabPanel, null, "this is the disable tab-panel")));

describe('Tabs', () => {
  test('shows the correct number of navigation tabs', () => {
    renderWithTheme(React.createElement(TabsComponent, null));
    expect(screen.getAllByRole('tab')).toHaveLength(3);
  });
  test('starts with Tab at index 0 opened', () => {
    renderWithTheme(React.createElement(TabsComponent, null));
    expect(screen.getByText('this is tab1 content')).toBeInTheDocument();
  });
  test('clicking on tab opens correct panel', () => {
    renderWithTheme(React.createElement(TabsComponent, null));
    expect(screen.getByText('this is tab1 content')).toBeInTheDocument();
    expect(screen.queryByText('this is tab2 content')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('tab2'));
    expect(screen.queryByText('this is tab1 content')).not.toBeInTheDocument();
    expect(screen.getByText('this is tab2 content')).toBeInTheDocument();
  });
  test('clicking on disable tab does not change panel', () => {
    renderWithTheme(React.createElement(TabsComponent, null));
    expect(screen.getByText('this is tab1 content')).toBeInTheDocument();
    expect(screen.queryByText('this is the disable tab-panel')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('tab3'));
    expect(screen.getByText('this is tab1 content')).toBeInTheDocument();
    expect(screen.queryByText('this is the disable tab-panel')).not.toBeInTheDocument();
  });

  const TabHooks = () => {
    const tab = useTabs();
    return React.createElement(React.Fragment, null, React.createElement(TabList, tab, React.createElement(Tab, null, "Tab Hook 1"), React.createElement(Tab, null, "Tab Hook 2")), React.createElement(TabPanels, tab, React.createElement(TabPanel, null, "1 this is the panel of tab hook 1"), React.createElement(TabPanel, null, "2 this is the panel of tab hook 2")));
  };

  test('hooks working', () => {
    renderWithTheme(React.createElement(TabHooks, null));
    expect(screen.getByText('1 this is the panel of tab hook 1')).toBeInTheDocument();
    expect(screen.queryByText('2 this is the panel of tab hook 2')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Tab Hook 2'));
    expect(screen.queryByText('1 this is the panel of tab hook 1')).not.toBeInTheDocument();
    expect(screen.getByText('2 this is the panel of tab hook 2')).toBeInTheDocument();
  });
  test('Tab keyboard navigation', () => {
    renderWithTheme(React.createElement(TabsComponent, null));
    const tab1 = screen.getByText('tab1').closest('button');
    tab1 && tab1.focus();
    expect(tab1).toHaveFocus();
    tab1 && fireEvent.keyDown(tab1, {
      code: 39,
      key: 'ArrowRight'
    });
    expect(screen.getByText('tab2').closest('button')).toHaveFocus();
  });
  test('Tab has type attribute', () => {
    renderWithTheme(React.createElement(TabsComponent, null));
    const tab1 = screen.getByText('tab1').closest('button');
    tab1 && fireEvent.click(tab1);
    expect(tab1).toHaveAttribute('type', 'button');
  });
  describe('ripple effect', () => {
    test('default', () => {
      renderWithTheme(React.createElement(TabsComponent, null));
      const tabs = screen.getByText('tab1').closest('button');
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
//# sourceMappingURL=Tabs.spec.js.map