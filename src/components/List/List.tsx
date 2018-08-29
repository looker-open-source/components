// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
// End Typescript component boilerplate
import { space } from 'styled-system'
import styled, { css } from '../../styled_components'
import { themeSpacing } from '../../themes/theme_spacing'
export interface ListProps {
  type?: ListTypes
  nomarker?: boolean
}

export enum ListTypes {
  Bullet = 'bullet',
  Number = 'number',
  Letter = 'letter',
}

/**
 * List are stacked groups of related content that can be useful in many contexts.
 */
const ListGenerator: React.SFC<ListProps> = ({ type, ...args }) => {
  const props = Object.assign({}, args)
  delete props.nomarker

  switch (type) {
    case ListTypes.Number:
    case ListTypes.Letter:
      return <ol {...props}>{props.children}</ol>
    case ListTypes.Bullet:
    default:
      return <ul {...props}>{props.children}</ul>
  }
}

function listStyleType(type: string | undefined) {
  switch (type) {
    case ListTypes.Bullet:
      return css`
        list-style-type: disc;
      `
    case ListTypes.Number:
      return css`
        list-style-type: decimal;
      `
    case ListTypes.Letter:
      return css`
        list-style-type: upper-alpha;
      `
    default:
      return css`
        list-style-type: none;
      `
  }
}

export const List = styled<ListProps>(ListGenerator)`
  margin: 0;
  padding: 0 0 0
    ${props => (props.nomarker || !props.type ? 0 : themeSpacing.m)};
  ${props =>
    props.nomarker ? listStyleType(undefined) : listStyleType(props.type)};
  ${space};
`
