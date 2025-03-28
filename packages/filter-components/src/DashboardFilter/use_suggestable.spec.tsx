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
import type { IAPIMethods } from '@looker/sdk-rtl';
import { useSuggestable } from './use_suggestable';
import { act, renderHook } from '@testing-library/react-hooks';
import { i18nInit } from '../utils';

jest.mock('@looker/sdk', () => ({
  ...jest.requireActual('@looker/sdk'),
  model_fieldname_suggestions: jest.fn((sdk: { get: () => any }) => sdk.get()),
}));

// eslint-disable-next-line import/first
import { model_fieldname_suggestions } from '@looker/sdk';

describe('useSuggestable', () => {
  i18nInit();
  describe('non-fetching', () => {
    it('uses field suggestions if available', () => {
      const suggestions = ['complete', 'pending', 'cancelled'];
      const { result } = renderHook(() =>
        useSuggestable({
          filter: {
            name: 'Status',
            field: { suggestions },
          },
        })
      );
      expect(result.current.suggestableProps.suggestions).toEqual(suggestions);
    });

    it('uses field enumerations if available', () => {
      const enumerations = [
        { label: 'complete', value: 'complete' },
        { label: 'pending', value: 'pending' },
        { label: 'cancelled', value: 'cancelled' },
      ];
      const { result } = renderHook(() =>
        useSuggestable({
          filter: {
            name: 'Status',
            field: {
              enumerations,
            },
          },
        })
      );
      expect(result.current.suggestableProps.enumerations).toEqual(
        enumerations
      );
    });
  });

  describe('fetching', () => {
    const filter = {
      name: 'Status',
      field: {
        name: 'orders.status',
        suggestable: true,
        project_name: 'bar',
        suggest_dimension: 'orders.status',
        view: 'orders',
      },
      model: 'foo',
    };
    const sdkOkMock = jest.fn(value => Promise.resolve(value));

    const suggestions = ['complete', 'pending', 'cancelled'];
    const sdkGetMock = jest.fn(() => ({
      suggestions,
    }));

    const sdkMock = {
      ok: sdkOkMock,
      get: sdkGetMock,
    } as unknown as IAPIMethods;

    it('waitToFetch', async () => {
      renderHook(() =>
        useSuggestable({
          filter,
          sdk: sdkMock,
          waitToFetch: true,
        })
      );
      expect(model_fieldname_suggestions).not.toHaveBeenCalled();
    });

    it('fetches suggestions', async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useSuggestable({
          filter,
          sdk: sdkMock,
        })
      );
      expect(result.current.suggestableProps.isLoading).toBe(true);
      expect(result.current.suggestableProps.suggestions).toEqual([]);
      await waitForNextUpdate();
      expect(result.current.suggestableProps.isLoading).toBe(false);
      expect(result.current.suggestableProps.suggestions).toEqual(suggestions);

      expect(model_fieldname_suggestions).toHaveBeenCalledWith(
        { ok: sdkOkMock, get: sdkGetMock },
        {
          field_name: 'orders.status',
          model_name: 'foo',
          term: '',
          view_name: 'orders',
        },
        { signal: expect.any(AbortSignal) }
      );
    });

    it('fetches suggestions from internal API and can abort in-flight requests', async () => {
      const abortSpy = jest.spyOn(AbortController.prototype, 'abort');
      const fetchSuggestions = jest.fn().mockResolvedValue({
        ok: true,
        status: 200,
        headers: new Headers({ 'content-type': 'application/json' }),
        statusText: 'OK',
        json: () => Promise.resolve({ suggestions }),
      } as Response);
      const data = {
        filter,
        sdk: sdkMock,
        fetchSuggestions,
      };
      const { result, waitForNextUpdate } = renderHook(() =>
        useSuggestable(data)
      );
      expect(result.current.suggestableProps.isLoading).toBe(true);
      expect(result.current.suggestableProps.suggestions).toEqual([]);
      await waitForNextUpdate();
      expect(result.current.suggestableProps.isLoading).toBe(false);
      expect(result.current.suggestableProps.suggestions).toEqual(suggestions);

      expect(fetchSuggestions).toHaveBeenCalledWith({
        fieldName: 'orders.status',
        modelName: 'foo',
        term: '',
        filters: undefined,
        viewName: 'orders',
        abortController: expect.any(AbortController),
      });

      abortSpy.mockReset();

      act(() => {
        result.current.suggestableProps.onInputChange?.('p');
      });
      await waitForNextUpdate();
      act(() => {
        result.current.suggestableProps.onInputChange?.('pe');
      });
      await waitForNextUpdate();
      act(() => {
        result.current.suggestableProps.onInputChange?.('pen');
      });
      await waitForNextUpdate();

      expect(abortSpy).toHaveBeenCalledTimes(3); // initial blank request, plus 2 more (p, and pe)
    });

    it('returns fetch error message', () => {
      const sdkMockError = {
        ok: jest.fn(value => value),
        get: jest.fn(() => {
          throw new Error();
        }),
      } as unknown as IAPIMethods;
      const { result } = renderHook(() =>
        useSuggestable({
          filter,
          sdk: sdkMockError,
        })
      );
      expect(result.current.errorMessage).toEqual('Error loading suggestions');
    });
  });
});
