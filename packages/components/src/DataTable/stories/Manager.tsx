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

import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { Icon } from '../../Icon'
import { SpaceVertical } from '../../Layout'
import { Heading } from '../../Text'
import { ActionListManagerProps, ActionListManager } from '../Manager'

const customResultsDisplay = (
  <SpaceVertical align="center">
    <Icon size="xlarge" name="Beaker" color="key" />
    <Heading>The mad scientists have nothing for you...</Heading>
  </SpaceVertical>
)

const Template: Story<ActionListManagerProps> = ({ ...args }) => (
  <ActionListManager {...args}>
    <p>Faux ActionList here...</p>
  </ActionListManager>
)

export const ManagerBasic = Template.bind({})
ManagerBasic.args = {}
ManagerBasic.parameters = {
  storyshots: { disable: true },
}

export const ManagerLoading = Template.bind({})
ManagerLoading.args = {
  ...ManagerBasic.args,
  isLoading: true,
}
/* Spinner animation timing may not be consistent */
ManagerLoading.parameters = {
  storyshots: { disable: true },
}

export const ManagerNoResults = Template.bind({})
ManagerNoResults.args = {
  ...ManagerBasic.args,
  noResults: true,
}

export const ManagerNoResultsDisplay = Template.bind({})
ManagerNoResultsDisplay.args = {
  ...ManagerNoResults.args,
  noResultsDisplay: customResultsDisplay,
}
ManagerNoResultsDisplay.parameters = {
  storyshots: { disable: true },
}
