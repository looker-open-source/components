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
import React, { useMemo, useState, useEffect } from 'react'
import { Button } from '../../../Button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '../../../Dialog'
import { Icon } from '../../../Icon'
import { Space, SpaceVertical } from '../../../Layout'
import { List, ListItem } from '../../../List'
import { Heading, Text } from '../../../Text'
import { parseOption } from '../../Inputs/Combobox'
import { SelectOptionProps, SelectOptionObject } from '../../Inputs/Select'
import { options1k } from '../FieldSelect/options1k'
import { FieldSelectMulti, FieldSelectMultiProps } from './FieldSelectMulti'

const Template: Story<FieldSelectMultiProps> = (args) => (
  <FieldSelectMulti {...args} />
)

const selectOptions = [
  { value: 'Apples' },
  { value: 'Bananas' },
  { value: 'Oranges' },
  { value: 'Pineapples' },
  { value: 'Kiwis' },
  { value: 'Apples2' },
  { value: 'Bananas2' },
  { value: 'Oranges2' },
  { value: 'Pineapples2' },
  { value: 'Kiwis2' },
  { value: 'Apples3' },
  { value: 'Bananas3' },
  { value: 'Oranges3' },
  { value: 'Pineapples3' },
  { value: 'Kiwis3' },
]

export const Basic = Template.bind({})
Basic.args = {
  description: 'this is the description',
  detail: '5/50',
  isFilterable: true,
  label: 'Label',
  options: selectOptions,
  placeholder: 'Search fruits',
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Basic.args,
  disabled: true,
}

export const Error = Template.bind({})
Error.args = {
  ...Basic.args,
  validationMessage: { message: 'validation Message', type: 'error' },
}

const emailValidator = /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const emails = [
  { label: 'Good Looker', value: 'good.looker@google.com' },
  { label: 'Components Team', value: 'lookercomponents@google.com' },
  { label: 'Example Email', value: 'example.email@google.com' },
]

export const CopyPaste = () => {
  const [errorMsg, setErrorMsg] = useState('')
  const validate = (value: string) => {
    return value.indexOf('2') === -1
  }
  const handleValidationFail = (values: string[]) => {
    setErrorMsg(`No thank you to values with "2": ${values.join(', ')}`)
  }
  const validateEmail = (val: string) => {
    const { value } = parseOption(val)
    return emailValidator.test(value)
  }
  return (
    <SpaceVertical>
      <Heading>Copy/Paste</Heading>
      <Heading as="h4">When label = value (or no label)</Heading>
      <Space>
        <FieldSelectMulti
          label="Copy from here..."
          description="But not the reverse..."
          options={selectOptions}
          defaultValues={['Apples', 'Oranges', 'Apples2']}
          placeholder="Search fruits"
          isFilterable
        />
        <FieldSelectMulti
          label="...over to here"
          description="...because that one is not freeInput"
          options={selectOptions}
          placeholder="Search fruits"
          isFilterable
          freeInput
          validate={validate}
          onValidationFail={handleValidationFail}
          validationMessage={
            errorMsg !== '' ? { message: errorMsg, type: 'error' } : undefined
          }
        />
      </Space>
      <Heading as="h4">When label != value</Heading>
      <Space>
        <FieldSelectMulti
          label="To:"
          options={emails}
          validate={validateEmail}
          defaultValues={[
            'good.looker@google.com',
            'lookercomponents@google.com',
          ]}
          placeholder="Enter recipients"
          isFilterable
          freeInput
        />
        <FieldSelectMulti
          label="CC:"
          options={emails}
          validate={validateEmail}
          placeholder="Enter recipients"
          isFilterable
          freeInput
        />
      </Space>
    </SpaceVertical>
  )
}

CopyPaste.parameters = {
  storyshots: { disable: true },
}

const selectGroups = [
  {
    label: 'Fruits',
    options: [
      { label: 'Apples', value: '1' },
      { label: 'Bananas', value: '2' },
      { label: 'Oranges', value: '3' },
      { label: 'Pineapples', value: '4' },
      { label: 'Kiwis', value: '5' },
    ],
  },
  {
    label: 'Fruits 2',
    options: [
      { label: 'Apples2', value: '12' },
      { label: 'Bananas2', value: '22' },
      { label: 'Oranges2', value: '32' },
      { label: 'Pineapples2', value: '42' },
      { label: 'Kiwis2', value: '52' },
    ],
  },
  {
    label: 'Fruits 3',
    options: [
      { label: 'Apples3', value: '13' },
      { label: 'Bananas3', value: '23' },
      { label: 'Oranges3', value: '33' },
      { label: 'Pineapples3', value: '43' },
      { label: 'Kiwis3', value: '53' },
    ],
  },
  {
    label: 'Fruits 4',
    options: [
      { label: 'Apples4', value: '14' },
      { label: 'Bananas4', value: '24' },
      { label: 'Oranges4', value: '34' },
      { label: 'Pineapples4', value: '44' },
      { label: 'Kiwis4', value: '54' },
    ],
  },
  {
    label: 'Fruits 5',
    options: [
      { label: 'Apples5', value: '15' },
      { label: 'Bananas5', value: '25' },
      { label: 'Oranges5', value: '35' },
      { label: 'Pineapples5', value: '45' },
      { label: 'Kiwis5', value: '55' },
    ],
  },
]

const TestIndicator = () => {
  return <Text color="pink">***</Text>
}

