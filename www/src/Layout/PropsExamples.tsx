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

import { Flex, Spinner } from '@looker/components'
import { height, HeightProps, omitStyledProps } from '@looker/design-tokens'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const isDev = process.env.NODE_ENV === 'development'

const storybookLink = (component: string) => {
  const page = `iframe.html?id=${component.toLowerCase()}-&viewMode=docs&parent=gatsby`
  return isDev
    ? `//${window.location.hostname}:3333/${page}`
    : `/storybook/${page}`
}
export interface PropsExamplesProps {
  component: string
}

export const PropsExamples = ({ component }: PropsExamplesProps) => {
  const [height, setHeight] = useState('0')

  useEffect(() => {
    // Receive the height message from the storybook docs iframe
    const handleMessage = (e: { data: { key: string; height: number } }) => {
      if (e.data.key === 'height') {
        setHeight(`${e.data.height}px`)
      }
    }
    window.addEventListener('message', handleMessage, false)
    return () => {
      window.removeEventListener('message', handleMessage, false)
    }
  }, [])

  return (
    <>
      <Iframe height={height} src={storybookLink(component)} />
      {height === '0' && (
        <Flex alignItems="center" justifyContent="center" padding="xlarge">
          <Spinner aria-label="Loading" />
        </Flex>
      )}
    </>
  )
}

const Iframe = styled((props: HeightProps) => (
  <iframe {...omitStyledProps(props)} />
))`
  ${height}
  border: none;
  width: 100%;
`
