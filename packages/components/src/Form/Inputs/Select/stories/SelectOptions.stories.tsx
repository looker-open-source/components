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

import type { Story } from '@storybook/react/types-6-0'
import { Create, Favorite } from '@styled-icons/material'
import React from 'react'
import {
  ComboboxContext,
  ComboboxMultiContext,
  ComboboxUl,
} from '../../Combobox'
import { Icon } from '../../../../Icon'
import type { SelectOptionsProps } from '../SelectOptions'
import { SelectOptions } from '../SelectOptions'
import type { SelectOptionProps } from '../types'
import { useFlatOptions } from '../utils/useFlatOptions'
import { defaultArgTypes as argTypes } from '../../../../../../../apps/storybook/src/defaultArgTypes'
import { cheeseOptions, iconOptions, optionsWithGroups } from './options'

interface StoryProps extends SelectOptionsProps {
  options: SelectOptionProps[]
}

const Template: Story<StoryProps> = (args) => {
  const optionProps = useFlatOptions(args.options)
  return (
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
      <ComboboxUl isMulti={false} height="100%">
        <SelectOptions {...args} {...optionProps} />
      </ComboboxUl>
    </ComboboxContext.Provider>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  options: cheeseOptions,
}

export const Icons = Template.bind({})
Icons.args = {
  options: iconOptions,
}

export const Detail = Template.bind({})
const detailOptions = cheeseOptions.map((option) => ({
  ...option,
  detail: (
    <>
      <Icon icon={<Favorite />} />
      <Icon icon={<Favorite />} />
      <Icon icon={<Favorite />} />
    </>
  ),
}))
Detail.args = {
  options: detailOptions,
}

export const Description = Template.bind({})
const descriptionOptions = cheeseOptions.map((option) => ({
  ...option,
  description: "I'm a little teapot",
}))
Description.args = {
  options: descriptionOptions,
}

export const DescriptionIcon = Template.bind({})
DescriptionIcon.args = {
  options: cheeseOptions.map((option) => ({
    ...option,
    description: "I'm a little teapot",
    icon: <Create />,
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
    icon: <Create />,
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
    icon: <Favorite />,
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

const TemplateMulti: Story<StoryProps> = (args) => {
  const optionProps = useFlatOptions(args.options)
  return (
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
      <ComboboxUl isMulti height="100%">
        <SelectOptions {...args} {...optionProps} />
      </ComboboxUl>
    </ComboboxMultiContext.Provider>
  )
}

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
  argTypes,
  component: SelectOptions,
  title: 'SelectOptions',
}
