/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import { useState, useLayoutEffect } from 'react'
import noop from 'lodash/noop'

export interface TextTheme {
  fontSize: number | string
  fontFamily: string
}

/*
 * get the physicial dimensions of a string of string content in a browser
 */
export const useMeasuredText = (text: string, theme: TextTheme) => {
  const { fontSize, fontFamily } = theme

  const [elementRect, setElementRect] = useState<DOMRect>({
    bottom: 0,
    height: 10,
    left: 0,
    right: 0,
    toJSON: noop,
    top: 0,
    width: 10,
    x: 0,
    y: 0,
  })

  useLayoutEffect(() => {
    const textWrapper = document.createElement('SPAN')
    const textNode = document.createTextNode(text)
    textWrapper.style.fontSize =
      typeof fontSize === 'number' ? `${fontSize}px` : fontSize
    textWrapper.style.fontFamily = fontFamily
    textWrapper.appendChild(textNode)
    document.body.appendChild(textWrapper)

    // allow measurement to be cancelled when component unmounts
    let componentIsMounted = true

    const req = requestAnimationFrame(() => {
      if (componentIsMounted) {
        const elementRect = textWrapper.getBoundingClientRect()
        setElementRect(elementRect)
        document.body.removeChild(textWrapper)
      }
    })
    return () => {
      // prevent asyncronous methods from updating state
      componentIsMounted = false
      cancelAnimationFrame(req)
      if (document.body.contains(textWrapper)) {
        document.body.removeChild(textWrapper)
      }
    }
  }, [text, fontFamily, fontSize])

  return elementRect
}
