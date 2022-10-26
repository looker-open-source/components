import _extends from "@babel/runtime/helpers/extends";
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { useArrowKeyNav } from './useArrowKeyNav';

const ArrowKeyNavComponent = ({
  axis,
  children
}) => {
  const navProps = useArrowKeyNav({
    axis
  });
  return React.createElement("ul", _extends({
    role: "list"
  }, navProps), children, React.createElement("li", {
    tabIndex: -1
  }, "first"), React.createElement("li", {
    tabIndex: -1
  }, "second"), React.createElement("li", {
    tabIndex: -1
  }, "third"));
};

describe('useArrowKeyNav', () => {
  test('tabbing', () => {
    render(React.createElement(React.Fragment, null, React.createElement("button", null, "before"), React.createElement(ArrowKeyNavComponent, null), React.createElement("button", null, "after")));
    const before = screen.getByText('before');
    const first = screen.getByText('first');
    userEvent.click(before);
    userEvent.tab();
    expect(first).toHaveFocus();
    userEvent.tab();
    expect(screen.getByText('after')).toHaveFocus();
    userEvent.tab({
      shift: true
    });
    expect(first).toHaveFocus();
    userEvent.tab({
      shift: true
    });
    expect(before).toHaveFocus();
  });
  test('up/down arrow keys', () => {
    render(React.createElement(React.Fragment, null, React.createElement("button", null, "before"), React.createElement(ArrowKeyNavComponent, null), React.createElement("button", null, "after")));
    const before = screen.getByText('before');
    const first = screen.getByText('first');
    const second = screen.getByText('second');
    const third = screen.getByText('third');
    userEvent.click(before);
    userEvent.tab();
    userEvent.type(first, '{arrowdown}');
    expect(second).toHaveFocus();
    userEvent.type(second, '{arrowdown}');
    expect(third).toHaveFocus();
    userEvent.type(third, '{arrowdown}');
    expect(first).toHaveFocus();
    userEvent.type(first, '{arrowup}');
    expect(third).toHaveFocus();
    userEvent.type(third, '{arrowup}');
    expect(second).toHaveFocus();
    userEvent.tab({
      shift: true
    });
    expect(before).toHaveFocus();
    userEvent.tab();
    expect(second).toHaveFocus();
  });
  test('left/right arrow keys', () => {
    render(React.createElement(React.Fragment, null, React.createElement("button", null, "before"), React.createElement(ArrowKeyNavComponent, {
      axis: "horizontal"
    }), React.createElement("button", null, "after")));
    const before = screen.getByText('before');
    const first = screen.getByText('first');
    const second = screen.getByText('second');
    const third = screen.getByText('third');
    userEvent.click(before);
    userEvent.tab();
    userEvent.type(first, '{arrowright}');
    expect(second).toHaveFocus();
    userEvent.type(second, '{arrowright}');
    expect(third).toHaveFocus();
    userEvent.type(third, '{arrowright}');
    expect(first).toHaveFocus();
    userEvent.type(first, '{arrowleft}');
    expect(third).toHaveFocus();
    userEvent.type(third, '{arrowleft}');
    expect(second).toHaveFocus();
    userEvent.tab({
      shift: true
    });
    expect(before).toHaveFocus();
    userEvent.tab();
    expect(second).toHaveFocus();
  });
  test('un-mounting the focused item', async () => {
    const TestComponent = () => {
      const [showMore, setShowMore] = useState(false);
      return React.createElement(React.Fragment, null, React.createElement("button", null, "before"), React.createElement(ArrowKeyNavComponent, null, showMore ? React.createElement(React.Fragment, null, React.createElement("li", {
        tabIndex: -1
      }, "more stuff"), React.createElement("li", {
        tabIndex: -1,
        onClick: () => setShowMore(false)
      }, "less")) : React.createElement("li", {
        tabIndex: -1,
        onClick: () => setShowMore(true)
      }, "more")));
    };

    render(React.createElement(TestComponent, null));
    const before = screen.getByText('before');
    const more = screen.getByText('more');
    userEvent.click(before);
    userEvent.tab();
    expect(more).toHaveFocus();
    userEvent.type(more, '{enter}');
    const moreStuff = screen.getByText('more stuff');
    await waitFor(() => expect(moreStuff).toHaveFocus());
    userEvent.type(moreStuff, '{arrowdown}');
    expect(screen.getByText('less')).toHaveFocus();
  });
  test('Menu: focus landed on container after tab, moves to first item', () => {
    render(React.createElement(ArrowKeyNavComponent, null));
    const list = screen.getByRole('list');
    const first = screen.getByText('first');
    list.focus();
    expect(first).toHaveFocus();
    userEvent.type(first, '{arrowdown}');
    expect(screen.getByText('second')).toHaveFocus();
  });
  test('Menu: focus landed on container after click, stays there', () => {
    const globalMatches = Element.prototype.matches;
    Element.prototype.matches = jest.fn(() => false);
    render(React.createElement(ArrowKeyNavComponent, null));
    const list = screen.getByRole('list');
    list.focus();
    expect(screen.getByText('first')).not.toHaveFocus();
    userEvent.type(list, '{arrowdown}');
    expect(screen.getByText('first')).toHaveFocus();
    Element.prototype.matches = globalMatches;
  });
});
//# sourceMappingURL=useArrowKeyNav.spec.js.map