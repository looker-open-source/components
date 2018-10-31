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
  borderColor,
  BorderColorProps,
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
    BorderColorProps,
    BorderProps,
    BorderRadiusProps,
    BottomProps,
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
  is?: string | React.ReactNode
  className?: string
}

export interface BoxProps
  extends BoxBaseProps,
    BoxFlexProps,
    BoxFlexItemProps {}

export const Box = styled<BoxProps>(tag)`
  ${reset};

  ${alignContent};
  ${alignItems};
  ${alignSelf};
  ${bgColor};
  ${border};
  ${borderColor};
  ${borderRadius};
  ${bottom};
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
