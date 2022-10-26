import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { act, fireEvent, configure, screen } from '@testing-library/react';
import { Science } from '@styled-icons/material-outlined';
import { List } from '../List';
import { ListItem } from './ListItem';
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

describe('ListItem', () => {
  test('ripple effect', () => {
    renderWithTheme(React.createElement(ListItem, null, "List Item"));
    const listItem = screen.getByText('List Item').closest('button');
    expect(listItem).not.toHaveClass('bg-on fg-in');
    expect(listItem).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-scale-end': '1',
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0'
    });
    listItem && fireEvent.focus(listItem);
    expect(listItem).toHaveClass('bg-on');
    listItem && fireEvent.mouseDown(listItem);
    expect(listItem).toHaveClass('bg-on fg-in');
    listItem && fireEvent.mouseUp(listItem);
    runTimers();
    expect(listItem).toHaveClass('bg-on fg-out');
    runTimers();
    expect(listItem).toHaveClass('bg-on');
    listItem && fireEvent.blur(listItem);
    expect(listItem).not.toHaveClass('bg-on fg-in');
    fireEvent.click(document);
  });
  test('children', () => {
    renderWithTheme(React.createElement(ListItem, null, "who!"));
    expect(screen.getByText('who!')).toBeVisible();
  });
  test('description', () => {
    renderWithTheme(React.createElement(ListItem, {
      description: "are you?"
    }, "who!"));
    expect(screen.getByText('are you?')).toBeVisible();
    expect(screen.getByRole('listitem')).not.toHaveAttribute('description');
  });
  test('detail', () => {
    renderWithTheme(React.createElement(ListItem, {
      detail: "Is an excellent question"
    }, "who!"));
    expect(screen.getByText('Is an excellent question')).toBeVisible();
    expect(screen.getByRole('listitem')).not.toHaveAttribute('detail');
  });
  test('iconGutter', () => {
    renderWithTheme(React.createElement(List, {
      iconGutter: true
    }, React.createElement(ListItem, null, "who!")));
    expect(screen.getByText('who!')).toBeVisible();
  });
  describe('color', () => {
    test('theme.colors.key', () => {
      renderWithTheme(React.createElement(ListItem, {
        selected: true,
        color: "key"
      }, "who!"));
      expect(screen.getByText('who!')).toHaveStyle('color: #262d33');
      expect(screen.getByRole('listitem')).toHaveStyle('background: #f3f2ff');
    });
    test('theme', () => {
      renderWithTheme(React.createElement(ListItem, {
        color: "calculation",
        icon: React.createElement(Science, {
          "data-testid": "icon"
        })
      }, "who!"));
      expect(screen.getByText('who!')).toHaveStyle('color: #319220');
      expect(screen.getByTestId('icon').parentNode).toHaveStyle('color: #319220');
    });
    test('theme selected', () => {
      renderWithTheme(React.createElement(ListItem, {
        selected: true,
        color: "calculation"
      }, "who!"));
      expect(screen.getByText('who!')).toHaveStyle('color: #319220');
      expect(screen.getByRole('listitem')).toHaveStyle('background: #eaf4e8');
    });
    test('theme + selected + hover', () => {
      renderWithTheme(React.createElement(ListItem, {
        hovered: true,
        selected: true,
        color: "calculation"
      }, "who!"));
      expect(screen.getByText('who!')).toHaveStyle('color: #319220');
      expect(screen.getByRole('listitem')).toHaveStyle('background: #eaf4e8');
    });
    test('custom', () => {
      renderWithTheme(React.createElement(ListItem, {
        color: "#cc0000",
        icon: React.createElement(Science, {
          "data-testid": "icon"
        })
      }, "who!"));
      expect(screen.getByText('who!')).toHaveStyle('color: #cc0000');
      expect(screen.getByTestId('icon').parentNode).toHaveStyle('color: #cc0000');
    });
  });
  test('truncate', () => {
    renderWithTheme(React.createElement(ListItem, {
      truncate: true
    }, "Some long text to truncate in my list item label"));
    expect(screen.getByText('Some long text to truncate in my list item label')).toBeVisible();
  });
  test('renders icon', () => {
    renderWithTheme(React.createElement(ListItem, {
      icon: React.createElement(Science, null)
    }, "Icon"));
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });
  test('renders artwork', () => {
    renderWithTheme(React.createElement(ListItem, {
      icon: React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("title", null, "SVG Title Here"))
    }, "Artwork"));
    expect(screen.getByTitle('SVG Title Here')).toBeInTheDocument();
  });
  test.skip('has a key color border on key press', () => {
    configure({
      computedStyleSupportsPseudoElements: true
    });
    renderWithTheme(React.createElement(ListItem, null, "Item"));
    const item = screen.getByRole('listitem');
    fireEvent.keyUp(item, {
      key: 'Enter'
    });
    expect(window.getComputedStyle(item, ':after')).toHaveAttribute('border', 'solid 2px #9785F2');
  });
  test('is not clickable when disabled', () => {
    const callbackFn = jest.fn();
    renderWithTheme(React.createElement(ListItem, {
      itemRole: "button",
      disabled: true,
      onClick: callbackFn
    }, "Item"));
    const item = screen.getByText('Item');
    expect(item.closest('button')).toHaveAttribute('type', 'button');
    fireEvent.click(item);
    expect(callbackFn).toHaveBeenCalledTimes(0);
  });
  test('has rel="noopener noreferrer" when it has target="_blank" and no passed-in rel prop value', () => {
    renderWithTheme(React.createElement(ListItem, {
      itemRole: "link",
      href: "https://google.com",
      target: "_blank"
    }, "Link"));
    const item = screen.getByRole('listitem');
    expect(item.nodeName).toBe('A');
    expect(item).toHaveAttribute('target', '_blank');
    expect(item).toHaveAttribute('href', 'https://google.com');
    expect(item).toHaveAttribute('rel', 'noopener noreferrer');
  });
  test('auto appends "noopener noreferrer" to rel prop value when itemRole="link", target="_blank" and rel is not undefined', () => {
    renderWithTheme(React.createElement(ListItem, {
      itemRole: "link",
      href: "https://google.com",
      rel: "nogouda",
      target: "_blank"
    }, "Link"));
    const item = screen.getByRole('listitem');
    expect(item.nodeName).toBe('A');
    expect(item).toHaveAttribute('target', '_blank');
    expect(item).toHaveAttribute('href', 'https://google.com');
    expect(item).toHaveAttribute('rel', 'nogouda noopener noreferrer');
  });
  test('does not auto append "noopener noreferrer" to link without target="_blank"', () => {
    renderWithTheme(React.createElement(ListItem, {
      itemRole: "link",
      rel: "nogouda",
      href: "https://google.com"
    }, "Link"));
    const item = screen.getByRole('listitem');
    expect(item.nodeName).toBe('A');
    expect(item).toHaveAttribute('href', 'https://google.com');
    expect(item).toHaveAttribute('rel', 'nogouda');
  });
  test('renders label container as <div> when itemRole="none"', () => {
    renderWithTheme(React.createElement(ListItem, {
      itemRole: "none"
    }, "No Role"));
    expect(screen.getByRole('listitem').nodeName).toBe('DIV');
  });
  test('does not trigger onClick on detail click when accessory === true', () => {
    const onClick = jest.fn();
    renderWithTheme(React.createElement(ListItem, {
      detail: {
        content: 'Detail',
        options: {
          accessory: true
        }
      },
      onClick: onClick
    }, "Dimension"));
    fireEvent.click(screen.getByText('Dimension'));
    expect(onClick).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('Detail'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  test('triggers onClick on detail click when accessory === false', () => {
    const onClick = jest.fn();
    renderWithTheme(React.createElement(ListItem, {
      detail: {
        content: 'Detail',
        options: {
          accessory: false
        }
      },
      onClick: onClick
    }, "Dimension"));
    fireEvent.click(screen.getByText('Dimension'));
    expect(onClick).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('Detail'));
    expect(onClick).toHaveBeenCalledTimes(2);
  });
  test('hides and shows detail when detailHoverDisclosure === true', () => {
    renderWithTheme(React.createElement(ListItem, {
      detail: {
        content: 'Detail',
        options: {
          hoverDisclosure: true
        }
      }
    }, "Label"));
    expect(screen.queryByText('Detail')).not.toBeInTheDocument();
    fireEvent.mouseEnter(screen.getByText('Label'), {
      bubbles: true
    });
    expect(screen.getByText('Detail')).toBeInTheDocument();
  });
  test('onKeyUp callback functions', () => {
    const onKeyUp = jest.fn();
    renderWithTheme(React.createElement(ListItem, {
      onKeyUp: onKeyUp
    }, "Label"));
    fireEvent.keyUp(screen.getByText('Label'), {
      charCode: 13,
      code: 13,
      key: 'Enter'
    });
    expect(onKeyUp).toHaveBeenCalled();
  });
  test('warns on disabled link', () => {
    const globalConsole = global.console;
    const warnMock = jest.fn();
    global.console = {
      warn: warnMock
    };
    renderWithTheme(React.createElement(ListItem, {
      itemRole: "link",
      disabled: true
    }, "Disabled but not"));
    expect(warnMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "itemRole=\\"link\\" and disabled cannot be combined - use itemRole=\\"button\\" if you need to offer a disabled ListItem",
        ],
      ]
    `);
    global.console = globalConsole;
  });
  test('properly passes aria related props to label container', () => {
    renderWithTheme(React.createElement(ListItem, {
      "aria-current": "location",
      "aria-describedby": "something-else"
    }, "ListItem with aria props"));
    const label = screen.getByRole('listitem');
    expect(label).toHaveAttribute('aria-current', 'location');
    expect(label).toHaveAttribute('aria-describedby', 'something-else');
    const wrapper = screen.getByRole('none');
    expect(wrapper).not.toHaveAttribute('aria-current', 'location');
    expect(wrapper).not.toHaveAttribute('aria-describedby', 'something-else');
  });
  test('has left padding on detail', () => {
    renderWithTheme(React.createElement(ListItem, {
      detail: "Detail"
    }, "Dimension"));
    expect(screen.getByText('Detail')).toHaveStyleRule('padding-left', '0.75rem');
  });
  test('no left padding on detail when accessory === true', () => {
    renderWithTheme(React.createElement(ListItem, {
      detail: {
        content: 'Detail',
        options: {
          accessory: true
        }
      }
    }, "Dimension"));
    expect(screen.getByText('Detail')).toHaveStyleRule('padding-left', '0');
  });
});
//# sourceMappingURL=ListItem.spec.js.map