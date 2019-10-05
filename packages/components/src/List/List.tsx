import {
  CompatibleHTMLProps,
  reset,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from '@looker/design-tokens'
import React, { FC } from 'react'
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

export const List: FC<ListProps> = props => {
  const as =
    props.type === 'letter' || props.type === 'number' ? 'ol' : undefined
  return <ListStyle as={as} {...props} />
}

const ListStyle = styled.ul<ListProps>`
  ${reset}
  ${typography}

  list-style-type: none;
  ${props => !props.nomarker && typeVariant}

  ${space}
`
