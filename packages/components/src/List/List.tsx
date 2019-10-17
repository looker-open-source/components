import {
  CompatibleHTMLProps,
  reset,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from '@looker/design-tokens'
import styled from 'styled-components'
import { variant } from 'styled-system'

export interface ListProps
  extends CompatibleHTMLProps<HTMLUListElement | HTMLOListElement>,
    TypographyProps,
    SpaceProps {
  /**
   * Specify the type of marker to place next to list items.
   *
   * @default 'none'
   */
  type?: 'none' | 'bullet' | 'number' | 'letter'
  nomarker?: boolean
}

const typeVariant = variant({
  prop: 'type',
  variants: {
    bullet: {
      listStyleType: 'disc',
      pl: 'medium',
    },
    letter: {
      listStyleType: 'upper-alpha',
      pl: 'medium',
    },
    none: {
      listStyleType: 'none',
    },
    number: {
      listStyleType: 'decimal',
      pl: 'medium',
    },
  },
})

export const List = styled.ul.attrs((props: ListProps) => ({
  as: ['letter', 'number'].includes(String(props.type)) ? 'ol' : undefined,
  type: props.nomarker ? 'none' : props.type,
}))<ListProps>`
  ${reset}
  ${typography}
  ${typeVariant}
  ${space}
`

List.defaultProps = { type: 'none' }
