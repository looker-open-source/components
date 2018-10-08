import tag from 'clean-tag'
import * as React from 'react'
import {
  alignContent,
  AlignContentProps,
  alignItems,
  AlignItemsProps,
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
  flexDirection,
  FlexDirectionProps,
  flexWrap,
  FlexWrapProps,
  height,
  HeightProps,
  justifyContent,
  JustifyContentProps,
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
    AlignContentProps,
    AlignContentProps,
    AlignItemsProps,
    AlignSelfProps,
    BgColorProps,
    BorderProps,
    BorderRadiusProps,
    BottomProps,
    DisplayProps,
    FlexBasisProps,
    FlexDirectionProps,
    FlexWrapProps,
    HeightProps,
    JustifyContentProps,
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
  ${alignContent};
  ${alignItems};
  ${alignSelf};
  ${bgColor};
  ${border};
  ${borderRadius};
  ${bottom};
  ${display};
  ${flexBasis};
  ${flexDirection};
  ${flexWrap};
  ${height};
  ${justifyContent};
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
`
