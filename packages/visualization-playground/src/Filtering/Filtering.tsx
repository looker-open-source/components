/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import type { FormEvent } from 'react';
import React, { useState, useEffect, useCallback } from 'react';
import {
  useQueryId,
  useQueryIdFromDashboard,
  useQueryMetadata,
  useCreateQuery,
} from '@looker/components-data';
import { Button, Fieldset } from '@looker/components';
import type { IQuery, IWriteQuery } from '@looker/sdk';
import type { InputTypes } from '../QueryInput';
import { ActiveFilters } from '../ActiveFilters';

type FilteringProps = {
  setQueryIdentifier: (id: string | number) => void;
  setFetchBy: (type: InputTypes) => void;
} & (
  | {
      dashboard?: never;
      query?: string | number;
    }
  | {
      dashboard?: number;
      query?: never;
    }
);

const createQueryRequest = (
  { client_id, ...query }: IQuery,
  newFilters: IQuery['filters']
) => {
  const result: Partial<IWriteQuery> = {
    ...query,
    filters: newFilters,
  };
  return result;
};

export const Filtering = ({
  query,
  dashboard,
  setQueryIdentifier,
  setFetchBy,
}: FilteringProps) => {
  const [draftQueryMetadata, setDraftQueryMetadata] = useState<
    Partial<IWriteQuery> | undefined
  >();

  const { queryId: dashboardQueryId } = useQueryIdFromDashboard(dashboard);
  const { queryId } = useQueryId(query || dashboardQueryId);
  const {
    metadata,
    metadata: { filters: currentFilters = {} },
  } = useQueryMetadata(queryId);

  const [draftFilters, setDraftFilters] =
    useState<IQuery['filters']>(currentFilters);
  const [isFieldsetOpen, setIsFieldsetOpen] = useState(false);

  // caution: side effects!
  // create a new query when the draftQueryMetadata is updated
  const { queryId: draftQueryId } = useCreateQuery(draftQueryMetadata);

  const handleFilterSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newQuery = createQueryRequest(metadata, draftFilters);
    setDraftQueryMetadata(newQuery);
  };

  // convert value to string in order to approximate deep object comparison in useCallback
  const draftFilterJSONString = JSON.stringify(draftFilters);

  const handleRemoveFilter = useCallback(
    (name: string) => {
      const draftFiltersCopy = JSON.parse(draftFilterJSONString);
      delete draftFiltersCopy[name];
      setDraftFilters(draftFiltersCopy);
    },
    [draftFilterJSONString]
  );

  const handleUpdateFilter = useCallback(
    (name: string, expression: string) => {
      const draftFiltersCopy = JSON.parse(draftFilterJSONString);
      setDraftFilters({ ...draftFiltersCopy, [name]: expression });
    },
    [draftFilterJSONString]
  );

  useEffect(() => {
    if (draftQueryId && draftQueryId !== queryId) {
      // render new query that was created by `useCreateNewQuery`
      setQueryIdentifier(draftQueryId);
      // if starting from a dashboard ID, update UI to query ID input
      setFetchBy('query');
      // reset local state post submit
      setDraftQueryMetadata(undefined);
    }
  }, [draftQueryId, queryId, setFetchBy, setQueryIdentifier]);

  useEffect(() => {
    setDraftFilters(metadata.filters);
    setIsFieldsetOpen(Object.keys(currentFilters || {}).length > 0);
  }, [currentFilters, metadata.filters]);

  if (!queryId) {
    return null;
  }

  return (
    <form onSubmit={handleFilterSubmit}>
      <Fieldset
        legend="Filters"
        accordion
        isOpen={isFieldsetOpen}
        toggleOpen={setIsFieldsetOpen}
      >
        <ActiveFilters
          onRemoveFilter={handleRemoveFilter}
          onUpdateFilter={handleUpdateFilter}
          queryId={queryId}
          filters={draftFilters}
        />
        <Button onClick={handleFilterSubmit}>Run</Button>
      </Fieldset>
    </form>
  );
};
