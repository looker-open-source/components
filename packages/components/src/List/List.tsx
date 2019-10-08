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
  type?: 'bullet' | 'number' | 'letter'
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
    number: {
      listStyleType: 'decimal',
      pl: 'medium',
    },
  },
})

export const List = styled.ul.attrs((props: ListProps) => ({
  as: ['letter', 'number'].includes(String(props.type)) ? 'ol' : undefined,
}))<ListProps>`
  ${reset}
  ${typography}

  ${props => (props.nomarker ? `list-style-type: none;` : typeVariant)}

  ${space}
`
