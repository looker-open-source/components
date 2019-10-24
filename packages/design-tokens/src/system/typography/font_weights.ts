import { ResponsiveValue } from 'styled-system'

export type Bold = 'bold'
export type ExtraBold = 'extraBold'
export type Light = 'light'
export type Normal = 'normal'
export type SemiBold = 'semiBold'

export type FontWeights = Bold | ExtraBold | Light | Normal | SemiBold
export type FontWeightRamp = Record<FontWeights, number>

export interface FontWeightProps {
  /**
   * Use a looker-components FontWeights to set weight
   *  light, normal, semiBold, bold, extrabold,
   */
  fontWeight?: ResponsiveValue<FontWeights>
}
