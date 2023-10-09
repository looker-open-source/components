/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { setQueryProps } from './VisualizationPlayground';

describe('Utility: setQueryProps', () => {
  it('sets dashboard prop when fetchBy = "dashboard" and tabId = "live"', () => {
    const queryProps = setQueryProps({
      fetchBy: 'dashboard',
      tabId: 'live',
      queryIdentifier: 'qZ3N24',
      dashboardId: 58,
    });

    expect(queryProps).toEqual({ dashboard: 58 });
  });

  it('sets query prop when fetchBy = "query" and tabId = "live"', () => {
    const queryProps = setQueryProps({
      fetchBy: 'query',
      tabId: 'live',
      queryIdentifier: 'qZ3N24',
      dashboardId: 58,
    });

    expect(queryProps).toEqual({ query: 'qZ3N24' });
  });

  it('returns mock query id value when tabId = "mock"', () => {
    const queryProps = setQueryProps({
      fetchBy: 'dashboard',
      tabId: 'mock',
      queryIdentifier: 'qZ3N24',
      dashboardId: 58,
    });

    expect(queryProps).toEqual({ query: 'mock-query-slug' });
  });
});
