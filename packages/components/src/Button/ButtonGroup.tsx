import uniqueId from 'lodash/uniqueId'
import xor from 'lodash/xor'
import React, { ChangeEvent, FC, forwardRef, Ref } from 'react'
import styled from 'styled-components'
import { useControlWarn } from '../utils'
import { ButtonItem, ButtonItemLabel } from './ButtonItem'
import { ButtonGroupOrToggleProps, ButtonSet } from './ButtonSet'

const ButtonGroupFactory = forwardRef(
  (
    { onChange, value, ...props }: ButtonGroupOrToggleProps<string[]>,
    ref: Ref<HTMLDivElement>
  ) => {
    const isControlled = useControlWarn({
      controllingProps: ['onChange', 'value'],
      isControlledCheck: () => onChange !== undefined,
      name: 'ButtonGroup',
    })

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
      const newValue = xor(value, [e.target.value])
      onChange && onChange(newValue)
    }

    return (
      <ButtonSet
        {...props}
        ref={ref}
        {...(isControlled
          ? {
              onChange: handleChange,
              value,
            }
          : { name: props.name || uniqueId() })}
      />
    )
  }
)

export const ButtonGroup = styled<FC<ButtonGroupOrToggleProps<string[]>>>(
  ButtonGroupFactory
)`
  ${ButtonItem} {
    height: 36px;
    border-radius: 4px;

    + ${ButtonItem} {
      margin-left: ${props => props.theme.space.xxsmall};
    }
  }

  ${ButtonItemLabel} {
    border-style: solid;
    border-width: 1px;
  }
`
