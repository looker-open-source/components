/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import type { ChangeEvent } from 'react';
import React, { useEffect, useRef, useContext } from 'react';
import { Grid, InputText, FieldRadio, Link, Space } from '@looker/components';
import type { ExtensionContextData } from '@looker/extension-sdk-react';
import { ExtensionContext } from '@looker/extension-sdk-react';
import debounce from 'lodash/debounce';
import styled from 'styled-components';
import { useLocalStorage } from '../utils';
import { ShareLink } from '../ShareLink';

export type InputTypes = 'dashboard' | 'query';
export type OnQueryInputArgs = { type: InputTypes; value?: string | number };

type QueryInputProps = {
  onChange: (queryInput: OnQueryInputArgs) => void;
  dashboardId?: number;
  queryId?: string | number;
  fetchBy?: InputTypes;
  setFetchBy: (input: InputTypes) => void;
};

type InputValues = string | number | undefined;

export const QueryInput = ({
  onChange,
  dashboardId,
  queryId,
  fetchBy,
  setFetchBy,
}: QueryInputProps) => {
  const { extensionSDK } = useContext<ExtensionContextData>(ExtensionContext);

  const [storedInputType, setStoredInputType] = useLocalStorage<InputTypes>(
    'visComponentInputType',
    fetchBy
  );

  const [storedQueryIdentifier, setStoredQueryIdentifier] = useLocalStorage(
    'visComponentQueryIdentifier',
    queryId
  );

  const [storedDashboardId, setStoredDashboardId] = useLocalStorage(
    'visComponentDashboardId',
    dashboardId
  );

  const debouncedOnChange = useRef(
    debounce((nextType: InputTypes, nextValue: InputValues) => {
      onChange({
        type: nextType,
        value: nextValue,
      });
    }, 500)
  ).current;

  const handleInputTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: type } = e.target as HTMLInputElement;
    setFetchBy(type as InputTypes);
    setStoredInputType(type as InputTypes);
    const inputValue =
      type === 'query' ? storedQueryIdentifier : storedDashboardId;
    onChange({ type: type as InputTypes, value: inputValue });
  };

  const handleQueryIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    if (storedInputType) {
      debouncedOnChange(storedInputType, value);
    }
    setStoredQueryIdentifier(value);
  };

  const handleDashboardIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    if (storedInputType) {
      debouncedOnChange(storedInputType, value);
    }
    setStoredDashboardId(Number(value));
  };

  /* Persist prop values when they are changed externally */
  useEffect(() => {
    if (fetchBy) {
      setStoredInputType(fetchBy);
    }
    if (dashboardId) {
      setStoredDashboardId(dashboardId);
    }
    if (queryId) {
      setStoredQueryIdentifier(queryId);
    }
  }, [
    dashboardId,
    queryId,
    fetchBy,
    setStoredDashboardId,
    setStoredInputType,
    setStoredQueryIdentifier,
  ]);

  /* Restore localStorage state on load */
  useEffect(() => {
    const inputValue =
      storedInputType === 'query' ? storedQueryIdentifier : storedDashboardId;
    if (!fetchBy && storedInputType && inputValue) {
      setFetchBy(storedInputType);
      onChange({
        type: storedInputType,
        value: inputValue,
      });
    }
  }, [
    storedInputType,
    storedQueryIdentifier,
    storedDashboardId,
    fetchBy,
    onChange,
    setFetchBy,
  ]);

  return (
    <Grid>
      <div>
        <FieldRadio
          name="input-selector"
          label="Query (Numeric ID or Slug)"
          onChange={handleInputTypeChange}
          value="query"
          checked={storedInputType === 'query'}
        />
        <InputText
          name="query"
          value={storedQueryIdentifier}
          disabled={storedInputType !== 'query'}
          onChange={handleQueryIdChange}
          my="xsmall"
          placeholder={'CmBbGK2\u2026'}
        />
        {storedInputType === 'query' && <ShareLink slug={queryId} />}
      </div>
      <div>
        <FieldRadio
          name="input-selector"
          label="Dashboard (Numeric ID)"
          onChange={handleInputTypeChange}
          value="dashboard"
          checked={storedInputType === 'dashboard'}
        />
        <InputText
          name="dashboard"
          disabled={storedInputType !== 'dashboard'}
          my="xsmall"
          value={storedDashboardId || ''}
          onChange={handleDashboardIdChange}
          placeholder="123"
        />
        {storedInputType === 'dashboard' && dashboardId ? (
          <Space gap="u1">
            <Link
              href="#"
              onClick={() => {
                extensionSDK.openBrowserWindow(
                  `/dashboards/${dashboardId}`,
                  '_blank'
                );
              }}
              fontSize="small"
            >
              View Dashboard
            </Link>
            <Middot />
            <ShareLink dashboard={Number(dashboardId)} />
          </Space>
        ) : null}
      </div>
    </Grid>
  );
};

const Middot = styled.div`
  background: ${({ theme }) => theme.colors.text};
  border-radius: 2px;
  height: 2px;
  width: 2px;
`;
