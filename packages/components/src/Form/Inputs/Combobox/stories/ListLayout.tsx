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
import { Slider, Label, FieldSelect, SelectMulti } from '../../..'
import { Card } from '../../../../Card'
import { SpaceVertical } from '../../../../Layout'
import { Heading } from '../../../../Text'
import {
  Combobox,
  ComboboxMulti,
  ComboboxMultiInput,
  ComboboxMultiList,
  ComboboxMultiOption,
  ComboboxOption,
  ComboboxList,
  ComboboxInput,
} from '..'

const options = [
  { label: 'Apples', value: '1' },
  { label: 'Bananas', value: '2' },
  { label: 'Oranges', value: '3' },
  { label: 'Pineapples', value: '4' },
  { label: 'Kiwis', value: '5' },
]

export const ListLayoutDemo = () => {
  const [containerWidth, setContainerWidth] = useState(400)
  const handleWidthChange = (e: FormEvent<HTMLInputElement>) => {
    setContainerWidth(parseInt(e.currentTarget.value, 10))
  }

  return (
    <SpaceVertical p="large">
      <Heading>ComboboxList width override</Heading>
      <Label>Move slider to adjust container width:</Label>
      <Slider
        min={100}
        max={1000}
        step={10}
        value={containerWidth}
        onChange={handleWidthChange}
        width={400}
      />
      <Card p={20} width={containerWidth + 40}>
        <SpaceVertical>
          <Heading>Combobox</Heading>
          <Combobox>
            <ComboboxInput placeholder="width=500" />
            <ComboboxList width={500}>
              <ComboboxOption value="Apples" />
              <ComboboxOption value="Oranges" />
              <ComboboxOption value="Grapes" />
              <ComboboxOption value="Bananas" />
              <ComboboxOption value="Pineapples" />
            </ComboboxList>
          </Combobox>
          <Combobox>
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
          <ComboboxMulti>
            <ComboboxMultiInput placeholder="maxWidth=800 width=calc(100vw - 50px)" />
            <ComboboxMultiList maxWidth={800} width="calc(100vw - 50px)">
              <ComboboxMultiOption value="Apples" />
              <ComboboxMultiOption value="Oranges" />
              <ComboboxMultiOption value="Grapes" />
              <ComboboxMultiOption value="Bananas" />
              <ComboboxMultiOption value="Pineapples" />
            </ComboboxMultiList>
          </ComboboxMulti>
          <ComboboxMulti>
            <ComboboxMultiInput placeholder="maxHeight={100}" />
            <ComboboxMultiList maxHeight={100}>
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
            options={options}
            aria-label="Fruits"
            defaultValue="1"
            listLayout={{ width: 500 }}
          />
          <FieldSelect
            label="minWidth=420"
            options={options}
            aria-label="Fruits"
            defaultValue="1"
            listLayout={{ minWidth: 420 }}
          />
          <Heading>SelectMulti</Heading>
          <Label>maxWidth=800 width=calc(100vw - 50px)</Label>
          <SelectMulti
            options={options}
            aria-label="Fruits"
            defaultValues={['1']}
            listLayout={{ maxWidth: 800, width: 'calc(100vw - 50px)' }}
          />
          <Label>maxHeight=100</Label>
          <SelectMulti
            options={options}
            aria-label="Fruits"
            defaultValues={['1']}
            listLayout={{ maxHeight: 100 }}
          />
        </SpaceVertical>
      </Card>
    </SpaceVertical>
  )
}

ListLayoutDemo.parameters = {
  storyshots: { disable: true },
}
