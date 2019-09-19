import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { CustomizableAttributes } from '@looker/design-tokens'
import { Box, BoxProps } from '../../../Box'
import { InputProps } from '../InputProps'

export interface InputTextProps extends BoxProps<HTMLInputElement>, InputProps {
  /**
   * Specifies value of the input field.
   */
  value?: string
  /**
   * Displays an example value or short hint to the user. Should not replace a label.
   */
  placeholder?: string
}

type ComponentType = FunctionComponent<InputTextProps>
type StyledComponentType = StyledComponent<ComponentType, InputTextProps>

const InternalInputText: ComponentType = ({
  validationType,
  hidden,
  ...props
}) => {
  if (hidden && console) {
    // tslint:disable-next-line:no-console
    console.warn(
      'InputText: Use of `hidden` attribute is discouraged. Please use <InputHidden /> instead to attach static values to your form submission'
    )
  }

  const handleValidationType = () => {
    switch (validationType) {
      case 'error':
        return 'palette.red000'
      default:
        return undefined
    }
  }
  return (
    <Box
      is="input"
      bg={handleValidationType()}
      border="solid 1px"
      borderColor="palette.charcoal300"
      borderRadius={CustomizableInputTextAttributes.borderRadius}
      fontSize={CustomizableInputTextAttributes.fontSize}
      height={CustomizableInputTextAttributes.height}
      px={props.p || CustomizableInputTextAttributes.px}
      py={props.p || CustomizableInputTextAttributes.py}
      type="text"
      {...props}
    />
  )
}

const InputTextFactory = React.forwardRef<StyledComponentType, InputTextProps>(
  (props: InputTextProps, ref: Ref<StyledComponentType>) => (
    <InternalInputText ref={ref} {...props} />
  )
)

/** @component */
export const InputText = styled<ComponentType>(InputTextFactory)``

export const CustomizableInputTextAttributes: CustomizableAttributes = {
  borderRadius: 'medium',
  fontSize: 'small',
  height: '28px',
  px: 'xsmall',
  py: 'none',
}
