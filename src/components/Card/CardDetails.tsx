import * as React from 'react'
import classNames from 'classnames'
import { Heading } from '../Heading/Heading'
import * as styles from './CardDetails.scss'

export interface CardDetailsProps {
  title?: string,
  subtitle?: string,
  body?: string,
  metaData?: string,
  className?: undefined
}


type PropertyBag = {
  [key: string]: any
}

export const CardDetails: React.SFC<CardDetailsProps> = ({className, title, ...args}) => {

  const styleableProps: PropertyBag = {

  }

  const subtitle = args.subtitle?
    <div>
      <Heading level="3" size="6" weight="semi-bold">{args.subtitle}</Heading>
    </div>
    : ''

  return (
    <div className={classNames(className, styleableProps,)} {...args} >
      <div className={styles.heading}>
      <Heading level="2" size="4" weight="semi-bold">{title}</Heading>
      </div>
      {subtitle}
      {args.children}
    </div>
  )
}

export interface CardDetailsMetaDataProps {
  className?: undefined
}


export const CardDetailsMetaData: React.SFC<CardDetailsMetaDataProps> = ({className, ...args}) => {
  return(
    <div className={classNames(className)} {...args}>

    </div>
  )
}


