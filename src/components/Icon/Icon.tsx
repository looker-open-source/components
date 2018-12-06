import * as React from 'react'
import * as Glyphs from '../../icons/build/glyphs'
import { IconNames } from '../../icons/build/IconNames'
import { styled } from '../../style'
import { Box } from '../Box'

export interface IconProps {
  name: IconNames
  size?: number | string
  color?: string
}

const InternalIcon: React.SFC<IconProps> = ({
  name,
  color,
  size = '1em',
  ...props
}) => {
  const Glyph = Glyphs[name]
  return (
    <Box
      color={color}
      width={size}
      height={size}
      alignItems="center"
      display="inline-flex"
      {...props}
    >
      <Glyph width="100%" height="100%" />
    </Box>
  )
}

export const Icon = styled<IconProps>(InternalIcon)`
  svg {
    fill: currentColor;
  }
`
