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
} from '@looker/components'

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
      <Combobox width={300} mb="medium" value={option} onChange={handleChange}>
        {/* <Combobox width={300} mb="medium"> */}
        <ComboboxInput />
        <ComboboxList>
          <ComboboxOption value="Apples" />
          <ComboboxOption value="Oranges" />
          <ComboboxOption value="Grapes" />
          <ComboboxOption value="Bananas" />
          <ComboboxOption value="Pineapples" />
        </ComboboxList>
      </Combobox>
      <ComboboxMulti width={300} values={options} onChange={handleMultiChange}>
        {/* <ComboboxMulti width={300}> */}
        <ComboboxMultiInput onClear={() => console.log('CLEAR')} />
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
