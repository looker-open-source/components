import '@testing-library/jest-dom/extend-expect';
import { fireEvent, waitForElementToBeRemoved, screen, waitFor } from '@testing-library/react';
import React, { useRef } from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { Favorite } from '@styled-icons/material-outlined';
import { Tooltip } from '../Tooltip';
import { Menu, MenuItem } from './';
const menu = React.createElement(Menu, {
  content: React.createElement(React.Fragment, null, React.createElement(MenuItem, {
    icon: React.createElement(Favorite, null)
  }, "Gouda"), React.createElement(MenuItem, {
    icon: React.createElement(Favorite, null)
  }, "Swiss"))
}, React.createElement(Tooltip, {
  content: "Select your favorite kind"
}, React.createElement("button", null, "Cheese")));
describe('<Menu />', () => {
  test('Menu Opens and Closes', () => {
    renderWithTheme(menu);
    const button = screen.getByText('Cheese');
    expect(screen.queryByText('Swiss')).not.toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByText('Swiss')).toBeInTheDocument();
    fireEvent.click(document);
    expect(screen.queryByText('Swiss')).not.toBeInTheDocument();
  });
  test('Menu Button has the tooltip', async () => {
    renderWithTheme(menu);
    const button = screen.getByText('Cheese');
    expect(screen.queryByText('Select your favorite kind')).not.toBeInTheDocument();
    fireEvent.mouseOver(button);
    expect(screen.getByText('Select your favorite kind')).toBeInTheDocument();
    fireEvent.mouseOut(button);
    await waitForElementToBeRemoved(() => screen.queryByText('Select your favorite kind'));
  });
  test('closes on MenuItem click', () => {
    const Closable = () => {
      function handleClick(e) {
        e.preventDefault();
      }

      return React.createElement(Menu, {
        content: React.createElement(React.Fragment, null, React.createElement(MenuItem, {
          icon: React.createElement(Favorite, null),
          onClick: handleClick
        }, "Gouda"), React.createElement(MenuItem, {
          icon: React.createElement(Favorite, null)
        }, "Swiss"))
      }, React.createElement("button", null, "Cheese"));
    };

    renderWithTheme(React.createElement(Closable, null));
    const button = screen.getByText('Cheese');
    fireEvent.click(button);
    const defaultPreventedItem = screen.getByText('Gouda');
    const item = screen.getByText('Swiss');
    fireEvent.click(defaultPreventedItem);
    expect(defaultPreventedItem).toBeInTheDocument();
    expect(item).toBeInTheDocument();
    fireEvent.click(item);
    expect(defaultPreventedItem).not.toBeInTheDocument();
    expect(item).not.toBeInTheDocument();
    fireEvent.click(document);
  });
  test('Disabled Menu does not open when clicked', () => {
    renderWithTheme(React.createElement(Menu, {
      disabled: true,
      content: React.createElement(React.Fragment, null, React.createElement(MenuItem, {
        icon: React.createElement(Favorite, null)
      }, "Gouda"), React.createElement(MenuItem, {
        icon: React.createElement(Favorite, null)
      }, "Swiss"))
    }, React.createElement("div", null, "Cheese")));
    const trigger = screen.getByText('Cheese');
    expect(screen.queryByText('Swiss')).not.toBeInTheDocument();
    fireEvent.click(trigger);
    expect(screen.queryByText('Swiss')).not.toBeInTheDocument();
    fireEvent.click(document);
  });
  test('Starting with Menu open', () => {
    renderWithTheme(React.createElement(Menu, {
      isOpen: true,
      content: React.createElement(React.Fragment, null, React.createElement(MenuItem, {
        icon: React.createElement(Favorite, null)
      }, "Gouda"), React.createElement(MenuItem, {
        icon: React.createElement(Favorite, null)
      }, "Swiss"))
    }, React.createElement("button", null, "Cheese")));
    expect(screen.getByText('Swiss')).toBeInTheDocument();
    fireEvent.click(document);
  });
  test('Trigger is shown/hidden on hover of hoverDisclosureRef', () => {
    const Component = () => {
      const hoverRef = useRef(null);
      return React.createElement("div", {
        ref: hoverRef
      }, React.createElement(Menu, {
        hoverDisclosureRef: hoverRef,
        content: React.createElement(React.Fragment, null, React.createElement(MenuItem, {
          icon: React.createElement(Favorite, null)
        }, "Gouda"), React.createElement(MenuItem, {
          icon: React.createElement(Favorite, null)
        }, "Swiss"))
      }, React.createElement("button", null, "Cheese")), "Some text in the div");
    };

    renderWithTheme(React.createElement(Component, null));
    const trigger = screen.queryByText('Cheese');
    const div = screen.getByText('Some text in the div');
    expect(trigger).not.toBeInTheDocument();
    fireEvent(div, new MouseEvent('mouseenter', {
      bubbles: true,
      cancelable: true
    }));
    const triggerNew = screen.getByText('Cheese');
    expect(screen.queryByText('Gouda')).not.toBeInTheDocument();
    fireEvent.click(triggerNew);
    expect(screen.getByText('Gouda')).toBeInTheDocument();
    fireEvent.click(document);
  });
  describe('MenuItem nestedMenu', () => {
    test('toggle on hover', async () => {
      renderWithTheme(React.createElement(Menu, {
        content: React.createElement(MenuItem, {
          nestedMenu: React.createElement(MenuItem, null, "Swiss")
        }, "Gouda")
      }, React.createElement("button", null, "Cheese")));
      const button = screen.getByText('Cheese');
      fireEvent.click(button);
      const parent = screen.getByText('Gouda');
      fireEvent.mouseEnter(parent);
      await screen.findByText('Swiss');
      const child = screen.getByText('Swiss');
      expect(child).toBeVisible();
      fireEvent.mouseMove(parent, {
        screenX: 8,
        screenY: 3
      });
      fireEvent.mouseLeave(parent, {
        screenX: 9,
        screenY: 7
      });
      fireEvent.mouseEnter(child);
      await screen.findByText('Swiss');
      expect(screen.getByText('Swiss')).toBeVisible();
      fireEvent.mouseLeave(child);
      expect(screen.getByText('Swiss')).toBeVisible();
      fireEvent.mouseEnter(parent);
      fireEvent.mouseMove(parent, {
        screenX: 8,
        screenY: 3
      });
      fireEvent.mouseLeave(parent, {
        screenX: 8,
        screenY: 6
      });
      expect(screen.queryByText('Swiss')).not.toBeInTheDocument();
      fireEvent.click(document);
    });
    test('toggle on arrow keys', async () => {
      renderWithTheme(React.createElement(Menu, {
        content: React.createElement(MenuItem, {
          nestedMenu: React.createElement(MenuItem, null, "Swiss")
        }, "Gouda")
      }, React.createElement("button", null, "Cheese")));
      const button = screen.getByText('Cheese');
      button.focus();
      fireEvent.click(button);
      const parent = screen.getByText('Gouda');
      fireEvent.keyDown(parent, {
        key: 'ArrowRight'
      });
      const child = screen.getByText('Swiss');
      expect(child).toBeVisible();
      fireEvent.keyDown(child, {
        key: 'ArrowLeft'
      });
      expect(screen.queryByText('Swiss')).not.toBeInTheDocument();
      fireEvent.keyDown(parent, {
        key: 'ArrowRight'
      });
      const child2 = screen.getByText('Swiss');
      expect(child2).toBeVisible();
      fireEvent.keyDown(child2, {
        key: 'Escape'
      });
      expect(screen.queryByText('Swiss')).not.toBeInTheDocument();
      expect(screen.queryByText('Gouda')).not.toBeInTheDocument();
      await waitFor(() => {
        expect(button).toHaveFocus();
      });
    });
    test('toggle on click', () => {
      const onClick = jest.fn();
      renderWithTheme(React.createElement(Menu, {
        isOpen: true,
        content: React.createElement(React.Fragment, null, React.createElement(MenuItem, {
          nestedMenu: React.createElement(MenuItem, null, "Camembert")
        }, "French"), React.createElement(MenuItem, {
          onClick: onClick,
          nestedMenu: React.createElement(MenuItem, null, "Gouda")
        }, "Dutch"))
      }, React.createElement("button", null, "Cheese")));
      fireEvent.click(screen.getByText('French'));
      expect(screen.getByText('Camembert')).toBeVisible();
      fireEvent.click(screen.getByText('French'));
      expect(screen.getByText('Camembert')).toBeVisible();
      fireEvent.click(screen.getByText('Cheese'));
      fireEvent.click(screen.getByText('Dutch'));
      expect(onClick).toHaveBeenCalledTimes(1);
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
    test('clicking an item in the nested menu closes the parent menu', () => {
      const onClick = jest.fn();
      renderWithTheme(React.createElement(Menu, {
        content: React.createElement(MenuItem, {
          nestedMenu: React.createElement(MenuItem, {
            onClick: onClick
          }, "Camembert")
        }, "French")
      }, React.createElement("button", null, "Cheese")));
      fireEvent.click(screen.getByText('Cheese'));
      fireEvent.keyDown(screen.getByText('French'), {
        key: 'ArrowRight'
      });
      fireEvent.click(screen.getByText('Camembert'));
      expect(onClick).toHaveBeenCalledTimes(1);
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
    test('item with preventDefault', () => {
      const onClickMock = jest.fn();

      const handleClick = e => {
        onClickMock();
        e.preventDefault();
      };

      renderWithTheme(React.createElement(Menu, {
        content: React.createElement(MenuItem, {
          nestedMenu: React.createElement(MenuItem, {
            onClick: handleClick
          }, "Camembert")
        }, "French")
      }, React.createElement("button", null, "Cheese")));
      fireEvent.click(screen.getByText('Cheese'));
      const parent = screen.getByText('French');
      fireEvent.keyDown(parent, {
        key: 'ArrowRight'
      });
      const child = screen.getByText('Camembert');
      fireEvent.click(screen.getByText('Camembert'));
      expect(onClickMock).toHaveBeenCalledTimes(1);
      expect(child).toBeVisible();
      expect(parent).toBeVisible();
      fireEvent.click(document);
    });
    test('3 levels deep', () => {
      const onClickMock = jest.fn();
      renderWithTheme(React.createElement(Menu, {
        content: React.createElement(MenuItem, {
          nestedMenu: React.createElement(MenuItem, {
            nestedMenu: React.createElement(MenuItem, {
              onClick: onClickMock
            }, "Camembert")
          }, "Stinky")
        }, "French")
      }, React.createElement("button", null, "Cheese")));
      fireEvent.click(screen.getByText('Cheese'));
      const first = screen.getByText('French');
      fireEvent.click(first);
      const second = screen.getByText('Stinky');
      fireEvent.click(second);
      const third = screen.getByText('Camembert');
      fireEvent.click(third);
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
  });
});
//# sourceMappingURL=Menu.spec.js.map