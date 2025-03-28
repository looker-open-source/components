/*

 MIT License

 Copyright (c) 2024 Google LLC

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

  // Extract the error message if error is an instance of Error
  const errorMessage =
    state.error instanceof Error ? state.error.message : state.error;

  return (
    <>
      <div>
        {JSON.stringify({
          ...state,
          error: errorMessage,
        })}
      </div>
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

  it('completed, initial state', async () => {
    const r = render(<Test />);
    expect(r.getByText(/"completed":false/)).toBeInTheDocument();
  });

  it('completed, initial fetch should set completed to true', async () => {
    const r = render(<Test />);
    fireEvent.click(r.getByText('click'));
    expect(r.getByText(/"completed":false/)).toBeInTheDocument();
    expect(await r.findByText(/"completed":false/)).toBeInTheDocument();
  });

  it('completed, subsequent fetch should reset completed to false then follow normal lifecycle', async () => {
    const r = render(<Test />);

    fireEvent.click(r.getByText('click'));
    expect(r.getByText(/"completed":false/)).toBeInTheDocument();
    expect(await r.findByText(/"completed":false/)).toBeInTheDocument();

    fireEvent.click(r.getByText('click'));
    expect(r.getByText(/"completed":false/)).toBeInTheDocument();
    expect(await r.findByText(/"completed":false/)).toBeInTheDocument();
  });
});
