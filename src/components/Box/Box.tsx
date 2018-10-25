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
  boxShadow,
  BoxShadowProps,
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
  opacity,
  OpacityProps,
  overflow,
  OverflowProps,
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
  zIndex,
  ZIndexProps,
} from 'styled-system'
import { reset, SpacingSizes, styled } from '../../style'

export type ResponsiveSpacingSize = ResponsiveValue<SpacingSizes> | 'auto'

export type LensSpaceProps = { [P in keyof SpaceProps]: ResponsiveSpacingSize }

export interface BoxProps
  extends LensSpaceProps,
    BgColorProps,
    BorderColorProps,
    BorderProps,
    BorderRadiusProps,
    BottomProps,
    BoxShadowProps,
    DisplayProps,
    HeightProps,
    LeftProps,
    MaxHeightProps,
    MaxWidthProps,
    MinHeightProps,
    MinWidthProps,
    OpacityProps,
    OverflowProps,
    PositionProps,
    RightProps,
    TopProps,
    WidthProps,
    ZIndexProps {
  is?: string | React.ReactNode
  className?: string
  overflow?: string
  style?: React.CSSProperties
}

export const Box = styled<BoxProps>(tag)`
  ${reset};
  ${bgColor};
  ${border};
  ${borderColor};
  ${borderRadius};
  ${bottom};
  ${boxShadow};
  ${display};
  ${height};
  ${left};
  ${maxHeight};
  ${maxWidth};
  ${minHeight};
  ${minWidth};
  ${opacity};
  ${overflow};
  ${position};
  ${right};
  ${space};
  ${top};
  ${width};
  ${zIndex};
`
