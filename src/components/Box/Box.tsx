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
  zIndex,
  ZIndexProps,
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
  extends React.DOMAttributes<Element>,
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
  is?: string | React.ReactNode
  className?: string
  ref?: React.Ref<any>
  style?: React.CSSProperties
}

export interface BoxProps
  extends BoxBaseProps,
    BoxFlexProps,
    BoxFlexItemProps {}

export type BoxBasePropsWithout<Keys> = Pick<
  BoxBaseProps,
  Exclude<keyof BoxBaseProps, Keys>
>

export type BoxPropsWithout<Keys> = Pick<
  BoxProps,
  Exclude<keyof BoxProps, Keys>
>

export const Box = styled<BoxProps>(tag)`
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
