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
  flex,
  flexBasis,
  FlexBasisProps,
  flexDirection,
  FlexDirectionProps,
  FlexProps,
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
  order,
  OrderProps,
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
import { reset, SpacingSizes, styled } from '../../style'

export type ResponsiveSpacingSize = ResponsiveValue<SpacingSizes> | 'auto'

export type LensSpaceProps = { [P in keyof SpaceProps]: ResponsiveSpacingSize }

export interface BoxFlexProps
  extends AlignContentProps,
    AlignItemsProps,
    FlexDirectionProps,
    FlexWrapProps,
    JustifyContentProps {}

export interface BoxFlexItemProps
  extends AlignSelfProps,
    FlexBasisProps,
    FlexProps,
    OrderProps {}

export interface BoxBaseProps
  extends LensSpaceProps,
    BgColorProps,
    BorderProps,
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
}

export interface BoxProps
  extends BoxBaseProps,
    BoxFlexProps,
    BoxFlexItemProps {}

const InternalBox: React.SFC<BoxProps> = ({ ...props }) => {
  return <tag.div {...props}>{props.children}</tag.div>
}

export const Box = styled<BoxProps>(InternalBox)`
  ${reset};

  ${alignContent};
  ${alignItems};
  ${alignSelf};
  ${bgColor};
  ${border};
  ${borderRadius};
  ${bottom};
  ${display};
  ${flex};
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
  ${order};
  ${position};
  ${right};
  ${space};
  ${top};
  ${width};
`
