import tag from 'clean-tag'
import * as React from 'react'
import {
  alignContent,
  AlignContentProps,
  alignItems,
  AlignItemsProps,
  alignSelf,
  AlignSelfProps,
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
  flex,
  flexBasis,
  FlexBasisProps,
  flexDirection,
  FlexDirectionProps,
  FlexProps,
  flexWrap,
  FlexWrapProps,
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  fontStyle,
  FontStyleProps,
  fontWeight,
  FontWeightProps,
  height,
  HeightProps,
  justifyContent,
  JustifyContentProps,
  left,
  LeftProps,
  letterSpacing,
  LetterSpacingProps,
  lineHeight,
  LineHeightProps,
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
  order,
  OrderProps,
  overflow,
  OverflowProps,
  position,
  PositionProps,
  right,
  RightProps,
  space,
  textAlign,
  TextAlignProps,
  top,
  TopProps,
  width,
  WidthProps,
  zIndex,
  ZIndexProps,
} from 'styled-system'
import { LensSpaceProps, reset, styled } from '../../style'
import { Omit } from '../../types'

const Tag = tag

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

export type StyledSystemCompatibleHTMLProps<T> = Omit<
  React.HTMLProps<T>,
  'width' | 'color' | 'height' | 'is' | 'size'
>

export interface BoxBaseProps<T>
  extends StyledSystemCompatibleHTMLProps<T>,
    LensSpaceProps,
    BorderColorProps,
    BorderProps,
    BorderRadiusProps,
    BottomProps,
    BoxShadowProps,
    ColorProps,
    DisplayProps,
    FontFamilyProps,
    FontSizeProps,
    FontStyleProps,
    FontWeightProps,
    HeightProps,
    LeftProps,
    LetterSpacingProps,
    LineHeightProps,
    MaxHeightProps,
    MaxWidthProps,
    MinHeightProps,
    MinWidthProps,
    OpacityProps,
    OverflowProps,
    PositionProps,
    RightProps,
    TextAlignProps,
    TopProps,
    WidthProps,
    ZIndexProps {
  className?: string
  is?: string | React.ReactNode
  ref?: React.Ref<any>
  style?: React.CSSProperties
}

export interface BoxProps<T>
  extends BoxBaseProps<T>,
    BoxFlexProps,
    BoxFlexItemProps {}

export type BoxBasePropsWithout<T, Keys> = Omit<BoxBaseProps<T>, Keys>
export type BoxPropsWithout<T, Keys> = Omit<BoxProps<T>, Keys>

export const Box = styled<BoxProps<HTMLElement>>(Tag)`
  ${reset};

  ${alignContent};
  ${alignItems};
  ${alignSelf};
  ${border};
  ${borderColor};
  ${borderRadius};
  ${bottom};
  ${boxShadow};
  ${color};
  ${display};
  ${flex};
  ${flexBasis};
  ${flexDirection};
  ${flexWrap};
  ${fontFamily};
  ${fontSize};
  ${fontStyle};
  ${fontWeight};
  ${height};
  ${justifyContent};
  ${left};
  ${letterSpacing};
  ${lineHeight};
  ${maxHeight};
  ${maxWidth};
  ${minHeight};
  ${minWidth};
  ${opacity};
  ${order};
  ${overflow};
  ${position};
  ${right};
  ${space};
  ${textAlign};
  ${top};
  ${width};
  ${zIndex};
`
