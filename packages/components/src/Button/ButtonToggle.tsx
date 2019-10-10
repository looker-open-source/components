import uniqueId from 'lodash/uniqueId'
import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import { useControlWarn } from '../utils'
import { ButtonItemLabel } from './ButtonItem'
import { ButtonGroupOrToggleProps, ButtonSet, ButtonSetType } from './ButtonSet'

const ButtonToggleComponent = (ButtonSet as unknown) as ButtonSetType<string>

const ButtonToggleFactory = forwardRef(
  (
    {
      onChange,
      value: controlledValue,
      ...props
    }: ButtonGroupOrToggleProps<string>,
    ref: Ref<HTMLDivElement>
  ) => {
    const isControlled = useControlWarn({
      controllingProps: ['onChange', 'value'],
      isControlledCheck: () => onChange !== undefined,
      name: 'ButtonToggle',
    })

    const [value, setValue] = React.useState<string>()

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      if (onChange) {
        onChange(e.target.value)
      } else {
        setValue(e.target.value)
      }
    }
    return (
      <ButtonToggleComponent
        {...props}
        borderRadius="4px"
        onChange={handleChange}
        isToggle
        ref={ref}
        {...(isControlled
          ? {
              name: props.name || uniqueId(),
              value: controlledValue,
            }
          : { value })}
      />
    )
  }
)

export const ButtonToggle = styled<React.FC<ButtonGroupOrToggleProps<string>>>(
  ButtonToggleFactory
)`
  border: solid 1px ${props => props.theme.colors.palette.charcoal200};

  ${ButtonItemLabel} {
    position: relative;
    height: 36px;
    border-radius: 0;

    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    /* stylelint-disable */
    & + ${ButtonItemLabel} {
      &::after {
        content: '';
        display: block;
        height: 20px;
        width: 1px;
        background: ${props => props.theme.colors.palette.charcoal200};
        position: absolute;
        left: 0;
        top: 8px;
      }
    }
    /* stylelint-enable */
  }
`
