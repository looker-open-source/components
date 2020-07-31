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

import React, { MouseEvent, useMemo, useState } from 'react'
import {
  Card,
  CardContent,
  Form,
  Button,
  Dialog,
  Divider,
  Label,
  Box,
  Heading,
  Icon,
  Select,
  Fieldset,
  FieldSelect,
  DialogContent,
  ComboboxOptionObject,
  SelectOptionProps,
  SelectOptionGroupProps,
  SpaceVertical,
  Text,
  Flex,
} from '@looker/components'
import { options1k } from './options1k'

export const All = () => (
  <Fieldset>
    <Basic />
    <Disabled />
    <Detail />
    <Description />
    <Error />
    <Inline />
    <InlineError />
    <SelectDemo />
  </Fieldset>
)

export default {
  component: All,
  title: 'Forms/Select',
}

const commonProps = {
  label: 'Label',
  options: [
    { label: 'Cheddar', value: 'cheddar' },
    { label: 'Gouda', value: 'gouda' },
    { label: 'Swiss', value: 'swiss' },
  ],
  placeholder: 'Placeholder',
}

export const Basic = () => <FieldSelect {...commonProps} />
export const Disabled = () => <FieldSelect {...commonProps} disabled />
export const Detail = () => (
  <FieldSelect {...commonProps} detail="0/50" required />
)
export const Description = () => (
  <FieldSelect {...commonProps} description="I'm a little teapot" />
)
export const Required = () => <FieldSelect {...commonProps} required />
export const Error = () => (
  <FieldSelect
    {...commonProps}
    validationMessage={{ message: 'Error Message', type: 'error' }}
  />
)
export const Inline = () => <FieldSelect {...commonProps} inline />
export const InlineError = () => (
  <FieldSelect
    {...commonProps}
    inline
    validationMessage={{ message: 'Error Message', type: 'error' }}
  />
)

const options = [
  { label: 'Apples', value: '1' },
  { label: 'Bananas', value: '2' },
  { label: 'Oranges', value: '3' },
  { label: 'Pineapples', value: '4' },
  { label: 'Kiwis', value: '5' },
]
const options2 = [
  { label: 'Apples2', value: '12' },
  { label: 'Bananas2', value: '22' },
  { label: 'Oranges2', value: '32' },
  { label: 'Pineapples2', value: '42' },
  { label: 'Kiwis2', value: '52' },
]
const options3 = [
  { label: 'Apples3', value: '13' },
  { label: 'Bananas3', value: '23' },
  { label: 'Oranges3', value: '33' },
  { label: 'Pineapples3', value: '43' },
  { label: 'Kiwis3', value: '53' },
]
const options4 = [
  { label: 'Apples4', value: '14' },
  { label: 'Bananas4', value: '24' },
  { label: 'Oranges4', value: '34' },
  { label: 'Pineapples4', value: '44' },
  { label: 'Kiwis4', value: '54' },
]
const options5 = [
  { label: 'Apples5', value: '15' },
  { label: 'Bananas5', value: '25' },
  { label: 'Oranges5', value: '35' },
  { label: 'Pineapples5', value: '45' },
  { label: 'Kiwis5', value: '55' },
]

const optionsWithGroups = [
  { options },
  { options: options2 },
  { options: options3 },
  { options: options4 },
  { options: options5 },
  {
    label: 'CARS',
    options: [
      { description: 'Great resale value', label: 'Honda', value: 'honda' },
      { description: 'Most popular make', label: 'Toyota', value: 'toyota' },
    ],
  },
]

const optionsWithDescriptions = options.map((option: ComboboxOptionObject) => ({
  ...option,
  description: `${option.label} are the best ever!`,
}))

function checkOption(option: ComboboxOptionObject, searchTerm: string) {
  return (
    option.label &&
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  )
}

function optionReducer(searchTerm: string) {
  return (acc: SelectOptionProps[], option: SelectOptionProps) => {
    const optionAsGroup = option as SelectOptionGroupProps
    if (optionAsGroup.options) {
      const filteredGroupOptions = optionAsGroup.options.filter((option) =>
        checkOption(option, searchTerm)
      )
      if (filteredGroupOptions.length > 0) {
        return [...acc, { ...optionAsGroup, options: filteredGroupOptions }]
      }
      return acc
    }
    if (checkOption(option as ComboboxOptionObject, searchTerm)) {
      return [...acc, option]
    }
    return acc
  }
}

