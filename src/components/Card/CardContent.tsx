import * as React from 'react'
const classNames = require('classnames')
// import * as styles from './CardContent.scss'
import { Block } from '../Block/Block'

export interface CardContentProps {
  className?: undefined
  pad?: 's' | 'm' | 'l' | 'xl'
}

interface PropertyBag {
  [key: string]: any
}

/** Ensures consistent spacing around the content within the `Card` component  */
export const CardContent: React.SFC<CardContentProps> = ({ className, pad, ...args }) => {

  const styleableProps: PropertyBag = {

  }

  // Use default padding if no pad is supplied
  const padAmount = pad ? pad : 'm'

  return (
    <Block p={padAmount} className={classNames(className, styleableProps)} {...args}>{args.children}</Block>
  )
}
