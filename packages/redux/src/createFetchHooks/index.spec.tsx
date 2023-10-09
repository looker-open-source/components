/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ComponentProps } from 'react';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { createFetchHooks } from '.';
import { Store } from '../Store';

const { useSlice } = createFetchHooks({
  fetch: ({ status }: ComponentProps<typeof Test>) => {
    if (status) {
      if ([401, 499].includes(status)) {
        throw new Response(`Error: ${status}`, {
          status,
        });
      } else {
        throw new Error(`Error: ${status}`);
      }
    }
    return Promise.resolve(true);
  },
  initialState: false,
  name: 'test',
});

const TestInner = (props: ComponentProps<typeof Test>) => {
  const [state, actions] = useSlice();
  return (
    <>
      <div>{JSON.stringify(state)}</div>
      <button onClick={() => actions.fetch(props)}>click</button>
    </>
  );
};

const Test = (props: { status?: 401 | 499 | 500 }) => {
  return (
    <Store>
      <TestInner {...props} />
    </Store>
  );
};

describe('createFetchHooks', () => {
  it('initialState', () => {
    const r = render(<Test />);
    expect(r.getByText(/"data":false/)).toBeInTheDocument();
  });

  it('fetch', async () => {
    const r = render(<Test />);
    fireEvent.click(r.getByText('click'));
    expect(await r.findByText(/"data":true/)).toBeInTheDocument();
  });

  it('error: 401', async () => {
    const r = render(<Test status={401} />);
    fireEvent.click(r.getByText('click'));
    expect(await r.findByText(/"expired":true/)).toBeInTheDocument();
  });

  it('error: 499', async () => {
    const r = render(<Test status={499} />);
    fireEvent.click(r.getByText('click'));
    expect(await r.findByText(/"error":null/)).toBeInTheDocument();
  });

  it('error: *', async () => {
    const r = render(<Test status={500} />);
    fireEvent.click(r.getByText('click'));
    expect(await r.findByText(/"error":"Error: 500"/)).toBeInTheDocument();
  });
});