function TestIndicator() {
  return <Text color="pink">***</Text>
}

export function SelectContent() {
  const [value, setValue] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const fruit = e.currentTarget.getAttribute('data-fruit') || ''
    setValue(fruit)
  }
  function handleChange(value: string) {
    setValue(value)
  }
  function handleFilter(term: string) {
    setSearchTerm(term)
  }
  const newOptions = useMemo(() => {
    if (searchTerm === '') return options1k
    return options1k.reduce(optionReducer(searchTerm), [])
  }, [searchTerm])
  return (
    <Box p="large">
      <Heading mb="large">Select</Heading>
      <FieldSelect
        label="1k (windowed) options"
        width={300}
        mb="medium"
        options={options1k}
        aria-label="Fruits"
        placeholder="Select Brand"
        defaultValue="Boulder Creek"
      />
      <Label>
        Use alignSelf="flex-start" to avoid filling height as a flex child
      </Label>
      <Flex>
        <Flex
          height={200}
          width={200}
          bg="ui3"
          alignItems="center"
          justifyContent="center"
          mr="small"
        >
          200 x 200
        </Flex>
        <Select
          width={300}
          mb="medium"
          options={newOptions}
          aria-label="Fruits"
          placeholder="Controlled, searchable, clearable"
          isClearable
          value={value}
          onChange={handleChange}
          onFilter={handleFilter}
          isFilterable
          alignSelf="flex-start"
        />
      </Flex>
      <Box>
        <Button mt="medium" mr="small" data-fruit="5" onClick={handleClick}>
          Kiwis
        </Button>
        <Button mt="medium" data-fruit="3" onClick={handleClick}>
          Oranges
        </Button>
      </Box>
      <Divider my="xlarge" />
      <SpaceVertical>
        <FieldSelect
          label="Default Value"
          width={300}
          mb="medium"
          options={options}
          aria-label="Fruits"
          defaultValue="1"
        />
        <FieldSelect
          label="Groups"
          width={300}
          mb="medium"
          options={optionsWithGroups}
          aria-label="Fruits"
          defaultValue="1"
        />
        <FieldSelect
          label="Descriptions"
          width={300}
          mb="medium"
          options={optionsWithDescriptions}
          aria-label="Fruits"
          defaultValue="1"
        />
        <FieldSelect
          label="Error"
          width={300}
          options={options}
          aria-label="Fruits"
          placeholder="Select One"
          defaultValue="1"
          validationMessage={{ message: 'An error message', type: 'error' }}
        />
        <FieldSelect
          label="Disabled"
          width={300}
          mb="medium"
          options={options}
          aria-label="Fruits"
          placeholder="Select One"
          disabled
          defaultValue="1"
        />
        <FieldSelect
          label="Indicator"
          width={300}
          mb="medium"
          options={[
            ...options,
            {
              indicator: TestIndicator,
              label: 'I have my own indicator',
              value: 'indicator',
            },
          ]}
          aria-label="Fruits"
          defaultValue="1"
          indicator={<Icon name="Favorite" />}
        />
      </SpaceVertical>
    </Box>
  )
}

export const SelectDemo = () => {
  const [isOpen, setOpen] = useState(false)
  const handleClick = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Dialog isOpen={isOpen} onClose={handleClose}>
        <DialogContent>
          <SelectContent />
        </DialogContent>
      </Dialog>
      <Button onClick={handleClick} m="large">
        Open
      </Button>
      <Card maxWidth="500px" maxHeight="300px" m="large">
        <CardContent>
          <Form
            validationMessages={{
              fruitGroups: { message: 'This is an error', type: 'error' },
            }}
          >
            <Heading>Error State</Heading>
            <FieldSelect
              label="Fruit Groups"
              name="fruitGroups"
              width={300}
              options={optionsWithGroups}
              aria-label="Fruits"
              defaultValue="1"
            />
            <FieldSelect
              label="Another Grouped Dropdown"
              name="anotherGroup"
              width={300}
              options={optionsWithGroups}
              aria-label="Fruits"
              defaultValue="1"
              isClearable
            />
          </Form>
        </CardContent>
      </Card>
    </>
  )
}
