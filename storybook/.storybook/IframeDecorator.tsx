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

import React, { useEffect } from 'react'
import { useCallbackRef, useMeasuredElement } from '@looker/components'

const isDev = process.env.NODE_ENV === 'development'

const postHeightMessage = (height: number) => {
  // first parameter is the message to be passed
  // second paramter is the domain of the parent
  // in this case "*" has been used for demo sake (denoting no preference)
  // in production always pass the target domain for which the message is intended
  const { protocol, hostname } = window.location
  const targetOrigin = `${protocol}//${hostname}${isDev ? ':8000' : ''}`
  window.top.postMessage({ key: 'height', height }, targetOrigin)
}

export const IframeDecorator = (storyFn: any) => {
  const [element, ref] = useCallbackRef()
  const { height } = useCallbackRef(element)

  useEffect(() => {
    postHeightMessage(document.body.scrollHeight)
  }, [height])

  useEffect(() => {
    const loading = document.getElementById('loading')
    if (loading) loading.remove()
  }, [])

  return (
    <div className="foobarLALALALA" ref={ref}>
      {storyFn()}
    </div>
  )
}
