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

import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { Icon } from '../../Icon'
import { SpaceVertical } from '../../Layout'
import { Heading } from '../../Text'
import { DataTable } from '../DataTable'
import { columns } from '../../__mocks__/DataTable/columns'
import { DataTableProps } from '../types'

const Template: Story<DataTableProps> = ({ ...args }) => (
  <DataTable {...args}>
    <p>Faux ActionList here...</p>
  </DataTable>
)

export const Loading = Template.bind({})
Loading.args = {
  caption: 'DataTable State',
  columns,
  state: 'loading',
}
/* Spinner animation timing may not be consistent */
Loading.parameters = {
  storyshots: { disable: true },
}

export const NoResults = Template.bind({})
NoResults.args = {
  ...Loading.args,
  state: 'noResults',
}

export const NoResultsDisplay = Template.bind({})
NoResultsDisplay.args = {
  ...NoResults.args,
  noResultsDisplay: 'No faux items were found',
}
NoResultsDisplay.parameters = {
  storyshots: { disable: true },
}

export const NoResultsDisplayFancy = Template.bind({})
NoResultsDisplayFancy.args = {
  ...NoResults.args,
  noResultsDisplay: (
    <SpaceVertical align="center">
      <Icon size="xlarge" name="Beaker" color="key" />
      <Heading>The mad scientists have nothing for you...</Heading>
    </SpaceVertical>
  ),
}
NoResultsDisplayFancy.parameters = {
  storyshots: { disable: true },
}
