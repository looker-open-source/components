import tag from 'clean-tag'
import * as React from 'react'
import {
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
  color,
  ColorProps,
  display,
  DisplayProps,
  fontStyle,
  FontStyleProps,
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

export interface BoxStyledSystemProps
  extends BorderColorProps,
    BorderProps,
    BorderRadiusProps,
    BottomProps,
    BoxShadowProps,
    ColorProps,
    DisplayProps,
    FontStyleProps,
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
    ZIndexProps {}

export interface BoxProps
  extends React.DOMAttributes<Element>,
    LensSpaceProps,
    BoxStyledSystemProps {
  is?: string | React.ReactNode
  className?: string
  overflow?: string
  style?: React.CSSProperties
}

export const Box = styled<BoxProps>(tag)`
  ${reset};
  ${border};
  ${borderColor};
  ${borderRadius};
  ${bottom};
  ${boxShadow};
  ${color};
  ${display};
  ${height};
  ${fontStyle};
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
