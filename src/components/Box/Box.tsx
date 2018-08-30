import * as React from 'react'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
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

export interface BoxProps {
  /**
   * Margin - all sides
   */
  m?: SpaceProps
  /**
   * Margin Top
   */
  mt?: SpaceProps
  /**
   * Margin Right
   */
  mr?: SpaceProps
  /**
   * Margin Bottom
   */
  mb?: SpaceProps
  /**
   * Margin Left
   */
  ml?: SpaceProps
  /**
   * Margin Left & Right
   */
  mx?: SpaceProps
  /**
   * Margin Top & Bottom
   */
  my?: SpaceProps
  /**
   * Padding - all sides
   */
  p?: SpaceProps
  /**
   * Padding Top
   */
  pt?: SpaceProps
  /**
   * Padding Right
   */
  pr?: SpaceProps
  /**
   * Padding Bottom
   */
  pb?: SpaceProps
  /**
   * Padding Left
   */
  pl?: SpaceProps
  /**
   * Padding Left & Right
   */
  px?: SpaceProps
  /**
   * Padding Top & Bottom
   */
  py?: SpaceProps
}

export const Box = styled<BoxProps, 'div'>('div')`
  ${space};
`
