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
import {
  ComboboxContext,
  ComboboxMultiContext,
  ComboboxUl,
} from '../../Combobox'
import { SelectOptions, SelectOptionsProps } from '../SelectOptions'
import { cheeseOptions, iconOptions, optionsWithGroups } from './options'

const Template: Story<SelectOptionsProps> = (args) => (
  <ComboboxContext.Provider
    value={{
      data: {
        navigationOption: { value: 'cheddar' },
        option: { value: 'swiss' },
      },
      listClientRect: { height: 1000 } as DOMRect,
      listScrollPosition: 0,
    }}
  >
    <ComboboxUl height="100%">
      <SelectOptions {...args} />
    </ComboboxUl>
  </ComboboxContext.Provider>
)

export const Basic = Template.bind({})
Basic.args = {
  options: cheeseOptions,
}

export const Icons = Template.bind({})
Icons.args = {
  options: iconOptions,
}

export const Detail = Template.bind({})
Detail.args = {
  options: cheeseOptions.map((option) => ({ ...option, detail: '0/50' })),
}

export const Description = Template.bind({})
Description.args = {
  options: cheeseOptions.map((option) => ({
    ...option,
    description: "I'm a little teapot",
  })),
}

export const DescriptionIcon = Template.bind({})
DescriptionIcon.args = {
  options: cheeseOptions.map((option) => ({
    ...option,
    description: "I'm a little teapot",
    icon: 'Edit',
  })),
}

export const Preface = Template.bind({})
Preface.args = {
  options: cheeseOptions.map((option) => ({
    ...option,
    preface: 'Preface Text',
  })),
}

export const PrefaceIcon = Template.bind({})
PrefaceIcon.args = {
  options: cheeseOptions.map((option) => ({
    ...option,
    icon: 'Edit',
    preface: 'Preface Text',
  })),
}

export const Groups = Template.bind({})
Groups.args = {
  options: optionsWithGroups,
}

export const KitchenSink = Template.bind({})
KitchenSink.args = {
  options: cheeseOptions.map((option) => ({
    ...option,
    description: "I'm a little teapot",
    detail: '0/50',
    icon: 'Favorite',
    preface: 'Preface Text',
  })),
}

export const Loading = Template.bind({})
Loading.args = {
  ...Basic.args,
  isLoading: true,
}
// Animation would make the image snapshot unstable
Loading.parameters = {
  storyshots: { disable: true },
}

export const NoOptions = Template.bind({})

const TemplateMulti: Story<SelectOptionsProps> = (args) => (
  <ComboboxMultiContext.Provider
    value={{
      data: {
        navigationOption: { value: 'cheddar' },
        options: [{ value: 'swiss' }],
      },
      listClientRect: { height: 1000 } as DOMRect,
      listScrollPosition: 0,
    }}
  >
    <ComboboxUl height="100%">
      <SelectOptions {...args} />
    </ComboboxUl>
  </ComboboxMultiContext.Provider>
)

export const BasicMulti = TemplateMulti.bind({})
BasicMulti.args = {
  isMulti: true,
  options: cheeseOptions,
}

export const DetailMulti = TemplateMulti.bind({})
DetailMulti.args = {
  isMulti: true,
  options: cheeseOptions.map((option) => ({ ...option, detail: '0/50' })),
}

export const DescriptionMulti = TemplateMulti.bind({})
DescriptionMulti.args = {
  isMulti: true,
  options: cheeseOptions.map((option) => ({
    ...option,
    description: "I'm a little teapot",
  })),
}

export const GroupsMulti = TemplateMulti.bind({})
GroupsMulti.args = {
  isMulti: true,
  options: optionsWithGroups,
}

export const NoIndicatorMulti = TemplateMulti.bind({})
NoIndicatorMulti.args = {
  isMulti: true,
  options: cheeseOptions.map((option) => ({
    ...option,
    indicator: false,
  })),
}

export default {
  component: SelectOptions,
  title: 'SelectOptions',
}
