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
  FieldText,
  Grid,
  RadioGroup,
  Space,
  SpaceVertical,
  Divider,
} from '@looker/components'

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

const optionsLong = [
  { label: 'Alabama', value: 'Alabama' },
  { label: 'Alaska', value: 'Alaska' },
  { label: 'Arizona', value: 'Arizona' },
  { label: 'Arkansas', value: 'Arkansas' },
  { label: 'California', value: 'California' },
  { label: 'Colorado', value: 'Colorado' },
  { label: 'Connecticut', value: 'Connecticut' },
  { label: 'Delaware', value: 'Delaware' },
  { label: 'Florida', value: 'Florida' },
  { label: 'Georgia', value: 'Georgia' },
  { label: 'Hawaii', value: 'Hawaii' },
  { label: 'Idaho', value: 'Idaho' },
  { label: 'Illinois', value: 'Illinois' },
  { label: 'Indiana', value: 'Indiana' },
  { label: 'Iowa', value: 'Iowa' },
  { label: 'Kansas', value: 'Kansas' },
  { label: 'Kentucky', value: 'Kentucky' },
  { label: 'Louisiana', value: 'Louisiana' },
  { label: 'Maine', value: 'Maine' },
  { label: 'Maryland', value: 'Maryland' },
  { label: 'Massachusetts', value: 'Massachusetts' },
  { label: 'Michigan', value: 'Michigan' },
  { label: 'Minnesota', value: 'Minnesota' },
  { label: 'Mississippi', value: 'Mississippi' },
  { label: 'Missouri', value: 'Missouri' },
  { label: 'Montana', value: 'Montana' },
  { label: 'Nebraska', value: 'Nebraska' },
  { label: 'Nevada', value: 'Nevada' },
  { label: 'New Hampshire', value: 'New Hampshire' },
  { label: 'New Jersey', value: 'New Jersey' },
  { label: 'New Mexico', value: 'New Mexico' },
  { label: 'New York', value: 'New York' },
  { label: 'North Carolina', value: 'North Carolina' },
  { label: 'North Dakota', value: 'North Dakota' },
  { label: 'Ohio', value: 'Ohio' },
  { label: 'Oklahoma', value: 'Oklahoma' },
  { label: 'Oregon', value: 'Oregon' },
  { label: 'Pennsylvania', value: 'Pennsylvania' },
  { label: 'Rhode Island', value: 'Rhode Island' },
  { label: 'South Carolina', value: 'South Carolina' },
  { label: 'South Dakota', value: 'South Dakota' },
  { label: 'Tennessee', value: 'Tennessee' },
  { label: 'Texas', value: 'Texas' },
  { label: 'Utah', value: 'Utah' },
  { label: 'Vermont', value: 'Vermont' },
  { label: 'Virginia', value: 'Virginia' },
  { label: 'Washington', value: 'Washington' },
  { label: 'West Virginia', value: 'West Virginia' },
  { label: 'Wisconsin', value: 'Wisconsin' },
  { label: 'Wyoming', value: 'Wyoming' },
]

function WrappingAndAlignment() {
  return (
    <>
      <SpaceVertical>
        <FieldCheckboxGroup
          inline
          label="Inline Checkboxes"
          description="Pick all your cheeses"
          options={options}
        />
        <FieldRadioGroup
          inline
          label="Inline Radios"
          description="Pick all your cheeses"
          options={options}
        />
      </SpaceVertical>
      <SpaceVertical>
        <Space>
          <FieldText
            label="FieldText to show alignment"
            description="Inputs line up now"
          />
          <FieldCheckboxGroup
            inputsInline
            label="Checkboxes inputsInline"
            description="Pick all your cheeses"
            options={options}
          />
        </Space>
        <Space>
          <FieldText
            label="FieldText to show alignment"
            description="Inputs line up now"
          />
          <FieldRadioGroup
            inputsInline
            label="Radios inputsInline"
            description="Pick all your cheeses"
            options={options}
          />
        </Space>
      </SpaceVertical>
      <CheckboxGroup
        defaultValue={['California']}
        inline
        options={optionsLong}
      />
      <RadioGroup defaultValue="California" inline options={optionsLong} />
      <Divider />
      <Divider />
    </>
  )
}

export const OptionsGroupDemo = () => {
  const defaultValueCheckbox = ['swiss', 'cheddar']
  const defaultValueRadio = 'swiss'

  const [valueCheckbox, setValueCheckbox] = useState(['cheddar'])
  const [valueRadio, setValueRadio] = useState('cheddar')

  return (
    <Grid m="xxlarge">
      <WrappingAndAlignment />
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
