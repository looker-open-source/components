import * as React from 'react'
import classNames from 'classnames'
import * as styles from './Link.scss'

export interface LinkProps {
  // Semantic mapping for a text elements
  href: string,
  id?: string,
  external?: boolean,
  className?: string | undefined
}

type PropertyBag = {
  [key: string]: any
}

/**
Link
*/

export const Link: React.SFC<LinkProps> = ({className, href, ...args}) => {
  const styleableProps: PropertyBag = {
    [styles.cardLink]: className == 'card-link',
  }

  return (
    <a  className={classNames(styles.lensLink, className, styleableProps)}
        href={href}
        target={args.external ? '_blank' : undefined}
        id={args.id ? args.id : undefined}
        {...args}>
      {args.children}
    </a>
  )
}
