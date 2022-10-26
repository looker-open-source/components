import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { Spinner } from './Spinner';
describe('Spinner', () => {
  test('A default spinner', () => {
    renderWithTheme(React.createElement(Spinner, null));
    expect(screen.getByTestId('loading-spinner'));
  });
  test('can have n number of markers', () => {
    renderWithTheme(React.createElement(Spinner, {
      markers: 20
    }));
    const spinner = screen.getByTestId('loading-spinner');
    const markers = spinner.querySelectorAll('div div');
    expect(markers.length).toEqual(20);
  });
  test('markers radius can be adjusted', () => {
    renderWithTheme(React.createElement(Spinner, {
      markerRadius: 30
    }));
    const spinner = screen.getByTestId('loading-spinner');
    const marker = spinner.querySelector('div div');
    expect(marker).toHaveStyle('border-radius: 30px');
  });
  test('speed can be set', () => {
    renderWithTheme(React.createElement(Spinner, {
      speed: 2000
    }));
    const spinner = screen.getByTestId('loading-spinner');
    const marker = spinner.querySelector('div div');
    expect(marker).toHaveAttribute('speed', '2000');
  });
  test('can change marker color', () => {
    renderWithTheme(React.createElement(Spinner, {
      color: "red"
    }));
    const spinner = screen.getByTestId('loading-spinner');
    const marker = spinner.querySelector('div div');
    expect(marker).toHaveStyle('background-color: red');
  });
  test('can be resized', () => {
    renderWithTheme(React.createElement(Spinner, {
      size: 200
    }));
    expect(screen.getByTestId('loading-spinner')).toHaveStyle('width: 200px');
  });
});
//# sourceMappingURL=Spinner.spec.js.map