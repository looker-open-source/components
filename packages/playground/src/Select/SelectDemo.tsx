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

import React, { MouseEvent } from 'react'
import {
  Button,
  Dialog,
  Divider,
  Label,
  Box,
  Select,
  FieldSelect,
  ModalContent,
  ComboboxOptionObject,
  SelectOptionProps,
  SelectOptionGroupProps,
  Flex,
} from '@looker/components'

const options = [
  { label: 'Apples', value: '1' },
  { label: 'Bananas', value: '2' },
  { label: 'Oranges', value: '3' },
  { label: 'Pineapples', value: '4' },
  { label: 'Kiwis', value: '5' },
  { label: 'Apples2', value: '12' },
  { label: 'Bananas2', value: '22' },
  { label: 'Oranges2', value: '32' },
  { label: 'Pineapples2', value: '42' },
  { label: 'Kiwis3', value: '52' },
  { label: 'Apples3', value: '13' },
  { label: 'Bananas3', value: '23' },
  { label: 'Oranges3', value: '33' },
  { label: 'Pineapples3', value: '43' },
  { label: 'Kiwis3', value: '53' },
  { label: 'Apples4', value: '14' },
  { label: 'Bananas4', value: '24' },
  { label: 'Oranges4', value: '34' },
  { label: 'Pineapples4', value: '44' },
  { label: 'Kiwis4', value: '54' },
  { label: 'Apples5', value: '15' },
  { label: 'Bananas5', value: '25' },
  { label: 'Oranges5', value: '35' },
  { label: 'Pineapples5', value: '45' },
  { label: 'Kiwis5', value: '55' },
]

const optionsWithGroups = [
  { options, title: 'FRUITS' },
  {
    options: [
      { label: 'Honda', value: 'honda' },
      { label: 'Toyota', value: 'toyota' },
    ],
    title: 'CARS',
  },
]

const optionsWithDescriptions = options.map((option: ComboboxOptionObject) => ({
  ...option,
  description: `${option.label} are the best ever!`,
}))

function checkOption(option: ComboboxOptionObject, searchTerm: string) {
  return (
    option.label &&
    option.label.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
  )
}

function optionReducer(searchTerm: string) {
  return (acc: SelectOptionProps[], option: SelectOptionProps) => {
    const optionAsGroup = option as SelectOptionGroupProps
    if (optionAsGroup.title) {
      const filteredGroupOptions = optionAsGroup.options.filter(option =>
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

export function SelectContent() {
  const [value, setValue] = React.useState()
  const [searchTerm, setSearchTerm] = React.useState('')
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
  const newOptions = React.useMemo(() => {
    if (searchTerm === '') return optionsWithGroups
    return optionsWithGroups.reduce(optionReducer(searchTerm), [])
  }, [searchTerm])
  return (
    <Box m="xlarge">
      <Label>
        Use alignSelf="flex-start" to avoid filling height as a flex child
      </Label>
      <Flex>
        <Flex
          height={200}
          width={200}
          bg="palette.charcoal300"
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
    </Box>
  )
}

const ModalInner = () => {
  return (
    <ModalContent>
      <SelectContent />
    </ModalContent>
  )
}

export const SelectDemo = () => {
  const [isOpen, setOpen] = React.useState(false)
  const handleClick = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Dialog isOpen={isOpen} onClose={handleClose}>
        <ModalInner />
      </Dialog>
      <Button onClick={handleClick} m="large">
        Open
      </Button>
    </>
  )
}
