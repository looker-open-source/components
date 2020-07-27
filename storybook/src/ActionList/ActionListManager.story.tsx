/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import React, { useState } from 'react'
import {
  ActionList,
  ActionListManager,
  Icon,
  Heading,
  SpaceVertical,
} from '@looker/components'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import { columns, data } from './data'
import { items } from './items'

export const Manager = () => {
  const [selections, setSelections] = useState([] as string[])
  const onSelect = (selection: string) => {
    setSelections(
      selections.includes(selection)
        ? selections.filter((item) => item !== selection)
        : [...selections, selection]
    )
  }

  const allSelectableItems = data
    .map(({ disabled, pdtName }) => !disabled && pdtName)
    .filter((element) => element) as string[]

  const onSelectAll = () =>
    setSelections(selections.length ? [] : allSelectableItems)

  const noResultsDisplay = boolean('Custom "noResultsDisplay"', true) && (
    <SpaceVertical align="center">
      <Icon size="xlarge" name="Beaker" color="key" />
      <Heading>The mad scientists have nothing for you...</Heading>
    </SpaceVertical>
  )

  return (
    <ActionListManager
      isLoading={boolean('isLoading', false)}
      noResults={boolean('noResults', false)}
      noResultsDisplay={noResultsDisplay}
    >
      <ActionList
        canSelect
        onSelect={onSelect}
        onSelectAll={onSelectAll}
        itemsSelected={selections}
        columns={columns}
      >
        {items}
      </ActionList>
    </ActionListManager>
  )
}

export default {
  decorators: [withKnobs],
  title: 'ActionList/Manager',
}
