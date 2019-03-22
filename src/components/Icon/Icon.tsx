import * as React from 'react'
import * as Glyphs from '../../icons/build/glyphs'
import { IconNames } from '../../icons/build/IconNames'
import { Box, BoxPropsWithout } from '../Box'

export interface IconProps
  extends BoxPropsWithout<HTMLDivElement, ['size', 'onClick']> {
  name: IconNames
  size?: number | string
}

export { IconNames }

export const Icon: React.SFC<IconProps> = ({
  name,
  size = '1em',
  ...props
}) => {
  const Glyph = Glyphs[name]
  return (
    <Box
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
