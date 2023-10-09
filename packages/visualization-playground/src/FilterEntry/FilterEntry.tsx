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

import React, { useState, useEffect } from 'react';
import { useSDK } from '@looker/components-data';
import { ButtonOutline, Popover, Space } from '@looker/components';
import type { FilterChangeProps, TreeModel } from '@looker/filter-components';
import {
  Filter,
  getExpressionTypeFromField,
  useSuggestable,
} from '@looker/filter-components';
import type { ILookmlModelExploreField } from '@looker/sdk';
import { FieldSelector } from '../FieldSelector';

type FilterEntryProps = {
  onUpdateFilter: (name: string, expression: string) => void;
  filterField?: ILookmlModelExploreField;
  filterExpression?: string;
  tree: TreeModel[];
};

// The label for the button to select a field for filtering
const getSelectFilterLabel = (field: ILookmlModelExploreField | undefined) => {
  if (field?.name) {
    return field.name.replace('.', ' > ').replace(/_/g, ' ');
  }
  return 'Select a field';
};

export const FilterEntry = ({
  onUpdateFilter,
  tree,
  filterField: filterFieldProp,
  filterExpression: filterExpressionProp = '',
}: FilterEntryProps) => {
  const sdk = useSDK();
  const [filterField, setFilterField] = useState<
    ILookmlModelExploreField | undefined
  >(filterFieldProp);
  const [filterExpression, setFilterExpression] =
    useState(filterExpressionProp);

  const handleFilterChange = ({ expression }: FilterChangeProps) => {
    if (setFilterExpression) {
      setFilterExpression(expression);
    }
  };

  useEffect(() => {
    if (filterField?.name) {
      onUpdateFilter(filterField?.name, filterExpression);
    }
  }, [filterField, filterExpression, onUpdateFilter]);

  const { suggestableProps } = useSuggestable({
    filter: { field: filterField, model: filterField?.project_name },
    sdk,
  });

  return (
    <Space align="start">
      <Popover
        placement="bottom-start"
        content={
          <FieldSelector
            tree={tree}
            current={filterField}
            onChange={setFilterField}
          />
        }
      >
        <ButtonOutline color="neutral">
          {getSelectFilterLabel(filterField)}
        </ButtonOutline>
      </Popover>
      {filterField?.name && (
        <Filter
          name={filterField?.name}
          expressionType={getExpressionTypeFromField(filterField)}
          expression={filterExpression}
          onChange={handleFilterChange}
          {...suggestableProps}
        />
      )}
    </Space>
  );
};
