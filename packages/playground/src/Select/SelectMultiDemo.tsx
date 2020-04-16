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

import React from 'react'
import {
  Box,
  Heading,
  List,
  ListItem,
  SelectMulti,
  SelectOptionProps,
} from '@looker/components'

const selectOptions = [
  { label: 'Apples', value: '1' },
  { label: 'Bananas', value: '2' },
  { label: 'Oranges', value: '3' },
  { label: 'Pineapples', value: '4' },
  { label: 'Kiwis', value: '5' },
  { label: 'Apples2', value: '12' },
  { label: 'Bananas2', value: '22' },
  { label: 'Oranges2', value: '32' },
  { label: 'Pineapples2', value: '42' },
  { label: 'Kiwis2', value: '52' },
  { label: 'Apples3', value: '13' },
  { label: 'Bananas3', value: '23' },
  { label: 'Oranges3', value: '33' },
  { label: 'Pineapples3', value: '43' },
  { label: 'Kiwis3', value: '53' },
]
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

export function SelectMultiDemo() {
  const [searchTerm, setSearchTerm] = React.useState('')
  function handleFilter(term: string) {
    setSearchTerm(term)
  }

  const newOptions = React.useMemo(() => {
    if (searchTerm === '')
      return selectOptions.map((option) => ({
        ...option,
        description: 'Lorem ipsum',
      }))
    return selectOptions.reduce((acc, option) => {
      if (option.label.toLowerCase().includes(searchTerm.toLowerCase())) {
        acc.push({ ...option, description: 'Lorem ipsum' })
      }
      return acc
    }, [] as SelectOptionProps[])
  }, [searchTerm])

  function formatCreate(inputValue: string) {
    return (
      <span>
        Add fruit: <em>{inputValue}</em>
      </span>
    )
  }

  return (
    <Box p="large" width={400}>
      <Heading mb="medium">Option Groups</Heading>
      <SelectMulti
        options={selectGroups}
        placeholder="Search fruits"
        mb="xlarge"
      />
      <Heading mb="medium">Close on Select</Heading>
      <SelectMulti
        options={selectOptions}
        placeholder="Search fruits"
        closeOnSelect
        mb="xlarge"
      />
      <Heading mb="medium">Kitchen Sink</Heading>
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
    </Box>
  )
}
