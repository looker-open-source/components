/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/test-utils';
import { mockTreeData } from './fixtures';
import { TreeResults } from './TreeResults';

describe('TreeResults', () => {
  test('loading', async () => {
    renderWithTheme(<TreeResults searchInputValue="" />);
    expect(screen.queryByRole('treeitem')).not.toBeInTheDocument();
    expect(screen.getByTestId('loading-spinner')).toBeVisible();
  });

  test('search', async () => {
    const { rerender } = renderWithTheme(
      <TreeResults searchInputValue="" tree={mockTreeData} />
    );
    expect(screen.getAllByRole('treeitem')).toHaveLength(2);

    rerender(<TreeResults searchInputValue="leaf" tree={mockTreeData} />);
    expect(screen.getAllByRole('treeitem')).toHaveLength(8);
  });

  test('no results', async () => {
    renderWithTheme(
      <TreeResults searchInputValue="category" tree={mockTreeData} />
    );
    expect(screen.queryByRole('treeitem')).not.toBeInTheDocument();
    expect(screen.getByText('No matching fields')).toBeVisible();
  });

  test('open then close nodes', async () => {
    renderWithTheme(<TreeResults searchInputValue="" tree={mockTreeData} />);
    expect(screen.getAllByRole('treeitem')).toHaveLength(2);
    const root1 = screen.getByText('Root1');
    fireEvent.click(root1);
    expect(screen.getAllByRole('treeitem')).toHaveLength(4);
    const someSection = screen.getByText('some section');
    fireEvent.click(someSection);
    expect(screen.getAllByRole('treeitem')).toHaveLength(6);
    fireEvent.click(someSection);
    expect(screen.getAllByRole('treeitem')).toHaveLength(4);
    fireEvent.click(root1);
    expect(screen.getAllByRole('treeitem')).toHaveLength(2);
  });

  test('search then close and open a node', async () => {
    renderWithTheme(
      <TreeResults searchInputValue="leaf" tree={mockTreeData} />
    );
    expect(screen.getAllByRole('treeitem')).toHaveLength(8);
    fireEvent.click(screen.getByText('some section'));
    expect(screen.getAllByRole('treeitem')).toHaveLength(6);
    fireEvent.click(screen.getByText('some section'));
    expect(screen.getAllByRole('treeitem')).toHaveLength(8);
  });
});
