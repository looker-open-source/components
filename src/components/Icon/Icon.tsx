import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import * as Glyphs from '../../icons/build/glyphs'
import { IconNames } from '../../icons/build/IconNames'
import { Box, BoxPropsWithout } from '../Box'

export interface IconProps
  extends BoxPropsWithout<HTMLDivElement, ['size', 'onClick']> {
  name: IconNames
  size?: number | string
}

type ComponentType = FunctionComponent<IconProps>
type StyledComponentType = StyledComponent<ComponentType, IconProps>

export { IconNames }

const IconFactory = React.forwardRef<StyledComponentType, IconProps>(
  (props: IconProps, ref: Ref<StyledComponentType>) => {
    const { name, size = '1em', ...boxProps } = props
    const Glyph = Glyphs[name]

    return (
      <Box
        ref={ref}
        width={size}
        height={size}
        alignItems="center"
        display="inline-flex"
        {...boxProps}
      >
        <Glyph width="100%" height="100%" fill="currentColor" />
      </Box>
    )
  }
)

/** @component */
export const Icon = styled<ComponentType>(IconFactory)``
