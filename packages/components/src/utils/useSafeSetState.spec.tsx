/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { renderHook, act } from '@testing-library/react-hooks';
import { useSafeSetState } from '.';

test('stores and updates state', () => {
  const { result } = renderHook(() => useSafeSetState<string>('test value'));

  const [_, safeSetState] = result.current;

  expect(result.current[0]).toEqual('test value');

  act(() => {
    safeSetState('a different test value');
  });

  expect(result.current[0]).toEqual('a different test value');
});

test('does not update state after component unmounts', () => {
  const { result, unmount } = renderHook(() =>
    useSafeSetState<string>('original test value')
  );
  const [_, safeSetState] = result.current;

  expect(result.current[0]).toEqual('original test value');

  unmount();

  act(() => {
    // setState call ignored after hook unmounts
    safeSetState('a different test value');
  });

  expect(result.current[0]).toEqual('original test value');
});
