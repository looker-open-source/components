/*

 MIT License

 Copyright (c) 2023 Google LLC

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '@looker/components-test-utils';
import { TreeSelect } from './TreeSelect';
import { Basic, ShortcutTree, Windowing, WithoutDropdown } from './fixtures';

describe('TreeSelect', () => {
  test('without dropdown, clicking', () => {
    const onSelectedFieldChangeMock = jest.fn();
    renderWithTheme(
      <WithoutDropdown onSelectedFieldChange={onSelectedFieldChangeMock} />
    );
    const orders = screen.getByText('Orders');
    expect(orders).toBeVisible();
    expect(screen.getByText('Users')).toBeVisible();
    expect(screen.getByRole('listbox')).toHaveStyleRule('min-width', 'auto');

    // Open 1st level
    fireEvent.click(orders);
    const createdDate = screen.getByText('Created Date');
    expect(createdDate).toBeVisible();

    // Open 2nd level
    fireEvent.click(createdDate);
    expect(screen.getByText('Created Month')).toBeVisible();

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'zip' } });

    // Orders filtered out but Users is showing
    expect(screen.queryByText('Orders')).not.toBeInTheDocument();
    expect(screen.getByText('Users')).toBeVisible();
    const zip = screen.getByText('Zip');
    expect(zip).toBeVisible();
    // Zip is highlighted
    expect(zip).toHaveStyle({ textDecoration: 'underline' });
    fireEvent.click(zip);
    expect(onSelectedFieldChangeMock.mock.calls[0][0]).toMatchObject({
      field: 'users.zip',
    });
  });

  test('without dropdown, keyboard navigating', () => {
    const onSelectedFieldChangeMock = jest.fn();
    renderWithTheme(
      <WithoutDropdown onSelectedFieldChange={onSelectedFieldChangeMock} />
    );
    userEvent.tab();

    // Highlight orders
    userEvent.keyboard('{arrowdown}');
    // Open orders
    userEvent.keyboard('{enter}');
    // Highlight created date
    userEvent.keyboard('{arrowdown}');
    // Open created date
    userEvent.keyboard('{enter}');
    expect(screen.getByText('Created Month')).toBeVisible();

    userEvent.keyboard('zip');
    // Highlight zip
    userEvent.keyboard('{arrowdown}');
    userEvent.keyboard('{arrowdown}');
    // Select zip
    userEvent.keyboard('{enter}');
    expect(onSelectedFieldChangeMock.mock.calls[0][0]).toMatchObject({
      field: 'users.zip',
    });
  });

  test('with dropdown, clicking', () => {
    const onSelectedFieldChangeMock = jest.fn();
    renderWithTheme(
      <Basic onSelectedFieldChange={onSelectedFieldChangeMock} />
    );
    // Tree doesn't show until search input is clicked
    expect(screen.queryByText('Orders')).not.toBeInTheDocument();
    const input = screen.getByRole('textbox');
    fireEvent.click(input);
    expect(screen.getByRole('listbox')).not.toHaveStyleRule('minWidth');

    // Drill down
    fireEvent.click(screen.getByText('Orders'));
    fireEvent.click(screen.getByText('Created Date'));
    expect(screen.getByText('Created Month')).toBeVisible();

    fireEvent.change(input, { target: { value: 'zip' } });
    fireEvent.click(screen.getByText('Zip'));
    expect(onSelectedFieldChangeMock.mock.calls[0][0]).toMatchObject({
      field: 'users.zip',
    });
  });

  test('with dropdown, keyboard navigating', () => {
    const onSelectedFieldChangeMock = jest.fn();
    renderWithTheme(
      <Basic onSelectedFieldChange={onSelectedFieldChangeMock} />
    );
    // Tree doesn't show until search input is focused + arrowdown
    expect(screen.queryByText('Orders')).not.toBeInTheDocument();
    userEvent.tab();

    // Highlight orders
    userEvent.keyboard('{arrowdown}');
    // Open orders
    userEvent.keyboard('{enter}');
    // Highlight created date
    userEvent.keyboard('{arrowdown}');
    // Open created date
    userEvent.keyboard('{enter}');
    expect(screen.getByText('Created Month')).toBeVisible();

    userEvent.keyboard('zip');
    // Highlight zip
    userEvent.keyboard('{arrowdown}');
    userEvent.keyboard('{arrowdown}');
    // Select zip
    userEvent.keyboard('{enter}');
    expect(onSelectedFieldChangeMock.mock.calls[0][0]).toMatchObject({
      field: 'users.zip',
    });
  });

  test('with dropdown, clear search on close', () => {
    const onSelectedFieldChangeMock = jest.fn();
    renderWithTheme(
      <Basic onSelectedFieldChange={onSelectedFieldChangeMock} />
    );
    userEvent.tab();
    userEvent.keyboard('zip');
    expect(screen.getByRole('textbox')).toHaveValue('zip');
    // Close dropdown
    userEvent.keyboard('{escape}');
    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  test('no matching fields', () => {
    const onSelectedFieldChangeMock = jest.fn();
    renderWithTheme(
      <Basic onSelectedFieldChange={onSelectedFieldChangeMock} />
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'foo' } });
    expect(screen.getByText('No matching fields')).toBeVisible();
    // Close dropdown
    userEvent.keyboard('{escape}');
  });

  test('no matching fields, without dropdown', () => {
    const onSelectedFieldChangeMock = jest.fn();
    renderWithTheme(
      <WithoutDropdown onSelectedFieldChange={onSelectedFieldChangeMock} />
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'foo' } });
    expect(screen.getByText('No matching fields')).toBeVisible();
  });

  test('shortcut tree', () => {
    const onSelectedFieldChangeMock = jest.fn();
    renderWithTheme(
      <ShortcutTree onSelectedFieldChange={onSelectedFieldChangeMock} />
    );
    const input = screen.getByRole('textbox');
    fireEvent.click(input);
    const doNotFilter = screen.getByText('Do Not Filter');
    expect(doNotFilter).toBeVisible();
    expect(screen.getByText('Some Field')).toBeVisible();

    fireEvent.click(doNotFilter);
    expect(onSelectedFieldChangeMock).toHaveBeenCalledWith({
      fieldOptions: { label_short: '', view_label: '' },
    });

    onSelectedFieldChangeMock.mockClear();
    fireEvent.click(input);
    fireEvent.click(screen.getByText('Some Field'));
    expect(onSelectedFieldChangeMock).toHaveBeenCalledWith({
      field: 'some_view.some_field',
      fieldOptions: { label_short: 'Some Field', view_label: 'Some View' },
    });
  });

  test('windowing', () => {
    const onSelectedFieldChangeMock = jest.fn();
    renderWithTheme(
      <Windowing onSelectedFieldChange={onSelectedFieldChangeMock} />
    );
    const input = screen.getByRole('textbox');
    fireEvent.click(input);
    // js-dom doesn't do layout so only the first item + 5 buffer are rendered
    const items = screen.getAllByRole('treeitem');
    expect(items).toHaveLength(6);

    // Top 2 items are shortcut tree, 3rd is the 1st section
    fireEvent.click(items[2]);
    // Now the 4th item is a field
    fireEvent.click(screen.getAllByRole('treeitem')[3]);
    expect(onSelectedFieldChangeMock).toHaveBeenCalled();
  });

  test('loading/hideLoading', () => {
    const { rerender } = renderWithTheme(
      <TreeSelect withDropdown={false} onSelectedFieldChange={jest.fn} />
    );
    expect(screen.getByTestId('loading-spinner')).toBeVisible();
    rerender(
      <TreeSelect
        withDropdown={false}
        hideLoading
        onSelectedFieldChange={jest.fn}
      />
    );
    expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument();
  });
});
