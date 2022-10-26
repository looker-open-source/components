import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import { renderWithTheme } from '@looker/components-test-utils';
import { act, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { useRipple } from './useRipple';

const RippleComponent = props => {
  const {
    callbacks: {
      startBG,
      endBG,
      startFG,
      endFG
    },
    className,
    style
  } = useRipple(props);
  return React.createElement("div", null, React.createElement("div", {
    "data-testid": "startBG",
    onClick: startBG
  }), React.createElement("div", {
    "data-testid": "endBG",
    onClick: endBG
  }), React.createElement("div", {
    "data-testid": "startFG",
    onClick: startFG
  }), React.createElement("div", {
    "data-testid": "endFG",
    onClick: endFG
  }), React.createElement("div", {
    "data-testid": "className"
  }, className), React.createElement("div", {
    style: style
  }, "style"));
};

beforeEach(() => {
  jest.useFakeTimers();
});
afterEach(() => {
  act(() => {
    jest.runOnlyPendingTimers();
  });
  jest.useRealTimers();
});

const runTimers = () => act(() => {
  jest.runOnlyPendingTimers();
});

describe('useRipple', () => {
  test('animation values', () => {
    renderWithTheme(React.createElement(RippleComponent, null));
    expect(screen.getByText('style')).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-overflow': 'visible',
      '--ripple-scale-end': '1',
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0'
    });
  });
  test('bounded animation values', () => {
    renderWithTheme(React.createElement(RippleComponent, {
      bounded: true,
      height: 30,
      width: 360
    }));
    expect(screen.getByText('style')).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-overflow': 'hidden',
      '--ripple-scale-end': '12.041594578792294',
      '--ripple-scale-start': '1',
      '--ripple-size': '30px',
      '--ripple-translate': '165px, 0'
    });
  });
  test('color animation values', () => {
    renderWithTheme(React.createElement(RippleComponent, {
      color: "key"
    }));
    expect(screen.getByText('style')).toHaveStyle({
      '--ripple-color': '#6C43E0',
      '--ripple-scale-end': '1',
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0'
    });
  });
  test('theme setting brandAnimation false', () => {
    renderWithTheme(React.createElement(ExtendComponentsThemeProvider, {
      themeCustomizations: {
        defaults: {
          brandAnimation: false
        }
      }
    }, React.createElement(RippleComponent, {
      color: "key"
    })));
    expect(screen.getByText('style')).toHaveStyle({
      '--ripple-color': '#6C43E0',
      '--ripple-scale-end': '1',
      '--ripple-scale-start': '1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0'
    });
  });
  test('callbacks control className', () => {
    renderWithTheme(React.createElement(RippleComponent, null));
    expect(screen.getByTestId('className')).toHaveTextContent('');
    fireEvent.click(screen.getByTestId('startBG'));
    expect(screen.getByTestId('className')).toHaveTextContent('bg-on');
    fireEvent.click(screen.getByTestId('startFG'));
    expect(screen.getByTestId('className')).toHaveTextContent('bg-on fg-in');
    fireEvent.click(screen.getByTestId('endFG'));
    expect(screen.getByTestId('className')).toHaveTextContent('bg-on fg-in');
    runTimers();
    expect(screen.getByTestId('className')).toHaveTextContent('bg-on fg-out');
    runTimers();
    expect(screen.getByTestId('className')).toHaveTextContent('bg-on');
    fireEvent.click(screen.getByTestId('endBG'));
    expect(screen.getByTestId('className')).toHaveTextContent('');
  });
  test('long press', () => {
    renderWithTheme(React.createElement(RippleComponent, null));
    expect(screen.getByTestId('className')).toHaveTextContent('');
    fireEvent.click(screen.getByTestId('startBG'));
    fireEvent.click(screen.getByTestId('startFG'));
    expect(screen.getByTestId('className')).toHaveTextContent('bg-on fg-in');
    runTimers();
    fireEvent.click(screen.getByTestId('endFG'));
    expect(screen.getByTestId('className')).toHaveTextContent('bg-on fg-out');
  });
  test('tab keyup', () => {
    renderWithTheme(React.createElement(RippleComponent, null));
    fireEvent.click(screen.getByTestId('startBG'));
    fireEvent.click(screen.getByTestId('endFG'));
    expect(screen.getByTestId('className')).toHaveTextContent('bg-on');
  });
  test('"double on" background behavior', () => {
    renderWithTheme(React.createElement(RippleComponent, null));
    expect(screen.getByTestId('className')).toHaveTextContent('');
    fireEvent.click(screen.getByTestId('startBG'));
    expect(screen.getByTestId('className')).toHaveTextContent('bg-on');
    fireEvent.click(screen.getByTestId('startBG'));
    expect(screen.getByTestId('className')).toHaveTextContent('bg-on');
    fireEvent.click(screen.getByTestId('endBG'));
    expect(screen.getByTestId('className')).toHaveTextContent('bg-on');
    fireEvent.click(screen.getByTestId('endBG'));
    expect(screen.getByTestId('className')).toHaveTextContent('');
  });
});
//# sourceMappingURL=useRipple.spec.js.map