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

import React, { FormEvent, useState } from 'react'
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
  Slider,
  Heading,
  Label,
  FieldSelect,
  SelectMulti,
} from '@looker/components'

const options = [
  { label: 'Apples', value: '1' },
  { label: 'Bananas', value: '2' },
  { label: 'Oranges', value: '3' },
  { label: 'Pineapples', value: '4' },
  { label: 'Kiwis', value: '5' },
]

export function ListWidthDemo() {
  const [containerWidth, setContainerWidth] = useState(400)
  function handleWidthChange(e: FormEvent<HTMLInputElement>) {
    setContainerWidth(parseInt(e.currentTarget.value, 10))
  }

  return (
    <Box p="large">
      <Heading mb="medium">ComboboxList width override</Heading>
      <Label>Move slider to adjust container width:</Label>
      <Slider
        min={100}
        max={1000}
        step={10}
        value={containerWidth}
        onChange={handleWidthChange}
        width={400}
      />
      <Box p={20} width={containerWidth + 40} bg="palette.charcoal100">
        <Heading>Combobox</Heading>
        <Combobox mb="medium">
          <ComboboxInput placeholder="width=500" />
          <ComboboxList width={500}>
            <ComboboxOption value="Apples" />
            <ComboboxOption value="Oranges" />
            <ComboboxOption value="Grapes" />
            <ComboboxOption value="Bananas" />
            <ComboboxOption value="Pineapples" />
          </ComboboxList>
        </Combobox>
        <Combobox mb="medium">
          <ComboboxInput placeholder="minWidth=420" />
          <ComboboxList minWidth={420}>
            <ComboboxOption value="Apples" />
            <ComboboxOption value="Oranges" />
            <ComboboxOption value="Grapes" />
            <ComboboxOption value="Bananas" />
            <ComboboxOption value="Pineapples" />
          </ComboboxList>
        </Combobox>
        <Heading>ComboboxMulti</Heading>
        <Label>Try shrinking down the window width with the list open:</Label>
        <ComboboxMulti mb="large">
          <ComboboxMultiInput
            onClear={() => alert('CLEAR')}
            placeholder="maxWidth=800 width=calc(100vw - 50px)"
          />
          <ComboboxMultiList maxWidth={800} width="calc(100vw - 50px)">
            <ComboboxMultiOption value="Apples" />
            <ComboboxMultiOption value="Oranges" />
            <ComboboxMultiOption value="Grapes" />
            <ComboboxMultiOption value="Bananas" />
            <ComboboxMultiOption value="Pineapples" />
          </ComboboxMultiList>
        </ComboboxMulti>
        <Heading>Select</Heading>
        <FieldSelect
          label="width=500"
          mb="medium"
          options={options}
          aria-label="Fruits"
          defaultValue="1"
          listWidthSettings={{ width: 500 }}
        />
        <FieldSelect
          label="minWidth=420"
          mb="medium"
          options={options}
          aria-label="Fruits"
          defaultValue="1"
          listWidthSettings={{ minWidth: 420 }}
        />
        <Heading>SelectMulti</Heading>
        <Label>maxWidth=800 width=calc(100vw - 50px)</Label>
        <SelectMulti
          options={options}
          aria-label="Fruits"
          defaultValues={['1']}
          listWidthSettings={{ maxWidth: 800, width: 'calc(100vw - 50px)' }}
        />
      </Box>
    </Box>
  )
}
