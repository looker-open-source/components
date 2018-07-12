import * as React from 'react'
const classNames = require('classnames')
import * as styles from './CardMedia.scss'

export interface CardMediaProps {
  image: string
  title?: string
  className?: string | undefined
}

interface PropertyBag {
  [key: string]: any
}

/** Displays an image that reinforces the Card's content */
export const CardMedia: React.SFC<CardMediaProps> = ({
  className,
  image,
  ...args
}) => {
  const styleableProps: PropertyBag = {}

  const cardImage = { backgroundImage: `url(${image})` }

  return (
    <div
      className={classNames(styles.cardMedia, className, styleableProps)}
      style={cardImage}
      {...args}
    />
  )
}
