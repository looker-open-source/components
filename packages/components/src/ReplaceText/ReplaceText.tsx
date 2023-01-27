/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ReactNode } from 'react'
import React, { Children, Fragment } from 'react'
import escapeRegExp from 'lodash/escapeRegExp'
import { Span } from '../Text'

export type ReplaceProps = {
  /**
   * The text that will be highlighted
   */
  children: string
}

export type ReplaceComponent = (props: ReplaceProps) => ReactNode

const DefaultReplace: ReplaceComponent = (props: ReplaceProps) => (
  <Span fontWeight="semiBold" textDecoration="underline" {...props} />
)

// Wraps matched substrings in the replace component
const ReplaceString = ({
  children,
  match,
  replace = DefaultReplace,
}: Omit<ReplaceTextProps, 'children'> & ReplaceProps) => {
  // Convert match to capturing, case-insensitive, global RegExp
  const matchRegExp = new RegExp(`(${escapeRegExp(match)})`, 'gi')
  const stringArr = children.split(matchRegExp)

  // With capturing RegExp + split, captured elements are included in array
  return (
    <>
      {stringArr.map((stringItem: string, index: number) => (
        <Fragment key={index}>
          {index % 2 === 1
            ? replace({ children: stringItem })
            : stringItem || null}
        </Fragment>
      ))}
    </>
  )
}

export interface ReplaceTextProps {
  /**
   * Any non-text children will be passed along as-is
   */
  children?: ReactNode | ReactNode[]
  /**
   * A string to search for in the children (case-insensitive, global)
   */
  match?: string
  /**
   * A component to wrap the matched text. Defaults to a span with semi-bold/underline style.
   */
  replace?: ReplaceComponent
}

export const ReplaceText = ({ children, ...rest }: ReplaceTextProps) => {
  if (!rest.match) return <>{children}</>

  return (
    <>
      {Children.map(children, (child: ReactNode) =>
        typeof child === 'string' ? (
          <ReplaceString {...rest}>{child}</ReplaceString>
        ) : (
          child
        )
      )}
    </>
  )
}
