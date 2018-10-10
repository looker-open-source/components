import tag from 'clean-tag'
import * as React from 'react'
import {
  alignSelf,
  AlignSelfProps,
  bgColor,
  BgColorProps,
  border,
  BorderProps,
  borderRadius,
  BorderRadiusProps,
  bottom,
  BottomProps,
  display,
  DisplayProps,
  flexBasis,
  FlexBasisProps,
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
    AlignSelfProps,
    BgColorProps,
    BorderProps,
    BorderRadiusProps,
    BottomProps,
    DisplayProps,
    FlexBasisProps,
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
}

const InternalBox: React.SFC<BoxProps> = ({ ...props }) => {
  return <tag.div {...props}>{props.children}</tag.div>
}

export const Box = styled<BoxProps>(InternalBox)`
  ${alignSelf};
  ${bgColor};
  ${border};
  ${borderRadius};
  ${bottom};
  ${display};
  ${flexBasis};
  ${height};
  ${left};
  ${maxHeight};
  ${maxWidth};
  ${minHeight};
  ${minWidth};
  ${position};
  ${right};
  ${bottom};
  ${alignSelf};
  ${flexBasis};
  ${space};
  ${top};
  ${width};
`
