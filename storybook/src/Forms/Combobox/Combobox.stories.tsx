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

import React, { FC, useState } from 'react'
import {
  Combobox,
  ComboboxMulti,
  ComboboxMultiInput,
  ComboboxMultiList,
  ComboboxMultiOption,
  ComboboxOption,
  OptionIndicatorProps,
  ComboboxList,
  ComboboxInput,
  Heading,
  Space,
  SpaceVertical,
} from '@looker/components'

const CustomIndicator: FC<OptionIndicatorProps> = ({
  isActive,
  isSelected,
}) => {
  return <>{isSelected ? '>>' : isActive ? '>' : ''}</>
}

export function ComboboxDemo() {
  const [option, setOption] = useState({ value: 'Bananas' })
  function handleChange(newOption: any) {
    setOption(newOption)
  }
  const [options, setOptions] = useState([{ value: 'Bananas' }])
  function handleMultiChange(newOptions: any) {
    setOptions(newOptions)
  }

  return (
    <Space p="large" align="start">
      <SpaceVertical>
        <Heading>Controlled</Heading>
        <Combobox width={300} value={option} onChange={handleChange}>
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
        <Combobox width={300}>
          <ComboboxInput />
          <ComboboxList>
            <ComboboxOption value="Apples super long text to see what wrapping looks like" />
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
      </SpaceVertical>
      <SpaceVertical>
        <Heading>Indicator</Heading>
        <Combobox width={300}>
          <ComboboxInput placeholder="indicator={false}" />
          <ComboboxList indicator={false} persistSelection>
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
          <ComboboxMultiInput
            onClear={() => alert('CLEAR')}
            placeholder="Custom indicator"
          />
          <ComboboxMultiList indicator={CustomIndicator} persistSelection>
            <ComboboxMultiOption value="Apples" />
            <ComboboxMultiOption value="Oranges" />
            <ComboboxMultiOption value="Grapes" />
            <ComboboxMultiOption value="Bananas" />
            <ComboboxMultiOption value="Pineapples" />
          </ComboboxMultiList>
        </ComboboxMulti>
      </SpaceVertical>
    </Space>
  )
}

export default {
  title: 'Forms/Combobox',
}
