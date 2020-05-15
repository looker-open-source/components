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

import {
  Box,
  ButtonGroup,
  ButtonItem,
  ButtonToggle,
  Divider,
} from '@looker/components'
import React from 'react'

export function ButtonSetDemo() {
  return (
    <Box m="xlarge" width={400} border="1px solid">
      <ButtonGroup>
        <ButtonItem value="CA" selected>
          California
        </ButtonItem>
        <ButtonItem value="AK">Alaska</ButtonItem>
        <ButtonItem value="UT">Utah</ButtonItem>
      </ButtonGroup>
      Inline text
      <Divider />
      <ButtonToggle>
        <ButtonItem selected>Ruby</ButtonItem>
        <ButtonItem>TypeScript</ButtonItem>
        <ButtonItem>Python</ButtonItem>
      </ButtonToggle>
      Inline text
      <Divider />
      <ButtonGroup>
        <ButtonItem value="CA" selected>
          California
        </ButtonItem>
        <ButtonItem value="AK">Alaska</ButtonItem>
        <ButtonItem value="UT">Utah</ButtonItem>
        <ButtonItem value="CO">Colorado</ButtonItem>
        <ButtonItem value="MS">Missouri</ButtonItem>
        <ButtonItem value="MI">Mississippi</ButtonItem>
        <ButtonItem value="MA">Massachusets</ButtonItem>
        <ButtonItem value="VT">Vermont</ButtonItem>
        <ButtonItem value="NH">New Hampshire</ButtonItem>
        <ButtonItem value="DE">Delaware</ButtonItem>
        <ButtonItem value="ME">Maine</ButtonItem>
        <ButtonItem value="WA">Washington</ButtonItem>
        <ButtonItem value="OR">Oregon</ButtonItem>
      </ButtonGroup>
      Inline text
      <Divider />
      <ButtonToggle>
        <ButtonItem selected>Ruby</ButtonItem>
        <ButtonItem>TypeScript</ButtonItem>
        <ButtonItem>Python</ButtonItem>
        <ButtonItem>Java</ButtonItem>
        <ButtonItem>Kotlin</ButtonItem>
        <ButtonItem>Go</ButtonItem>
        <ButtonItem>C++</ButtonItem>
        <ButtonItem>Clojure</ButtonItem>
        <ButtonItem>Perl</ButtonItem>
      </ButtonToggle>
      Inline text
    </Box>
  )
}
