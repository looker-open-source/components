import { ResponsiveValue } from 'styled-system'

type Brand = 'brand'
type Code = 'code'

export type FontFamilies = Brand | Code

export type FontFamilyChoices = Record<FontFamilies, string>

export interface FontFamilyProps {
  fontFamily?: ResponsiveValue<FontFamilies>
}
