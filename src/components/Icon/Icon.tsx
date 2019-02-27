import * as React from 'react'
import * as Glyphs from '../../icons/build/glyphs'
import { IconNames } from '../../icons/build/IconNames'
import { styled } from '../../style'
import { Box, BoxPropsWithout } from '../Box'

export interface IconProps extends BoxPropsWithout<HTMLDivElement, 'size'> {
  name: IconNames
  size?: number | string
}

export { IconNames }

const InternalIcon: React.SFC<IconProps> = ({
  name,
  size = '1em',
  ref,
  ...props
}) => {
  const Glyph = Glyphs[name]
  return (
    <Box
      ref={ref}
      width={size}
      height={size}
      alignItems="center"
      display="inline-flex"
      {...props}
    >
      <Glyph width="100%" height="100%" fill="currentColor" />
    </Box>
  )
}

export const Icon = styled<IconProps>(InternalIcon)``
