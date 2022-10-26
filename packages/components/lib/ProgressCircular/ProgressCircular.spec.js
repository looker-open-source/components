import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { ProgressCircular } from './ProgressCircular';
describe('ProgressCircular', () => {
  test('renders default behavior', () => {
    renderWithTheme(React.createElement(ProgressCircular, null));
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
  test('renders progress of 25', () => {
    renderWithTheme(React.createElement(ProgressCircular, {
      progress: 25
    }));
    expect(screen.queryByRole('progressbar')).toHaveAttribute('aria-valuenow', '25');
  });
  test('renders progress of 0', () => {
    renderWithTheme(React.createElement(ProgressCircular, {
      progress: 0
    }));
    expect(screen.queryByRole('progressbar')).toHaveAttribute('aria-valuemin', '0');
    expect(screen.queryByRole('progressbar')).not.toHaveAttribute('aria-valuenow');
  });
  test('renders progress of 50', () => {
    renderWithTheme(React.createElement(ProgressCircular, {
      progress: 50
    }));
    expect(screen.queryByRole('progressbar')).toHaveAttribute('aria-valuenow', '50');
  });
  test('renders progress of 75', () => {
    renderWithTheme(React.createElement(ProgressCircular, {
      progress: 75
    }));
    expect(screen.queryByRole('progressbar')).toHaveAttribute('aria-valuenow', '75');
  });
  test('renders progress of 100', () => {
    renderWithTheme(React.createElement(ProgressCircular, {
      progress: 100
    }));
    expect(screen.queryByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
  });
  test('renders different sizes', () => {
    renderWithTheme(React.createElement(ProgressCircular, {
      size: "xsmall"
    }));
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
//# sourceMappingURL=ProgressCircular.spec.js.map