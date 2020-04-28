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

import { noop } from 'lodash'
import React from 'react'
import {
  FieldCheckbox,
  FieldCheckboxGroup,
  FieldRadio,
  FieldText,
  FieldTextArea,
  FieldToggleSwitch,
  Grid,
  Form,
} from '@looker/components'

export const Demo = () => {
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

  const value = ['swiss', 'cheddar']
  return (
    <>
      <Grid m="xxlarge" columns={2}>
        <FieldTextArea
          label="Text Area"
          required
          resize="both"
          placeholder="resize in both directions"
        />
        <FieldTextArea
          disabled
          inline
          label="Text Area"
          required
          resize="both"
          placeholder="resize in both directions"
        />
        <FieldTextArea
          label="Text Area"
          placeholder="no resize"
          resize="none"
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
        <FieldTextArea
          inline
          label="Text Area"
          placeholder="only resize horizontally"
          resize="vertical"
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
        <FieldText
          detail="5/50"
          iconAfter="Check"
          label="hello"
          placeholder="placeholder"
        />
        <FieldText
          detail="5/50"
          inline
          label="hello"
          placeholder="placeholder"
          prefix="$"
        />
        <FieldText
          detail="5/50"
          iconAfter="Check"
          label="hello"
          placeholder="placeholder"
          required
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
        <FieldText
          detail="5/50"
          inline
          label="hello"
          placeholder="placeholder"
          prefix="$"
          required
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
      </Grid>
      <FieldText
        description="description text"
        detail="5/50"
        inline
        label="hello"
        placeholder="placeholder"
        prefix="$"
        required
        validationMessage={{ message: 'validation Message', type: 'error' }}
      />
      <Grid m="xxlarge" columns={3}>
        <div>
          <FieldCheckbox label="Checkbox" />
          <FieldCheckbox disabled label="disabled" />
          <FieldCheckbox readOnly label="readOnly" />
          <FieldCheckbox required label="required" />
          <FieldCheckbox
            label="validationMessage"
            validationMessage={{ message: 'validation Message', type: 'error' }}
          />
        </div>
        <div>
          <FieldRadio label="Radio" />
          <FieldRadio disabled label="Radio" />
        </div>
        <div>
          <FieldToggleSwitch label="Toggle Switch" />
          <FieldToggleSwitch disabled label="Toggle Switch" />
          <FieldToggleSwitch required label="Toggle Switch" />
          <FieldToggleSwitch
            label="Toggle Switch"
            validationMessage={{ message: 'validation Message', type: 'error' }}
          />
        </div>
      </Grid>
      <Grid m="xxlarge" columns={2}>
        <FieldCheckboxGroup
          onChange={noop}
          defaultValue={value}
          name="group1"
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
          onChange={noop}
          defaultValue={value}
          validationMessage={{
            message: 'Select at least 1 cheese',
            type: 'error',
          }}
          inline
          required
          name="group1"
          label="Cheeses"
          description="Pick all your cheeses"
          options={options}
        />
        <Form>
          <FieldText label="Text Input" prefix="$" placeholder="Money" />
          <FieldText label="Text Input" prefix="$" placeholder="Money" />
          <FieldText label="Text Input" prefix="$" placeholder="MONEY!!!" />
        </Form>
        <Form>
          <FieldText inline label="Text Input" prefix="$" placeholder="Money" />
          <FieldText inline label="Text Input" prefix="$" placeholder="Money" />
          <FieldText
            inline
            label="Text Input"
            prefix="$"
            placeholder="MONEY!!!"
          />
        </Form>
      </Grid>
    </>
  )
}
