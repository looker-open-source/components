import {
  reset,
  CompatibleHTMLProps,
  border,
  BorderProps,
  typography,
  TypographyProps,
} from 'looker-design-tokens'
import { css } from 'styled-components'

export interface TableSectionProps
  extends BorderProps,
    TypographyProps,
    CompatibleHTMLProps<HTMLTableSectionElement> {}

export const tableSectionCSS = css`
  ${reset}
  ${border}
  ${typography}
`

export const tableSectionDefaults: TableSectionProps = { textAlign: 'left' }
