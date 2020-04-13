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
import { Box, FieldColor, FieldSelect } from '@looker/components'

export function FieldColorDemo() {
  const [color, setColor] = React.useState('red')

  function handleChange(value: string) {
    setColor(value)
  }

  function handleColorChange(e: React.FormEvent<HTMLInputElement>) {
    setColor(e.currentTarget.value)
  }

  return (
    <Box p="large" width={300}>
      <FieldSelect
        options={[{ value: 'green' }, { value: 'purple' }, { value: 'red' }]}
        defaultValue="red"
        onChange={handleChange}
      />
      <FieldColor value={color} onChange={handleColorChange} />
    </Box>
  )
}
