import { ResponsiveValue } from 'styled-system'

type Brand = 'brand'
type Code = 'code'

export type FontFamilies = Brand | Code

export type FontFamilyChoices = Record<FontFamilies, string>

export const fontFamilies: FontFamilyChoices = {
  brand: `'Open Sans', Helvetica, Arial, sans-serif`,
  code: `'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace`,
}

export interface FontFamilyProps {
  fontFamily?: ResponsiveValue<FontFamilies>
}
