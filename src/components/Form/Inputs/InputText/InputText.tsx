import * as React from 'react'
import { styled } from '../../../../style'
import { CustomizableAttributes } from '../../../../types/attributes'
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

const InternalInputText: React.FC<InputTextProps> = ({
  validationType,
  ...props
}) => {
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
      px={CustomizableInputTextAttributes.px}
      py={CustomizableInputTextAttributes.py}
      type="text"
      {...props}
    />
  )
}

const InputTextFactory = React.forwardRef((props: InputTextProps, ref) => (
  <InternalInputText
    innerRef={ref as React.RefObject<HTMLElement>}
    {...props}
  />
))

export const InputText = styled<InputTextProps>(InputTextFactory)``

export const CustomizableInputTextAttributes: CustomizableAttributes = {
  borderRadius: 'medium',
  fontSize: 'small',
  height: '28px',
  px: 'xsmall',
  py: 'none',
}
