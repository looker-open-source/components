/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.
 
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

import React, { FC, useState } from 'react'
import { Divider, InputSearch } from 'looker-lens'

export interface InputSearchElementProps {
  value?: string
  hideControls?: boolean
}

const InputSearchElement: FC<InputSearchElementProps> = ({
  value = '',
  hideControls,
}) => {
  const [keywords, setKeywords] = useState(value)
  const onChange = (e: any) => {
    setKeywords(e.currentTarget.value)
  }

  const summary =
    keywords.length > 0 ? `You typed ${keywords.length} characters` : ''

  return (
    <InputSearch
      hideControls={hideControls}
      onChange={onChange}
      placeholder="Type your search"
      summary={summary}
      value={keywords}
    />
  )
}

export const ExampleInputSearch = () => (
  <>
    <InputSearchElement />
    <Divider my="medium" />
    <InputSearchElement value="test search 2" />
    <Divider my="medium" />
    <InputSearchElement value="test search 3" hideControls />
  </>
)
