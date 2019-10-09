import { MenuItem } from '@looker/components'
import React from 'react'
import { Link } from 'gatsby'
import { MenuItem as IMenuItem, useDocs, useCurrentDoc, Entry } from 'docz'
import { get } from 'lodash/fp'

interface NavLinkProps {
  item: IMenuItem
}

const getSubHeadings = (docs: Entry[], route?: string) => {
  const doc = docs.find(doc => doc.route === route)
  const headings = get('headings', doc)
  return headings ? headings.filter(heading => heading.depth === 2) : []
}

const getCurrentHash = () => {
  if (typeof window === 'undefined') {
    return ''
  }
  return window.location ? window.location.hash : ''
}

export const NavLink: React.FC<NavLinkProps> = ({ item }) => {
  const to = item.route as string
  const current = useCurrentDoc()
  const isCurrent = item.route === current.route
  const docs = useDocs()
  const headings = docs && getSubHeadings(docs, item.route)
  const showHeadings = isCurrent && headings && headings.length > 0
  const currentHash = getCurrentHash()
  return (
    <React.Fragment>
      <Link to={to}>
        <MenuItem itemRole="button" current={isCurrent}>
          {item.name}
        </MenuItem>
      </Link>
      {showHeadings &&
        headings &&
        headings.map(heading => (
          <Link
            key={heading.slug}
            to={`${to}#${heading.slug}`}
            style={{ display: 'block' }}
            className={currentHash === `#${heading.slug}` ? 'active' : ''}
          >
            {heading.value}
          </Link>
        ))}
    </React.Fragment>
  )
}
