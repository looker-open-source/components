import 'jest-styled-components';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ComponentsProvider } from '@looker/components-providers';
import { renderWithTheme } from '@looker/components-test-utils';
import { Favorite } from '@styled-icons/material';
import { act, fireEvent, screen } from '@testing-library/react';
import { Tooltip } from '../Tooltip';
import { IconButton } from './IconButton';
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

describe('IconButton', () => {
  test('toggle applies aria-pressed', () => {
    renderWithTheme(React.createElement(IconButton, {
      label: "Test",
      icon: React.createElement(Favorite, null),
      toggle: true
    }));
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-pressed');
  });
  test('aria-pressed not present without toggle', () => {
    renderWithTheme(React.createElement(IconButton, {
      label: "Test",
      icon: React.createElement(Favorite, null)
    }));
    const button = screen.getByRole('button');
    expect(button).not.toHaveAttribute('aria-pressed');
  });
  test('allows for ARIA attributes', () => {
    renderWithTheme(React.createElement(IconButton, {
      label: "Test",
      icon: React.createElement(Favorite, null),
      "aria-haspopup": true
    }));
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-haspopup');
  });
  test('accepts events', async () => {
    const fauxMouseEnter = jest.fn();
    const fauxClick = jest.fn();
    renderWithTheme(React.createElement(IconButton, {
      label: "Test",
      icon: React.createElement(Favorite, null),
      onMouseEnter: fauxMouseEnter,
      onClick: fauxClick
    }));
    const button = screen.getByRole('button');
    fireEvent.mouseOver(button);
    expect(fauxMouseEnter).toHaveBeenCalledTimes(1);
    fireEvent.mouseOut(button);
    runTimers();
    fireEvent.click(button);
    expect(fauxClick).toHaveBeenCalledTimes(1);
  });
  test('has built-in tooltip', async () => {
    const label = 'Mark as my Favorite';
    renderWithTheme(React.createElement(IconButton, {
      label: label,
      icon: React.createElement(Favorite, null)
    }));
    const notTooltip = screen.getByText(label);
    expect(notTooltip).toBeInTheDocument();
    const icon = screen.getByText(label);
    fireEvent.mouseOver(icon);
    runTimers();
    const tooltip = screen.getAllByText(label);
    expect(tooltip).toHaveLength(2);
    expect(tooltip[1]).toBeVisible();
    fireEvent.mouseOut(icon);
    runTimers();
  });
  test('tooltipDisabled actually disables tooltip', () => {
    const label = 'Mark as my Favorite';
    renderWithTheme(React.createElement(IconButton, {
      id: "test-iconButton",
      tooltipDisabled: true,
      label: label,
      icon: React.createElement(Favorite, null)
    }));
    fireEvent.mouseOver(screen.getAllByText(label)[0]);
    runTimers();
    const notTooltip = screen.queryAllByText(label);
    expect(notTooltip.length).toEqual(1);
  });
  test('built-in tooltip defers to outer tooltip', async () => {
    const tooltip = 'Add to favorites';
    const label = 'Mark as my Favorite';
    renderWithTheme(React.createElement(Tooltip, {
      content: tooltip
    }, React.createElement(IconButton, {
      label: label,
      icon: React.createElement(Favorite, null)
    })));
    const button = screen.getByRole('button');
    fireEvent.mouseOver(button);
    runTimers();
    expect(screen.getByText(tooltip)).toBeInTheDocument();
    const iconLabel = screen.getByText(label);
    expect(iconLabel).toBeInTheDocument();
    const tooltipContents = screen.getByText(tooltip);
    expect(tooltipContents).toBeVisible();
    fireEvent.mouseOut(button);
    runTimers();
  });
  test('built-in tooltip respects text-align, width props', async () => {
    const label = 'Mark as my Favorite';
    renderWithTheme(React.createElement(IconButton, {
      tooltipWidth: "4rem",
      tooltipTextAlign: "right",
      label: label,
      icon: React.createElement(Favorite, null)
    }));
    const trigger = screen.getByText(label);
    fireEvent.mouseOver(trigger);
    runTimers();
    const tooltip = screen.queryAllByText(label);
    expect(tooltip[0]).toBeVisible();
    expect(tooltip[0]).toHaveStyleRule('max-width', '4rem');
    expect(tooltip[0]).toHaveStyleRule('text-align', 'right');
    fireEvent.mouseOut(trigger);
    runTimers();
  });
  test('toggleBackground renders a background', () => {
    renderWithTheme(React.createElement(IconButton, {
      label: "Test",
      toggle: true,
      toggleBackground: true,
      icon: React.createElement(Favorite, null)
    }));
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('background-color: #F3F2FF;');
  });
  test('toggleBackground with shape renders a round background', () => {
    renderWithTheme(React.createElement(IconButton, {
      icon: React.createElement(Favorite, null),
      label: "Test",
      shape: "round",
      toggle: true,
      toggleBackground: true
    }));
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('background-color: #F3F2FF;');
    expect(button).toHaveStyle('border-radius: 100%;');
    expect(button).toHaveStyle('color: #6c43e0;');
  });
  test('toggleColor', () => {
    renderWithTheme(React.createElement(IconButton, {
      label: "Test",
      toggle: true,
      toggleBackground: true,
      toggleColor: "calculation",
      icon: React.createElement(Favorite, null)
    }));
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('background-color: #eaf4e8;');
    expect(button).toHaveStyle('color: #319220;');
  });
  test('toggleColor + :active', () => {
    renderWithTheme(React.createElement(IconButton, {
      className: "active",
      icon: React.createElement(Favorite, null),
      label: "Test",
      toggle: true,
      toggleColor: "calculation"
    }));
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('color: #319220');
  });
  describe('ripple effect', () => {
    test('default', () => {
      renderWithTheme(React.createElement(IconButton, {
        icon: React.createElement(Favorite, null),
        label: "Test"
      }));
      const button = screen.getByRole('button');
      expect(button).not.toHaveClass('bg-on fg-in');
      expect(button).toHaveStyle({
        '--ripple-color': '#71767a',
        '--ripple-scale-end': '1',
        '--ripple-scale-start': '0.1',
        '--ripple-size': '100%',
        '--ripple-translate': '0, 0'
      });
      fireEvent.focus(button);
      expect(button).toHaveClass('bg-on');
      fireEvent.mouseDown(button);
      expect(button).toHaveClass('bg-on fg-in');
      fireEvent.mouseUp(button);
      runTimers();
      expect(button).toHaveClass('bg-on fg-out');
      runTimers();
      expect(button).toHaveClass('bg-on');
      fireEvent.blur(button);
      expect(button).not.toHaveClass('bg-on fg-in');
    });
    test('toggle', () => {
      renderWithTheme(React.createElement(IconButton, {
        icon: React.createElement(Favorite, null),
        label: "Test",
        toggle: true
      }));
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({
        '--ripple-color': '#6C43E0'
      });
    });
    test('toggleColor', () => {
      renderWithTheme(React.createElement(IconButton, {
        icon: React.createElement(Favorite, null),
        label: "Test",
        toggle: true,
        toggleColor: "measure"
      }));
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({
        '--ripple-color': '#C2772E'
      });
    });
    test('square', () => {
      const globalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
      Element.prototype.getBoundingClientRect = jest.fn(() => {
        return {
          bottom: 0,
          height: 30,
          left: 0,
          right: 0,
          toJSON: jest.fn(),
          top: 0,
          width: 360,
          x: 0,
          y: 0
        };
      });
      renderWithTheme(React.createElement(IconButton, {
        icon: React.createElement(Favorite, null),
        label: "Test",
        shape: "square"
      }));
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({
        '--ripple-color': '#71767a',
        '--ripple-scale-end': '1.414',
        '--ripple-scale-start': '0.1',
        '--ripple-size': '100%',
        '--ripple-translate': '0, 0'
      });
      Element.prototype.getBoundingClientRect = globalGetBoundingClientRect;
    });
  });
  test('No useLayoutEffect warning', () => {
    ReactDOMServer.renderToString(React.createElement(ComponentsProvider, null, React.createElement(IconButton, {
      icon: React.createElement(Favorite, null),
      label: "Test"
    })));
  });
});
//# sourceMappingURL=IconButton.spec.js.map