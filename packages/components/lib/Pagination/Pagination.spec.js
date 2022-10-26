import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { Pagination } from './Pagination';
describe('Pagination', () => {
  test('No pagination when there are 1 or less pages', () => {
    renderWithTheme(React.createElement(React.Fragment, null, React.createElement(Pagination, {
      current: 5,
      pages: 1,
      onChange: jest.fn()
    }), React.createElement(Pagination, {
      current: 5,
      pages: 0,
      onChange: jest.fn()
    })));
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
  test('alwaysVisible', () => {
    renderWithTheme(React.createElement(Pagination, {
      current: 5,
      pages: 1,
      onChange: jest.fn(),
      alwaysVisible: true
    }));
    expect(screen.getAllByRole('button').length).toEqual(4);
  });
  test('All pagination buttons enabled when current > 1 and current < pages', () => {
    const onPageChange = jest.fn();
    renderWithTheme(React.createElement(Pagination, {
      current: 5,
      pages: 10,
      onChange: onPageChange
    }));
    fireEvent.click(screen.getByText('First page of results'));
    expect(onPageChange).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('Previous page of results'));
    expect(onPageChange).toHaveBeenCalledTimes(2);
    fireEvent.click(screen.getByText('Next page of results'));
    expect(onPageChange).toHaveBeenCalledTimes(3);
    fireEvent.click(screen.getByText('Last page of results'));
    expect(onPageChange).toHaveBeenCalledTimes(4);
  });
  test('First page and previous page buttons are disabled when current === 1', () => {
    const onPageChange = jest.fn();
    renderWithTheme(React.createElement(Pagination, {
      current: 1,
      pages: 10,
      onChange: onPageChange
    }));
    fireEvent.click(screen.getByText('First page of results'));
    expect(onPageChange).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getByText('Previous page of results'));
    expect(onPageChange).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getByText('Next page of results'));
    expect(onPageChange).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('Last page of results'));
    expect(onPageChange).toHaveBeenCalledTimes(2);
  });
  test('First page and previous page buttons are enabled when current === 2', () => {
    const onPageChange = jest.fn();
    renderWithTheme(React.createElement(Pagination, {
      current: 2,
      pages: 10,
      onChange: onPageChange
    }));
    fireEvent.click(screen.getByText('First page of results'));
    expect(onPageChange).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('Previous page of results'));
    expect(onPageChange).toHaveBeenCalledTimes(2);
    fireEvent.click(screen.getByText('Next page of results'));
    expect(onPageChange).toHaveBeenCalledTimes(3);
    fireEvent.click(screen.getByText('Last page of results'));
    expect(onPageChange).toHaveBeenCalledTimes(4);
  });
  test('Last page and next page buttons are enabled when current === (pages - 1)', () => {
    const onPageChange = jest.fn();
    renderWithTheme(React.createElement(Pagination, {
      current: 9,
      pages: 10,
      onChange: onPageChange
    }));
    fireEvent.click(screen.getByText('First page of results'));
    expect(onPageChange).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('Previous page of results'));
    expect(onPageChange).toHaveBeenCalledTimes(2);
    fireEvent.click(screen.getByText('Next page of results'));
    expect(onPageChange).toHaveBeenCalledTimes(3);
    fireEvent.click(screen.getByText('Last page of results'));
    expect(onPageChange).toHaveBeenCalledTimes(4);
  });
  test('Last page and next page buttons are disabled when current === pages', () => {
    const onPageChange = jest.fn();
    renderWithTheme(React.createElement(Pagination, {
      current: 10,
      pages: 10,
      onChange: onPageChange
    }));
    fireEvent.click(screen.getByText('First page of results'));
    expect(onPageChange).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('Previous page of results'));
    expect(onPageChange).toHaveBeenCalledTimes(2);
    fireEvent.click(screen.getByText('Next page of results'));
    expect(onPageChange).toHaveBeenCalledTimes(2);
    fireEvent.click(screen.getByText('Last page of results'));
    expect(onPageChange).toHaveBeenCalledTimes(2);
  });
});
//# sourceMappingURL=Pagination.spec.js.map