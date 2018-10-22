import tag from 'clean-tag'
import * as React from 'react'
import {
  bgColor,
  BgColorProps,
  border,
  borderColor,
  BorderColorProps,
  BorderProps,
  borderRadius,
  BorderRadiusProps,
  bottom,
  BottomProps,
  display,
  DisplayProps,
  height,
  HeightProps,
  left,
  LeftProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
  minHeight,
  MinHeightProps,
  minWidth,
  MinWidthProps,
  position,
  PositionProps,
  ResponsiveValue,
  right,
  RightProps,
  space,
  SpaceProps,
  top,
  TopProps,
  width,
  WidthProps,
} from 'styled-system'
import { SpacingSizes, styled } from '../../style'

export type ResponsiveSpacingSize = ResponsiveValue<SpacingSizes> | 'auto'

export type LensSpaceProps = { [P in keyof SpaceProps]: ResponsiveSpacingSize }

export interface BoxProps
  extends LensSpaceProps,
    BgColorProps,
    BorderProps,
    BorderColorProps,
    BorderRadiusProps,
    BottomProps,
    DisplayProps,
    HeightProps,
    LeftProps,
    MaxHeightProps,
    MaxWidthProps,
    MinHeightProps,
    MinWidthProps,
    PositionProps,
    RightProps,
    TopProps,
    WidthProps {
  is?: string | React.ReactNode
  className?: string
  overflow?: string
}

const InternalBox: React.SFC<BoxProps> = ({ ...props }) => {
  return <tag.div {...props}>{props.children}</tag.div>
}

export const Box = styled<BoxProps>(InternalBox)`
  ${bgColor};
  ${border};
  ${borderColor};
  ${borderRadius};
  ${bottom};
  ${display};
  ${height};
  ${left};
  ${maxHeight};
  ${maxWidth};
  ${minHeight};
  ${minWidth};
  ${position};
  ${right};
  ${space};
  ${top};
  ${width};
  ${props => (props.overflow ? `overflow: ${props.overflow}` : ``)};
`
