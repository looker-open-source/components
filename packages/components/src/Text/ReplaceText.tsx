/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import React, { FC, ReactNode } from 'react'
import isRegExp from 'lodash/isRegExp'
import escapeRegExp from 'lodash/escapeRegExp'
import isString from 'lodash/isString'
import flatten from 'lodash/flatten'

export type JSXReplaceFunction = (
  text: string,
  i: number,
  curCharStart: number
) => ReactNode

function replaceString(
  str: string,
  match: RegExp | string,
  replace: JSXReplaceFunction
): ReactNode | ReactNode[] {
  let curCharStart = 0
  let curCharLen = 0
  let re = match

  if (!isRegExp(re)) {
    re = new RegExp('(' + escapeRegExp(re) + ')', 'gi')
  }

  const stringArr = str.split(re)

  return stringArr.map((stringItem: string, i: number) => {
    if (i % 2 === 1) {
      curCharLen = stringItem.length
      curCharStart += stringArr[i - 1].length
      curCharStart += curCharLen
      return replace(stringItem, i, curCharStart)
    }
    return stringItem
  })
}

export interface ReplaceTextProps {
  match: RegExp | string
  replace: JSXReplaceFunction
}

/**
 * Replaces text
 */
export const ReplaceText: FC<ReplaceTextProps> = ({
  children,
  match,
  replace,
}) => {
  return (
    <>
      {flatten(
        React.Children.map(children, (child: ReactNode) => {
          return isString(child) ? replaceString(child, match, replace) : child
        })
      )}
    </>
  )
}
