import React, { FC } from 'react'
import styled from 'styled-components'
import { Link, ListItem } from '@looker/components'

const Resource: FC<{ url: string }> = ({ children, url }) => (
  <Link href={url} target="_blank" rel="noopener noreferrer">
    <Style>{children}</Style>
  </Link>
)

const Style = styled(ListItem).attrs({
  fontSize: 'small',
  py: 'xsmall',
})`
  align-items: center;
  color: ${props => props.theme.colors.palette.charcoal500};
  display: flex;

  svg {
    margin-right: ${props => props.theme.space.xsmall};
    width: 1.5rem;
    transition: ${props =>
      `transform ${props.theme.transitions.durationModerate} ${props.theme.easings.easeOut}`};
  }

  &:hover {
    color: ${props => props.theme.colors.palette.charcoal600};
    text-decoration: none;

    svg {
      transform: scale(1.2);
    }
  }
`

export default Resource
