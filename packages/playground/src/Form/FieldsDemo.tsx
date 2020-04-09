import React, { FC } from 'react'
import {
  FieldText,
  FieldTextArea,
  FieldSelect,
  FieldCheckbox,
  FieldRadio,
  FieldToggleSwitch,
} from '@looker/components'
import styled from 'styled-components'

export const FieldsDemo: FC = () => {
  return (
    <>
      <Grid>
        <FieldText width="100%" label="Text Input" placeholder="placeholder" />
        <FieldText
          width="100%"
          inline
          label="Text Input"
          placeholder="placeholder"
        />

        <FieldText disabled label="Text Input" placeholder="placeholder" />
        <FieldText
          disabled
          inline
          label="Text Input"
          placeholder="placeholder"
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
    </>
  )
}

const Grid = styled.div<{ columns?: number }>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns || 2}, 1fr);
  grid-gap: ${(props) => props.theme.space.xxxlarge};
  margin: ${(props) => props.theme.space.xxxlarge};
`
