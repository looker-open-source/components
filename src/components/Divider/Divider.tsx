import * as React from 'react'
import { css, styled } from '../../style'
import { ThemedProps } from '../../types'
import { Box, BoxPropsWithout } from '../Box'

interface DividerProps
  extends BoxPropsWithout<HTMLDivElement, 'color' | 'size'> {
  size?: string | number
  customColor?: string
  appearance?: 'light' | 'dark' | 'onDark'
}

function dividerAppearance(props: ThemedProps<DividerProps>) {
  switch (props.appearance) {
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

const InternalDivider: React.FC<DividerProps> = ({
  size,
  customColor,
  appearance,
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

const DividerFactory = React.forwardRef((props: DividerProps, ref) => (
  <InternalDivider innerRef={ref as React.RefObject<HTMLElement>} {...props} />
))

export const Divider = styled<DividerProps>(DividerFactory)`
  ${dividerAppearance};
`
