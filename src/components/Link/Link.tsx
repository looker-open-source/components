import * as React from 'react'
import classNames from 'classnames'
import * as styles from './Link.scss'

export interface LinkProps {
  href: string,
  id?: string,
  external?: boolean,
  className?: string | undefined
}

type PropertyBag = {
  [key: string]: any
}

/**

*/

export const Link: React.SFC<LinkProps> = ({className, href, id, external,...args}) => {
  const styleableProps: PropertyBag = {
    [styles.cardLink]: className == 'card-link',
  }

  return (
    <a  className={classNames(styles.lensLink, className, styleableProps)}
        href={href}
        target={external ? '_blank' : undefined}
        id={id}
        {...args}>
      {args.children}
    </a>
  )
}
