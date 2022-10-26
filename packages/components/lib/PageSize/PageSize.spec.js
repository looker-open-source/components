import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { PageSize } from './PageSize';
const onChange = jest.fn();
afterEach(() => {
  onChange.mockClear();
});
describe('PageSize', () => {
  test('defaults', () => {
    renderWithTheme(React.createElement(PageSize, {
      value: 10,
      total: 1000,
      onChange: onChange
    }));
    const select = screen.getByDisplayValue('10');
    expect(screen.getByText('of 1000')).toBeInTheDocument();
    fireEvent.click(select);
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('50')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    fireEvent.click(screen.getByText('50'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  test('custom options prop', () => {
    renderWithTheme(React.createElement(PageSize, {
      value: 20,
      total: 1000,
      options: [20, 40, 60],
      onChange: onChange
    }));
    const select = screen.getByDisplayValue('20');
    expect(screen.getByText('of 1000')).toBeInTheDocument();
    fireEvent.click(select);
    expect(screen.getByText('20')).toBeInTheDocument();
    expect(screen.getByText('40')).toBeInTheDocument();
    expect(screen.getByText('60')).toBeInTheDocument();
    fireEvent.click(screen.getByText('40'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  test('does not load when smallest option >= total', () => {
    renderWithTheme(React.createElement(PageSize, {
      value: 100,
      total: 5,
      options: [100, 200, 300],
      onChange: jest.fn()
    }));
    expect(screen.queryByText('Display')).not.toBeInTheDocument();
    expect(screen.queryByDisplayValue('100')).not.toBeInTheDocument();
    expect(screen.queryByText('of 5')).not.toBeInTheDocument();
  });
  test('alwaysVisible', () => {
    renderWithTheme(React.createElement(PageSize, {
      value: 100,
      total: 5,
      options: [100, 200, 300],
      onChange: jest.fn(),
      alwaysVisible: true
    }));
    const select = screen.getByDisplayValue('5');
    expect(select).toBeInTheDocument();
    expect(screen.getByText('of 5')).toBeInTheDocument();
    fireEvent.click(select);
    expect(screen.queryByText('100')).not.toBeInTheDocument();
    expect(screen.queryByText('200')).not.toBeInTheDocument();
    expect(screen.queryByText('300')).not.toBeInTheDocument();
  });
});
//# sourceMappingURL=PageSize.spec.js.map