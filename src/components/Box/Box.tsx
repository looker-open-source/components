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
  order,
  OrderProps,
  position,
  PositionProps,
  ResponsiveValue,
  right,
  RightProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  top,
  TopProps,
  width,
  WidthProps,
} from 'styled-system'
import { reset, SpacingSizes, styled } from '../../style'
import { Omit } from '../../types'

const Tag = tag

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
    ColorProps,
    DisplayProps,
    FontFamilyProps,
    FontSizeProps,
    FontWeightProps,
    HeightProps,
    LeftProps,
    LetterSpacingProps,
    LineHeightProps,
    MaxHeightProps,
    MaxWidthProps,
    MinHeightProps,
    MinWidthProps,
    PositionProps,
    RightProps,
    TextAlignProps,
    TopProps,
    WidthProps {
  className?: string
  is?: string | React.ReactNode
  ref?: React.Ref<any>
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
  ${color};
  ${display};
  ${flex};
  ${flexBasis};
  ${flexDirection};
  ${flexWrap};
  ${fontFamily};
  ${fontSize};
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
  ${order};
  ${position};
  ${right};
  ${space};
  ${textAlign};
  ${top};
  ${width};
`
