import tag from 'clean-tag'
import * as React from 'react'
import { ResponsiveValue, space, SpaceProps } from 'styled-system'
import styled from '../../style/styled_components'
import { SpacingSizes } from '../../theme'

export type ResponsiveSpacingSize = ResponsiveValue<SpacingSizes>

export type LensSpaceProps = { [P in keyof SpaceProps]: ResponsiveSpacingSize }

export interface BoxProps extends LensSpaceProps {
  is?: string | React.ReactNode
  className?: string
}

const InternalBox: React.SFC<BoxProps> = ({ ...props }) => {
  return <tag.div {...props}>{props.children}</tag.div>
}

export const Box = styled<BoxProps>(InternalBox)`
  ${space};
`
