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
import {
  FieldText,
  FieldTextArea,
  FieldSelect,
  FieldCheckbox,
  FieldRadio,
  FieldToggleSwitch,
  Grid,
  InputText,
  Select,
  SpaceVertical,
  TextArea,
} from '@looker/components'

export const FieldsDemo: FC = () => {
  return (
    <SpaceVertical m="xxlarge">
      <TextArea />
      <Select />
      <InputText />

      <Grid>
        <FieldText disabled label="Text Input" placeholder="placeholder" />
        <FieldText
          disabled
          inline
          label="Text Input"
          placeholder="placeholder"
        />{' '}
        <FieldText
          label="Text Input"
          placeholder="placeholder"
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
        <FieldText
          inline
          label="Text Input"
          placeholder="placeholder"
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
        <FieldText
          label="Text Input"
          iconBefore="GearOutline"
          placeholder="placeholder"
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
        <FieldText
          inline
          label="Text Input"
          iconBefore="GearOutline"
          placeholder="placeholder"
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
        <FieldText
          label="Text Input"
          iconAfter="Check"
          placeholder="placeholder"
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
        <FieldText
          inline
          label="Text Input"
          iconAfter="Check"
          placeholder="placeholder"
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
        <FieldText
          label="Text Input"
          suffix="%"
          placeholder="placeholder"
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
        <FieldText
          inline
          label="Text Input"
          suffix="%"
          placeholder="placeholder"
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
        <FieldText
          label="Text Input"
          prefix="$"
          placeholder="placeholder"
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
        <FieldText
          inline
          label="Text Input"
          prefix="$"
          placeholder="placeholder"
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
        <FieldText label="Text Input" placeholder="placeholder" required />
        <FieldText
          inline
          label="Text Input"
          placeholder="placeholder"
          required
        />
        <FieldText
          description="no vegetables allowed"
          label="Text Input"
          placeholder="placeholder"
        />
        <FieldText
          description="no vegetables allowed"
          inline
          label="Text Input"
          placeholder="placeholder"
        />
        <FieldText label="Label" prefix="$" />
        <FieldText inline label="Label" prefix="$" />
        <FieldText label="Label" iconBefore="GearOutline" />
        <FieldText inline label="Label" iconBefore="GearOutline" />
        <FieldText label="Label" suffix="%" />
        <FieldText inline label="Label" suffix="%" />
        <FieldText label="Label" iconAfter="Check" />
        <FieldText inline label="Label" iconAfter="Check" />
        <FieldText label="Label" prefix="$" iconAfter="Check" />
        <FieldText inline label="Label" prefix="$" iconAfter="Check" />
        <FieldText label="hello" detail="5/50" placeholder="placeholder" />
        <FieldText
          inline
          label="hello"
          detail="5/50"
          placeholder="placeholder"
        />
        <FieldText
          label="Label"
          required
          validationMessage={{ message: 'validation Message', type: 'error' }}
          description="A special kind of thing..."
          detail="What?"
        />
        <FieldText
          inline
          label="Label"
          required
          validationMessage={{ message: 'validation Message', type: 'error' }}
          description="A special kind of thing..."
          detail="What?"
        />
        <FieldTextArea label="Text Area" />
        <FieldTextArea placeholder="Neat stuff" inline label="Text Area" />
        <FieldTextArea label="Text Area" disabled />
        <FieldTextArea
          placeholder="Neat stuff"
          inline
          label="Text Area"
          disabled
        />
        <FieldTextArea label="Text Area" required placeholder="Hello world" />
        <FieldTextArea inline label="Text Area" required />
        <FieldTextArea
          label="Text Area"
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
        <FieldTextArea
          inline
          label="Text Area"
          required
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
        <FieldSelect
          label="Label"
          placeholder="placeholder"
          options={[
            { label: 'Cheddar', value: 'cheddar' },
            { label: 'Gouda', value: 'gouda' },
            { label: 'Swiss', value: 'swiss' },
          ]}
        />
        <FieldSelect
          inline
          label="Label"
          placeholder="placeholder"
          options={[
            { label: 'Cheddar', value: 'cheddar' },
            { label: 'Gouda', value: 'gouda' },
            { label: 'Swiss', value: 'swiss' },
          ]}
        />
        <FieldSelect
          label="Label"
          placeholder="placeholder"
          options={[
            { label: 'Cheddar', value: 'cheddar' },
            { label: 'Gouda', value: 'gouda' },
            { label: 'Swiss', value: 'swiss' },
          ]}
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
        <FieldSelect
          inline
          label="Label"
          placeholder="placeholder"
          options={[
            { label: 'Cheddar', value: 'cheddar' },
            { label: 'Gouda', value: 'gouda' },
            { label: 'Swiss', value: 'swiss' },
          ]}
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
      </Grid>

      <Grid columns={3}>
        <div>
          <FieldCheckbox label="Checkbox" />
          <FieldCheckbox
            required
            label="Checkbox"
            validationMessage={{ message: 'validation Message', type: 'error' }}
          />
          <FieldCheckbox disabled label="Checkbox" />
          <FieldCheckbox required label="Checkbox" />
        </div>
        <div>
          <FieldRadio label="Radio" />
          <FieldRadio disabled label="Radio" />
        </div>
        <div>
          <FieldToggleSwitch label="Toggle Switch" />
          <FieldToggleSwitch
            required
            label="Toggle Switch"
            validationMessage={{ message: 'validation Message', type: 'error' }}
          />
          <FieldToggleSwitch disabled label="Toggle Switch" />
          <FieldToggleSwitch required label="Toggle Switch" />
        </div>
      </Grid>
    </SpaceVertical>
  )
}
