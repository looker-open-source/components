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
    BgColorProps,
    DisplayProps,
    MaxHeightProps,
    MaxWidthProps,
    MinHeightProps,
    MinWidthProps,
    TopProps,
    BottomProps,
    RightProps,
    LeftProps,
    HeightProps,
    WidthProps,
    PositionProps,
    AlignContentProps,
    AlignItemsProps,
    FlexBasisProps,
    FlexDirectionProps,
    FlexWrapProps,
    JustifyContentProps,
    AlignContentProps,
    AlignSelfProps {
  is?: string | React.ReactNode
  className?: string
}

const InternalBox: React.SFC<BoxProps> = ({ ...props }) => {
  return <tag.div {...props}>{props.children}</tag.div>
}

export const Box = styled<BoxProps>(InternalBox)`
  ${space};
  ${bgColor};
  ${display};
  ${height};
  ${maxHeight};
  ${minHeight};
  ${width};
  ${maxWidth};
  ${minWidth};
  ${position};
  ${top};
  ${left};
  ${right};
  ${bottom};
  ${alignContent};
  ${alignItems};
  ${alignSelf};
  ${flexBasis};
  ${flexDirection};
  ${flexWrap};
  ${justifyContent};
`
