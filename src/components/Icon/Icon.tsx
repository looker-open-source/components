import * as React from 'react'
import * as Glyphs from '../../icons/build/glyphs'
import { IconNames } from '../../icons/build/IconNames'
import { styled } from '../../style'
import { Box, BoxPropsWithout } from '../Box'

export interface IconProps
  extends BoxPropsWithout<HTMLDivElement, ['size', 'onClick']> {
  name: IconNames
  size?: number | string
}

export { IconNames }

const IconFactory = React.forwardRef((props: IconProps, ref) => {
  const { name, size = '1em', ...boxProps } = props
  const Glyph = Glyphs[name]

  return (
    <Box
      innerRef={ref}
      width={size}
      height={size}
      alignItems="center"
      display="inline-flex"
      {...boxProps}
    >
      <Glyph width="100%" height="100%" fill="currentColor" />
    </Box>
  )
})

export const Icon = styled(IconFactory)``
