import { ResponsiveValue } from 'styled-system'
import {
  SizeLarge,
  SizeMedium,
  SizeSmall,
  SizeXLarge,
  SizeXSmall,
  SizeXXLarge,
  SizeXXSmall,
  SizeXXXLarge,
  SizeXXXXLarge,
} from '../space'

export type FontSizes =
  | SizeXXSmall
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge
  | SizeXLarge
  | SizeXXLarge
  | SizeXXXLarge
  | SizeXXXXLarge

export type FontSizeRamp = Record<FontSizes, string>

export interface FontSizeProps {
  /**
   * Use a @looker/components FontSizes to set font size
   */
  fontSize?: ResponsiveValue<FontSizes>
}
