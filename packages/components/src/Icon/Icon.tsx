import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Glyphs, IconNames } from '@looker/icons'
import { Box, BoxProps } from '../Layout/Box'

export interface IconProps
  extends Omit<BoxProps<HTMLDivElement>, 'size' | 'onClick' | 'as'> {
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
