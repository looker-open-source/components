import React from 'react'
import { FieldSelect, FieldToggleSwitch } from '@looker/components'

const options = [
  { value: 'cheddar', label: 'Cheddar' },
  { value: 'gouda', label: 'Gouda' },
  { value: 'swiss', label: 'Swiss' },
]

export const FieldSelectOption = () => (
  <div>
    <FieldSelect
      name="Cheeses"
      label="Cheeses"
      value="cheddar"
      options={options}
    />
    <FieldSelect
      name="LeftCheese"
      label="Cheese to the Left"
      alignLabel="left"
      value="gouda"
      options={options}
    />
    <FieldSelect
      name="RequiredCheeses"
      label="Required Cheese"
      value="swiss"
      required
      options={options}
    />
  </div>
)

export const FieldSelectOptionValidation = () => (
  <FieldSelect
    name="someField"
    label="Some Field"
    options={options}
    validationMessage={{ type: 'error', message: 'This is an error' }}
    alignValidationMessage="right"
  />
)

export interface ToggleSwitchParentProps {
  value: boolean
}

export const ToggleSwitchParent: React.FC<ToggleSwitchParentProps> = ({
  value = false,
}) => {
  const [on, setOn] = React.useState(value)
  const onChange = (e: any) => {
    setOn(e.target.checked)
  }

  return (
    <FieldToggleSwitch
      label="Development Mode"
      alignLabel="left"
      onChange={onChange}
      on={on}
    />
  )
}
