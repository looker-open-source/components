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
import React, { useState } from 'react'
import { render } from 'react-dom'
import {
  ComponentsProvider,
  FieldSelect,
  FieldChips,
  SpaceVertical,
} from '@looker/components'
import 'core-js/stable'

const App = () => {
  const [values, setValues] = useState(['Cheddar', 'Gouda', 'Swiss'])
  return (
    <ComponentsProvider loadGoogleFonts>
      <SpaceVertical width={500} p="large">
        <FieldSelect
          label="Select value via click"
          options={[
            { label: 'Cheddar', value: 'cheddar' },
            { label: 'Gouda', value: 'gouda' },
            { label: 'Swiss', value: 'swiss' },
          ]}
        />
        <FieldChips
          label="Select current values"
          description="Then focus out of the field. Confirm values are deselected."
          values={values}
          onChange={setValues}
        />
      </SpaceVertical>
    </ComponentsProvider>
  )
}
document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('container'))
})
