import * as React from 'react'
const classNames = require('classnames')
import * as styles from './Link.scss'

export interface LinkProps {
  href: string,
  id?: string,
  external?: boolean,
  className?: string | undefined
}

interface PropertyBag {
  [key: string]: any
}

/**
 * Links navigate to other pages or additional information.
 */
export const Link: React.SFC<LinkProps> = ({ className, href, id, external,...args }) => {
  const styleableProps: PropertyBag = {
    [styles.cardLink]: className === 'card-link'
  }

  return (
    <a
      className={classNames(styles.lensLink, className, styleableProps)}
      href={href}
      target={external ? '_blank' : undefined}
      id={id}
      {...args}
    >
      {args.children}
    </a>
  )
}
