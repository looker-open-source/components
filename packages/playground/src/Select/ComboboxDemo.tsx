/*
 MIT License
 Copyright (c) 2019 Looker Data Sciences, Inc.
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
  Combobox,
  ComboboxMulti,
  ComboboxMultiInput,
  ComboboxMultiList,
  ComboboxMultiOption,
  ComboboxOption,
  ComboboxList,
  ComboboxInput,
  Heading,
  SelectMulti,
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

export function ComboboxDemo() {
  const [option, setOption] = React.useState({ value: 'Bananas' })
  function handleChange(newOption: any) {
    setOption(newOption)
  }
  const [options, setOptions] = React.useState([{ value: 'Bananas' }])
  function handleMultiChange(newOptions: any) {
    setOptions(newOptions)
  }

  return (
    <Box p="large">
      <SelectMulti
        width={300}
        mb="medium"
        options={selectOptions}
        aria-label="Fruits"
        placeholder="Controlled, searchable, clearable"
        isClearable
        isFilterable
        alignSelf="flex-start"
      />
      <Heading>Controlled</Heading>
      <Combobox width={300} mb="medium" value={option} onChange={handleChange}>
        <ComboboxInput />
        <ComboboxList>
          <ComboboxOption value="Apples" />
          <ComboboxOption value="Oranges" />
          <ComboboxOption value="Grapes" />
          <ComboboxOption value="Bananas" />
          <ComboboxOption value="Pineapples" />
        </ComboboxList>
      </Combobox>
      <ComboboxMulti
        width={300}
        maxHeight={75}
        mb="medium"
        values={options}
        onChange={handleMultiChange}
      >
        <ComboboxMultiInput onClear={() => alert('CLEAR')} />
        <ComboboxMultiList>
          <ComboboxMultiOption value="Apples" />
          <ComboboxMultiOption value="Oranges" />
          <ComboboxMultiOption value="Grapes" />
          <ComboboxMultiOption value="Bananas" />
          <ComboboxMultiOption value="Pineapples" />
        </ComboboxMultiList>
      </ComboboxMulti>
      <Heading>Uncontrolled</Heading>
      <Combobox width={300} mb="medium">
        <ComboboxInput />
        <ComboboxList>
          <ComboboxOption value="Apples" />
          <ComboboxOption value="Oranges" />
          <ComboboxOption value="Grapes" />
          <ComboboxOption value="Bananas" />
          <ComboboxOption value="Pineapples" />
          <ComboboxOption
            value=""
            label="Create New Option"
            highlightText={false}
          />
        </ComboboxList>
      </Combobox>
      <ComboboxMulti width={300}>
        <ComboboxMultiInput onClear={() => alert('CLEAR')} />
        <ComboboxMultiList>
          <ComboboxMultiOption value="Apples" />
          <ComboboxMultiOption value="Oranges" />
          <ComboboxMultiOption value="Grapes" />
          <ComboboxMultiOption value="Bananas" />
          <ComboboxMultiOption value="Pineapples" />
        </ComboboxMultiList>
      </ComboboxMulti>
    </Box>
  )
}
