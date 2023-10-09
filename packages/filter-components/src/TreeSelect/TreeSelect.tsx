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
import { Combobox, ComboboxList, Space } from '@looker/components';
import type { ComboboxOptionObject } from '@looker/components';
import React, { useEffect, useMemo, useState } from 'react';
import type { ChangeEvent, ReactNode } from 'react';
import { TreeResults } from './TreeResults';
import { FieldSearch } from './FieldSearch';
import { TreeSelectContext } from './TreeSelectContext';
import type { CombinedTreeProps, NodeToToggle, TreeModel } from './types';
import { findFieldInTree } from './utils/find_field_in_tree';
import { getOption } from './utils/get_option';

export type TreeSelectProps = CombinedTreeProps & {
  /**
   * Content rendered to the right of the search input
   */
  children?: ReactNode;
  disabled?: boolean;
  /* Shows instead of the placeholder when disabled */
  disabledText?: ReactNode;
  placeholder?: string;
  label?: string;
  id?: string;
  withDropdown?: boolean;
  /**
   * If true, the spinner will not render with tree is undefined
   */
  hideLoading?: boolean;
  /**
   * Set this when withDropdown is false
   */
  treeHeight?: string | number;
  /**
   * Use the [view].[name] field name rather than the label
   */
  selectedField?: string;
  /**
   * View label, or [model label] • [view label] in certain contexts
   */
  selectedSection?: string;
  onSelectedFieldChange: (fieldData: TreeModel['payload']) => void;
};

export const TreeSelect = ({
  children,
  disabled,
  disabledText,
  placeholder,
  label,
  id,
  tree,
  shortcutTree,
  withDropdown = true,
  hideLoading,
  treeHeight,
  selectedField,
  selectedSection,
  onSelectedFieldChange,
}: TreeSelectProps) => {
  const [nodeToToggle, setNodeToToggle] = useState<NodeToToggle>();

  const combinedTrees = useMemo(() => {
    if (tree && shortcutTree) return [...shortcutTree, ...tree];
    if (tree) return tree;
    return undefined;
  }, [tree, shortcutTree]);

  const selectedNode = findFieldInTree(combinedTrees, selectedField);
  const value = selectedNode ? getOption(selectedNode) : undefined;

  const inputValueFromOption = value?.label || '';
  const [inputValue, setInputValue] = useState(inputValueFromOption);

  useEffect(() => {
    setInputValue(inputValueFromOption);
  }, [inputValueFromOption]);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const handleChange = (option?: ComboboxOptionObject) => {
    if (option?.payload) {
      onSelectedFieldChange(option.payload);
    }
  };

  const handleClose = () => {
    setNodeToToggle(undefined);
    if (value?.label) {
      setInputValue(value.label);
    } else {
      setInputValue('');
    }
  };

  const hideResultsLoading = hideLoading && !tree;
  const innerTree = hideResultsLoading ? null : (
    <TreeResults tree={combinedTrees} searchInputValue={inputValue} />
  );

  return (
    <TreeSelectContext.Provider
      value={{ nodeToToggle, setNodeToToggle, withDropdown }}
    >
      <Combobox
        id={id}
        value={value}
        onChange={handleChange}
        onClose={handleClose}
        shouldRenderListInline={!withDropdown}
        width="100%"
        maxHeight="100%"
        overflow="hidden"
        openOnFocus
      >
        <Space align="end">
          <FieldSearch
            disabled={disabled}
            disabledText={disabledText}
            label={label}
            onChange={handleInputChange}
            placeholder={placeholder}
            value={inputValue}
            selectedSection={selectedSection}
          />
          {children}
        </Space>
        <ComboboxList
          height={withDropdown ? undefined : treeHeight}
          width={withDropdown ? undefined : 'auto'}
          minWidth={withDropdown ? undefined : 'auto'}
          persistSelection
          windowing
        >
          {innerTree}
        </ComboboxList>
      </Combobox>
    </TreeSelectContext.Provider>
  );
};
