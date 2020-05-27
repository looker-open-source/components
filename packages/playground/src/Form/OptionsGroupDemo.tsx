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
import {
  CheckboxGroup,
  FieldCheckboxGroup,
  FieldRadioGroup,
  Grid,
  RadioGroup,
} from '@looker/components'

export const OptionsGroupDemo = () => {
  const options = [
    {
      label: 'Cheddar',
      value: 'cheddar',
    },
    {
      label: 'Gouda',
      value: 'gouda',
    },
    {
      disabled: true,
      label: 'Swiss',
      value: 'swiss',
    },
    {
      label: 'Roquefort',
      value: 'roquefort',
    },
  ]

  const defaultValueCheckbox = ['swiss', 'cheddar']
  const defaultValueRadio = 'swiss'

  const [valueCheckbox, setValueCheckbox] = useState(['cheddar'])
  const [valueRadio, setValueRadio] = useState('cheddar')

  return (
    <Grid m="xxlarge">
      <CheckboxGroup defaultValue={defaultValueCheckbox} options={options} />
      <CheckboxGroup
        defaultValue={defaultValueCheckbox}
        inline
        options={options}
      />
      <FieldCheckboxGroup
        defaultValue={defaultValueCheckbox}
        label="Cheeses"
        description="Pick all your cheeses"
        options={options}
      />
      <FieldCheckboxGroup
        value={valueCheckbox}
        onChange={setValueCheckbox}
        inline
        label="Cheeses (controlled)"
        description="Pick all your cheeses"
        options={options}
      />
      <FieldCheckboxGroup
        defaultValue={defaultValueCheckbox}
        required
        label="Cheeses"
        description="Pick all your cheeses"
        validationMessage={{
          message: 'Select at least 1 cheese',
          type: 'error',
        }}
        options={options}
      />
      <FieldCheckboxGroup
        defaultValue={defaultValueCheckbox}
        validationMessage={{
          message: 'Select at least 1 cheese',
          type: 'error',
        }}
        inline
        required
        label="Cheeses"
        description="Pick all your cheeses"
        options={options}
      />
      <CheckboxGroup
        disabled
        defaultValue={defaultValueCheckbox}
        options={options}
      />
      <CheckboxGroup
        disabled
        defaultValue={defaultValueCheckbox}
        inline
        options={options}
      />
      <FieldCheckboxGroup
        disabled
        defaultValue={['swiss']}
        label="Cheeses"
        description="Pick all your cheeses"
        options={options}
      />
      <FieldCheckboxGroup
        disabled
        defaultValue={['swiss']}
        inline
        label="Cheeses"
        description="Pick all your cheeses"
        options={options}
      />
      <RadioGroup
        defaultValue={defaultValueRadio}
        options={options}
        onChange={alert}
      />
      <RadioGroup defaultValue={defaultValueRadio} inline options={options} />
      <FieldRadioGroup
        onChange={setValueRadio}
        value={valueRadio}
        required
        label="Cheeses (controlled)"
        options={options}
      />
      <FieldRadioGroup
        defaultValue={defaultValueRadio}
        inline
        required
        label="Cheeses"
        options={options}
      />
    </Grid>
  )
}
