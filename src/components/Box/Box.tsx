import tag from 'clean-tag'
import * as React from 'react'
import { ResponsiveValue, space } from 'styled-system'
import styled, { ThemedStyledProps } from '../../styled_components'
import { ThemeInterface } from '../../themes'
import {
  SizeLarge,
  SizeMedium,
  SizeSmall,
  SizeXLarge,
  SizeXSmall,
  SizeXXLarge,
  SizeXXXLarge,
  SizeXXXXLarge,
} from '../../types'

export type SpacingSizes =
  | SizeLarge
  | SizeMedium
  | SizeSmall
  | SizeXLarge
  | SizeXSmall
  | SizeXXLarge
  | SizeXXXLarge
  | SizeXXXXLarge

export type ResponsiveSpacingSize = ResponsiveValue<SpacingSizes>

export interface BoxProps {
  /**
   * Margin - all sides
   */
  m?: ResponsiveSpacingSize
  /**
   * Margin Top
   */
  mt?: ResponsiveSpacingSize
  /**
   * Margin Right
   */
  mr?: ResponsiveSpacingSize
  /**
   * Margin Bottom
   */
  mb?: ResponsiveSpacingSize
  /**
   * Margin Left
   */
  ml?: ResponsiveSpacingSize
  /**
   * Margin Left & Right
   */
  mx?: ResponsiveSpacingSize
  /**
   * Margin Top & Bottom
   */
  my?: ResponsiveSpacingSize
  /**
   * Padding - all sides
   */
  p?: ResponsiveSpacingSize
  /**
   * Padding Top
   */
  pt?: ResponsiveSpacingSize
  /**
   * Padding Right
   */
  pr?: ResponsiveSpacingSize
  /**
   * Padding Bottom
   */
  pb?: ResponsiveSpacingSize
  /**
   * Padding Left
   */
  pl?: ResponsiveSpacingSize
  /**
   * Padding Left & Right
   */
  px?: ResponsiveSpacingSize
  /**
   * Padding Top & Bottom
   */
  py?: ResponsiveSpacingSize
}

const InternalBox: React.SFC<BoxProps> = ({ ...props }) => {
  return <tag.div {...props}>{props.children}</tag.div>
}

export const Box = styled<BoxProps>(InternalBox)`
  ${space};
`
