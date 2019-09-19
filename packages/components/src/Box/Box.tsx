import {
  LensFontSizeProps,
  LensFontWeightProps,
  LensLineHeightProps,
  LensSpaceProps,
  reset,
} from '@looker/design-tokens'
import Tag from 'clean-tag'
import { UserSelectProperty } from 'csstype'
import omit from 'lodash/omit'
import React, { FunctionComponent, Ref } from 'react'
import styled, {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
  StyledComponent,
} from 'styled-components'
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
  fontSize as fontSizeStyledSystem,
  fontStyle,
  FontStyleProps,
  fontWeight as fontWeightStyledSystem,
  height,
  HeightProps,
  justifyContent,
  JustifyContentProps,
  left,
  LeftProps,
  letterSpacing,
  LetterSpacingProps,
  lineHeight as lineHeightStyledSystem,
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
  verticalAlign,
  VerticalAlignProps,
  width,
  WidthProps,
  zIndex,
  ZIndexProps,
} from 'styled-system'
import { cursor, CursorProps } from './style_utilities'

// Omit<T, K> is built in to TypeScript 3.5, delete next line when we upgrade
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export interface BoxFlexProps
  extends AlignContentProps,
    AlignItemsProps,
    FlexProps,
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
  | 'width'
  | 'color'
  | 'height'
  | 'is'
  | 'fontSize'
  | 'fontWeight'
  | 'size'
  | 'as'
>

export interface BoxBaseProps<T>
  extends StyledSystemCompatibleHTMLProps<T>,
    LensSpaceProps,
    LensFontSizeProps,
    LensFontWeightProps,
    LensLineHeightProps,
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
    FontStyleProps,
    HeightProps,
    LeftProps,
    LetterSpacingProps,
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
    VerticalAlignProps,
    WidthProps,
    ZIndexProps {
  className?: string
  animation?: FlattenSimpleInterpolation
  is?: string | JSX.Element
  ref?: React.Ref<any>
  style?: React.CSSProperties

  /**
   * Styling for :hover pseudo class.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)
   * @example <Box hoverStyle={{border: '1px solid black'}}/>
   */
  hoverStyle?: CSSObject
  /**
   * Styling for :focus pseudo class.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)
   * @example <Box focusStyle={{border: '1px solid black'}}/>
   */
  focusStyle?: CSSObject
  /**
   * Styling for :active pseudo class.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)
   * @example <Box activeStyle={{border: '1px solid black'}}/>
   */
  activeStyle?: CSSObject
  /**
   * Property to set user-select CSS property
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select)
   * @example <Box userSelect="none"/>
   */
  userSelect?: UserSelectProperty
  innerRef?: any
}

export interface BoxProps<T>
  extends BoxBaseProps<T>,
    BoxFlexProps,
    BoxFlexItemProps {}

export type BoxBasePropsWithout<T, Keys> = Omit<BoxBaseProps<T>, Keys>
export type BoxPropsWithout<T, Keys> = Omit<BoxProps<T>, Keys>

type ComponentType = FunctionComponent<BoxProps<HTMLElement>>
type StyledComponentType = StyledComponent<ComponentType, BoxProps<HTMLElement>>

const pseudoClassHover = (props: BoxProps<HTMLElement>) => {
  return (
    props.hoverStyle &&
    css`
      :hover {
        ${props.hoverStyle};
      }
    `
  )
}

const pseudoClassFocus = (props: BoxProps<HTMLElement>) => {
  return (
    props.focusStyle &&
    css`
      :focus {
        ${props.focusStyle};
      }
    `
  )
}

const pseudoClassActive = (props: BoxProps<HTMLElement>) => {
  return (
    props.activeStyle &&
    css`
      :active {
        ${props.activeStyle};
      }
    `
  )
}

const userSelectCSS = (props: BoxProps<HTMLElement>) => {
  return (
    props.userSelect &&
    css`
      user-select: ${props.userSelect};
    `
  )
}

const cursorPointerOnClick = (props: BoxProps<HTMLElement>) =>
  props.onClick &&
  !props.disabled &&
  css`
    cursor: pointer;
  `

//
// Get theme from ThemeProvider
//

const BoxFactory = React.forwardRef<StyledComponentType, BoxProps<HTMLElement>>(
  (props: BoxProps<HTMLElement>, ref: Ref<StyledComponentType>) => {
    const {
      activeStyle,
      focusStyle,
      hoverStyle,
      userSelect,
      lineHeight,
      fontWeight,
      fontSize,
      innerRef,
      ...otherProps
    } = props
    return (
      <Tag
        lineHeight={lineHeight}
        fontSize={fontSize}
        fontWeight={fontWeight}
        ref={ref || innerRef}
        {...omit(otherProps, ['animation'])}
      />
    )
  }
)

/** @component */
export const Box = styled<ComponentType>(BoxFactory)`
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
   * Pseudo classes can be styled by passing a CSS.Properties type to the
   * corresponding pseudo class helper prop. For example: <Box
   * hoverStyle={{border: '1px solid black'}}/>
   */
  ${pseudoClassHover}
  ${pseudoClassFocus}
  ${pseudoClassActive}

  /**
   * Style Utilities that extend Box's props. Most of these come from
   * styled-system but some are Lens specific.
   *
   * These should be last to override rules with lower priority.
   */
  ${alignContent};
  ${alignItems};
  ${alignSelf};
  animation: ${(props: BoxProps<HTMLElement>) => props.animation || 'none'};
  ${border};
  ${borderRadius};
  ${borderRight};
  ${borderLeft};
  ${borderBottom};
  ${borderTop};
  ${borderColor};
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
  ${fontSizeStyledSystem};
  ${fontStyle};
  ${fontWeightStyledSystem};
  ${height};
  ${justifyContent};
  ${left};
  ${letterSpacing};
  ${lineHeightStyledSystem};
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
  ${userSelectCSS};
  ${verticalAlign};
  ${width};
  ${zIndex};
`
