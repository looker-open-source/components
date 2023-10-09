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

import React, { useState } from 'react';
import { Box } from '@looker/components';
import type { TreeModel } from '../types';
import { TreeSelect } from '../TreeSelect';
import type { TreeSelectProps } from '../TreeSelect';
import { mockShortcutTree } from './examples';

const getRandomInteger = (limit: number) => Math.floor(Math.random() * limit);

const preamble = `We the People of the United States, in Order to form a more perfect Union,
establish Justice, insure domestic Tranquility, provide for the common
defense, promote the general Welfare, and secure the Blessings of Liberty
to ourselves and our Posterity, do ordain and establish this Constitution
for the United States of America.`;

const getString = (lengthLimit = 30): string => {
  const startLimit = preamble.length - 50;
  const length = getRandomInteger(lengthLimit) || 1;
  const startIndex = getRandomInteger(startLimit);
  const substring = preamble.substr(startIndex, length).trim();
  return substring || getString(lengthLimit);
};

const getItems = (
  prefix: string,
  labelLength: number,
  canNest = false
): TreeModel[] => {
  return Array.from(Array(10), (_, i) => {
    if (canNest && i % 3 === 2) {
      const labelText = labelLength ? `: ${getString(labelLength)}` : '';
      const value = `${prefix}-${i} ${labelText}`;
      return {
        label: value,
        children: getItems(`${prefix}-${i}`, labelLength),
        value,
        id: value,
      };
    }
    const itemText = labelLength ? `${getString(labelLength)}` : '';
    const field = `${prefix}-${i} ${itemText}`;
    return {
      label: itemText,
      payload: {
        field,
        fieldOptions: { view_label: `${prefix}-${i}` },
      },
      value: itemText,
      id: field,
    };
  });
};

const getTrees = (labelLength: number): TreeModel[] =>
  Array.from(Array(100), (_, i) => {
    const labelText = labelLength ? `: ${getString(labelLength)}` : '';
    const value = `${i} ${labelText}`;
    return {
      value,
      children: getItems(String(i), labelLength, true),
      id: value,
    };
  });

const longTree = getTrees(30);

export default function Windowing({
  tree = longTree,
  shortcutTree = mockShortcutTree,
  onSelectedFieldChange,
  ...props
}: TreeSelectProps) {
  const [field, setField] = useState();
  const [section, setSection] = useState();
  const handleChange = (fieldData: any) => {
    setField(fieldData.field);
    setSection(fieldData.fieldOptions.view_label);
    onSelectedFieldChange?.(fieldData);
  };

  return (
    <Box width={400} p="u3">
      <TreeSelect
        onSelectedFieldChange={handleChange}
        tree={tree}
        shortcutTree={shortcutTree}
        {...props}
        selectedSection={section}
        selectedField={field}
      />
    </Box>
  );
}
