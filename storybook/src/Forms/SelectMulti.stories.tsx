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

import React, { FC, useMemo, useState } from 'react'
import {
  Box,
  FieldSelectMulti,
  Fieldset,
  Heading,
  Icon,
  List,
  ListItem,
  parseOption,
  SelectMulti,
  SelectOptionProps,
  Space,
  SpaceVertical,
  Text,
  Button,
  Dialog,
  DialogContent,
} from '@looker/components'
import { options1k } from './options1k'

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

export const All = () => (
  <Fieldset>
    <Basic />
    <Disabled />
    <ValidationError />
    <KitchenSink />
    <CopyPaste />
  </Fieldset>
)

export default {
  component: All,
  title: 'Forms/SelectMulti',
}

export const Basic = () => (
  <FieldSelectMulti
    description="this is the description"
    detail="5/50"
    label="Label"
    options={selectOptions}
    placeholder="Search fruits"
    isFilterable
  />
)

export const Disabled: FC = () => (
  <FieldSelectMulti
    disabled
    label="Label"
    options={selectOptions}
    placeholder="placeholder"
  />
)

export const ValidationError = () => (
  <FieldSelectMulti
    label="Label"
    required
    options={selectOptions}
    placeholder="placeholder"
    validationMessage={{ message: 'validation Message', type: 'error' }}
  />
)

export const KitchenSink = () => (
  <FieldSelectMulti
    description="this is the description"
    detail="5/50"
    label="Label"
    options={selectOptions}
    placeholder="placeholder"
    validationMessage={{ message: 'validation Message', type: 'error' }}
  />
)

const emailValidator = new RegExp(
  /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)
const emails = [
  { label: 'Good Looker', value: 'good.looker@google.com' },
  { label: 'Components Team', value: 'lookercomponents@google.com' },
  { label: 'Example Email', value: 'example.email@google.com' },
]

export const CopyPaste = () => {
  const [errorMsg, setErrorMsg] = useState('')
  function validate(value: string) {
    return value.indexOf('2') === -1
  }
  function handleValidationFail(values: string[]) {
    setErrorMsg(`No thank you to values with "2": ${values.join(', ')}`)
  }
  function validateEmail(val: string) {
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

function TestIndicator() {
  return <Text color="pink">***</Text>
}

export function SelectMultiDemo() {
  const [isOpen, setOpen] = useState(false)
  const handleClick = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [searchTerm, setSearchTerm] = useState('')
  function handleFilter(term: string) {
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
  function handleFilter1k(term: string) {
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

  function formatCreate(inputValue: string) {
    return (
      <span>
        Add fruit: <em>{inputValue}</em>
      </span>
    )
  }

  return (
    <Box p="large" width={400}>
      <Dialog isOpen={isOpen} onClose={handleClose}>
        <DialogContent>
          <SelectMulti
            options={newOptions1k}
            placeholder="Select Brands"
            isFilterable
            onFilter={handleFilter1k}
            alignSelf="flex-start"
            showCreate
            mb="xlarge"
            defaultValues={['Boulder Creek']}
            freeInput
          />
        </DialogContent>
      </Dialog>
      <Button onClick={handleClick} m="large">
        Open
      </Button>
      <Heading mb="large">FieldSelectMulti</Heading>
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
          options={[
            { label: 'Cheddar', value: 'cheddar' },
            { label: 'Gouda', value: 'gouda' },
            { label: 'Swiss', value: 'swiss' },
          ]}
        />
      </SpaceVertical>
      <Heading my="large">SelectMulti</Heading>
      <Heading mb="medium" as="h4">
        1k (windowed) options
      </Heading>
      <SelectMulti
        options={newOptions1k}
        placeholder="Select Brands"
        isFilterable
        onFilter={handleFilter1k}
        alignSelf="flex-start"
        showCreate
        mb="xlarge"
        defaultValues={['Boulder Creek']}
      />
      <Heading mb="medium" as="h4">
        Option Groups
      </Heading>
      <SelectMulti
        options={selectGroups}
        placeholder="Select fruits"
        mb="xlarge"
      />
      <Heading mb="medium" as="h4">
        Close on Select
      </Heading>
      <SelectMulti
        options={selectOptions}
        placeholder="Select fruits"
        closeOnSelect
        mb="xlarge"
      />
      <Heading mb="medium" as="h4">
        Kitchen Sink
      </Heading>
      <List mb="small">
        <ListItem>Option descriptions</ListItem>
        <ListItem>isFilterable</ListItem>
        <ListItem>showCreate</ListItem>
        <ListItem>formatCreateLabel</ListItem>
        <ListItem>removeOnBackspace</ListItem>
      </List>
      <SelectMulti
        options={newOptions}
        placeholder="Search fruits"
        isFilterable
        onFilter={handleFilter}
        alignSelf="flex-start"
        showCreate
        formatCreateLabel={formatCreate}
        removeOnBackspace={false}
        mb="xlarge"
      />
      <SelectMulti
        options={newOptions}
        placeholder="with freeInput"
        isFilterable
        onFilter={handleFilter}
        alignSelf="flex-start"
        freeInput
        removeOnBackspace={false}
        mb="xlarge"
      />

      <Heading mb="medium" as="h4">
        Validation Errors
      </Heading>
      <SelectMulti
        name="fruitError"
        options={selectOptions}
        placeholder="Select fruits"
        closeOnSelect
        mb="xlarge"
        validationType="error"
      />
      <Heading mb="medium" as="h4">
        Custom Indicator
      </Heading>
      <SelectMulti
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
    </Box>
  )
}