export const SelectMultiDemo = () => {
  const [cheeseOptions, setCheeseOptions] = useState([] as SelectOptionObject[])
  useEffect(() => {
    const t = window.setTimeout(() => {
      setCheeseOptions([
        { label: 'Cheddar', value: 'cheddar' },
        { label: 'Gouda', value: 'gouda' },
        { label: 'Swiss', value: 'swiss' },
      ])
    }, 2000)
    return () => {
      window.clearTimeout(t)
    }
  }, [])
  const [isOpen, setOpen] = useState(false)
  const handleClick = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [searchTerm, setSearchTerm] = useState('')
  const handleFilter = (term: string) => {
    setSearchTerm(term)
  }

  const newOptions = useMemo(() => {
    if (searchTerm === '')
      return selectOptions.map((option) => ({
        ...option,
        description: 'Lorem ipsum',
      }))
    return selectOptions.reduce((acc, option) => {
      if (option.value.toLowerCase().includes(searchTerm.toLowerCase())) {
        acc.push({ ...option, description: 'Lorem ipsum' })
      }
      return acc
    }, [] as SelectOptionProps[])
  }, [searchTerm])

  const [searchTerm1k, setSearchTerm1k] = useState('')
  const handleFilter1k = (term: string) => {
    setSearchTerm1k(term)
  }

  const newOptions1k = useMemo(() => {
    if (searchTerm1k === '') return options1k
    return options1k.reduce((acc, option) => {
      if (option.label.toLowerCase().includes(searchTerm1k.toLowerCase())) {
        acc.push(option)
      }
      return acc
    }, [] as SelectOptionProps[])
  }, [searchTerm1k])

  const formatCreate = (inputValue: string) => {
    return (
      <span>
        Add fruit: <em>{inputValue}</em>
      </span>
    )
  }

  return (
    <SpaceVertical p="large" width={400}>
      <Dialog isOpen={isOpen} onClose={handleClose}>
        <DialogHeader>SelectMulti in a Dialog</DialogHeader>
        <DialogContent>
          <FieldSelectMulti
            options={newOptions1k}
            placeholder="Select Brands"
            isFilterable
            onFilter={handleFilter1k}
            alignSelf="flex-start"
            showCreate
            defaultValues={['Boulder Creek']}
            freeInput
            autoFocus
          />
        </DialogContent>
        <DialogFooter />
      </Dialog>
      <Button onClick={handleClick}>Open</Button>
      <Heading>FieldSelectMulti</Heading>
      <SpaceVertical>
        <FieldSelectMulti
          label="Label"
          options={selectOptions}
          placeholder="Select fruits"
          detail="5/50"
        />
        <FieldSelectMulti
          label="Label"
          placeholder="placeholder"
          description="this is the description"
          values={['cheddar']}
          options={cheeseOptions}
          autoFocus
        />
      </SpaceVertical>
      <Heading>SelectMulti</Heading>
      <Heading as="h4">1k (windowed) options</Heading>
      <FieldSelectMulti
        options={newOptions1k}
        placeholder="Select Brands"
        isFilterable
        onFilter={handleFilter1k}
        alignSelf="flex-start"
        showCreate
        defaultValues={['Boulder Creek']}
      />
      <Heading as="h4">Option Groups</Heading>
      <FieldSelectMulti
        options={selectGroups}
        placeholder="Select fruits"
        mb="xlarge"
      />
      <Heading as="h4">Close on Select</Heading>
      <FieldSelectMulti
        options={selectOptions}
        placeholder="Select fruits"
        closeOnSelect
      />
      <Heading as="h4">Kitchen Sink</Heading>
      <List>
        <ListItem>Option descriptions</ListItem>
        <ListItem>isFilterable</ListItem>
        <ListItem>showCreate</ListItem>
        <ListItem>formatCreateLabel</ListItem>
        <ListItem>removeOnBackspace</ListItem>
      </List>
      <FieldSelectMulti
        options={newOptions}
        placeholder="Search fruits"
        isFilterable
        onFilter={handleFilter}
        alignSelf="flex-start"
        showCreate
        formatCreateLabel={formatCreate}
        removeOnBackspace={false}
      />
      <FieldSelectMulti
        options={newOptions}
        placeholder="with freeInput"
        isFilterable
        onFilter={handleFilter}
        alignSelf="flex-start"
        freeInput
        removeOnBackspace={false}
      />

      <Heading as="h4">Validation Errors</Heading>
      <FieldSelectMulti
        name="fruitError"
        options={selectOptions}
        placeholder="Select fruits"
        closeOnSelect
        validationType="error"
      />
      <Heading as="h4">Custom Indicator</Heading>
      <FieldSelectMulti
        name="fruitIndicator"
        options={[
          ...selectOptions,
          {
            indicator: TestIndicator,
            label: 'I have my own indicator',
            value: 'indicator',
          },
        ]}
        placeholder="Select fruits"
        closeOnSelect
        mb="xlarge"
        indicator={({ isActive, isSelected }) => (
          <Icon
            name={
              isActive ? 'CaretRight' : isSelected ? 'Favorite' : 'CaretDown'
            }
          />
        )}
      />
    </SpaceVertical>
  )
}

SelectMultiDemo.parameters = {
  storyshots: { disable: true },
}

export default {
  component: FieldSelectMulti,
  title: 'FieldSelectMulti',
}
