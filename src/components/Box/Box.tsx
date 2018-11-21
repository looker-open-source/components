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
  borderBottom,
  BorderBottomProps,
  borderColor,
  BorderColorProps,
  borderLeft,
  BorderLeftProps,
  BorderProps,
  borderRadius,
  BorderRadiusProps,
  borderRight,
  BorderRightProps,
  borderTop,
  BorderTopProps,
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
import { css, LensSpaceProps, reset, styled } from '../../style'
import { Omit } from '../../types'
import { cursor, CursorProps } from './style_utilities'

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
    BorderRightProps,
    BorderLeftProps,
    BorderBottomProps,
    BorderTopProps,
    BottomProps,
    BoxShadowProps,
    ColorProps,
    CursorProps,
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

const cursorPointerOnClick = (props: BoxProps<HTMLElement>) =>
  props.onClick &&
  !props.disabled &&
  css`
    cursor: pointer;
  `

export const Box = styled<BoxProps<HTMLElement>>(Tag)`
  /**
   * Global reset applied to prevent styling on top level tags outside of Lens
   * from interfering with Lens styles.
   *
   * This **must** be first.
   */
  ${reset};

  /**
   * Rules here should provide convenience styling for Box derived components.
   * Generally anything here could be overwritten by explicit values set via
   * Box's prop values. For example a function here that sets 'cursor: pointer'
   * would be overwritten by an explicit <Box cursor='copy'/>.
   */
  ${cursorPointerOnClick};

  /**
   * Style Utilities that extend Box's props. Most of these come from
   * styled-system but some are Lens specific.
   *
   * These should be last to override rules with lower priority.
   */
  ${alignContent};
  ${alignItems};
  ${alignSelf};
  ${border};
  ${borderColor};
  ${borderRadius};
  ${borderRight};
  ${borderLeft};
  ${borderBottom};
  ${borderTop};
  ${bottom};
  ${boxShadow};
  ${color};
  ${cursor};
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
