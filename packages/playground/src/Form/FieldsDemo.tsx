import React, { FC } from 'react'
import {
  Flex,
  FieldText,
  FieldTextArea,
  FieldSelect,
  Box,
  FieldCheckbox,
  FieldRadio,
  FieldToggleSwitch,
} from '@looker/components'

export const FieldsDemo: FC = () => {
  return (
    <>
      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldText label="Text Input" placeholder="placeholder" />
        <FieldText inline label="Text Input" placeholder="placeholder" />
      </Flex>

      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldText disabled label="Text Input" placeholder="placeholder" />
        <FieldText
          disabled
          inline
          label="Text Input"
          placeholder="placeholder"
        />
      </Flex>

      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldText label="Text Input" placeholder="placeholder" required />
        <FieldText
          inline
          label="Text Input"
          placeholder="placeholder"
          required
        />
      </Flex>

      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
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
      </Flex>

      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldText label="Label" prefix="$" />
        <FieldText inline label="Label" prefix="$" />
      </Flex>
      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldText label="Label" iconBefore="GearOutline" />
        <FieldText inline label="Label" iconBefore="GearOutline" />
      </Flex>
      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldText label="Label" suffix="%" />
        <FieldText inline label="Label" suffix="%" />
      </Flex>
      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldText label="Label" iconAfter="Check" />
        <FieldText inline label="Label" iconAfter="Check" />
      </Flex>
      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldText label="Label" prefix="$" iconAfter="Check" />
        <FieldText inline label="Label" prefix="$" iconAfter="Check" />
      </Flex>
      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldText label="hello" detail="5/50" placeholder="placeholder" />
        <FieldText
          inline
          label="hello"
          detail="5/50"
          placeholder="placeholder"
        />
      </Flex>
      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
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
      </Flex>
      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldTextArea label="Text Area" placeholder="placeholder" />
        <FieldTextArea inline label="Text Area" placeholder="placeholder" />
      </Flex>
      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldTextArea label="Text Area" placeholder="placeholder" disabled />
        <FieldTextArea
          inline
          label="Text Area"
          placeholder="placeholder"
          disabled
        />
      </Flex>
      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldTextArea label="Text Area" placeholder="placeholder" required />
        <FieldTextArea
          inline
          label="Text Area"
          required
          placeholder="placeholder"
        />
      </Flex>
      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldTextArea
          label="Text Area"
          placeholder="placeholder"
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
        <FieldTextArea
          inline
          label="Text Area"
          required
          placeholder="placeholder"
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
      </Flex>
      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
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
      </Flex>
      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
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
      </Flex>

      <Flex>
        <Box p="xlarge">
          <FieldCheckbox label="Checkbox" />
          <FieldCheckbox
            required
            label="Checkbox"
            validationMessage={{ message: 'validation Message', type: 'error' }}
          />
          <FieldCheckbox disabled label="Checkbox" />
          <FieldCheckbox required label="Checkbox" />
        </Box>
        <Box p="xlarge">
          <FieldRadio label="Radio" />
          <FieldRadio disabled label="Radio" />
        </Box>
        <Box p="xlarge">
          <FieldToggleSwitch label="Toggle Switch" />
          <FieldToggleSwitch
            required
            label="Toggle Switch"
            validationMessage={{ message: 'validation Message', type: 'error' }}
          />
          <FieldToggleSwitch disabled label="Toggle Switch" />
          <FieldToggleSwitch required label="Toggle Switch" />
        </Box>
      </Flex>
    </>
  )
}
