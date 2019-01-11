import * as React from 'react'
import { css, styled } from '../../style'
import { ThemedProps } from '../../types'
import { Box, BoxPropsWithout } from '../Box'

interface DividerProps extends BoxPropsWithout<HTMLDivElement, 'color'> {
  size?: string | number
  customColor?: string
  variant?: 'light' | 'dark' | 'onDark'
}

function dividerVariant(props: ThemedProps<DividerProps>) {
  switch (props.variant) {
    case 'light':
      return css`
        background: ${props.theme.colors.palette.charcoal200};
      `
    case 'dark':
      return css`
        background: ${props.theme.colors.palette.charcoal400};
      `
    case 'onDark':
      return css`
        background: ${props.theme.colors.palette.charcoal500};
      `
    default:
      return false
  }
}

const InternalDivider: React.SFC<DividerProps> = ({
  size,
  customColor,
  variant,
  ...props
}) => {
  return (
    <Box
      height={size || '1px'}
      bg={customColor || 'palette.charcoal300'}
      {...props}
    />
  )
}

export const Divider = styled<DividerProps>(InternalDivider)`
  ${dividerVariant};
`
