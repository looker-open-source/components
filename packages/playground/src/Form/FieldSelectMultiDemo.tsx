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

import React, { FC } from 'react'
import { FieldSelectMulti, Grid } from '@looker/components'

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

export const FieldSelectMultiDemo: FC = () => {
  return (
    <>
      <Grid m="xxlarge">
        <FieldSelectMulti
          description="this is the description"
          detail="5/50"
          label="Label"
          options={selectOptions}
          placeholder="Search fruits"
        />
        <FieldSelectMulti
          label="Label"
          required
          options={selectOptions}
          placeholder="placeholder"
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
        <FieldSelectMulti
          description="this is the description"
          detail="5/50"
          label="Label"
          options={selectOptions}
          placeholder="placeholder"
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
        <FieldSelectMulti
          disabled
          label="Label"
          options={selectOptions}
          placeholder="placeholder"
        />
      </Grid>
    </>
  )
}
