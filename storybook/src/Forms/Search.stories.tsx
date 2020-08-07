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
import React from 'react'
import { InputSearch, SpaceVertical } from '@looker/components'

export const All = () => (
  <SpaceVertical align="start">
    <Basic />
    <Placeholder />
    <Value />
    <Summary />
    <DefaultValue />
    <NoIcon />
    <AutoResize />
  </SpaceVertical>
)

export default {
  component: All,
  title: 'Forms/Search',
}

export const Basic = () => <InputSearch />
export const Placeholder = () => <InputSearch placeholder="Type your search" />
export const Value = () => (
  <InputSearch placeholder="Type your search" value="Search term" />
)
export const Summary = () => (
  <InputSearch
    placeholder="Type your search"
    value="Search term"
    summary="5/10 results"
  />
)
export const DefaultValue = () => (
  <InputSearch placeholder="Type your search" defaultValue="Search term" />
)
export const NoIcon = () => (
  <InputSearch hideSearchIcon placeholder="Type your search" />
)
export const AutoResize = () => (
  <InputSearch autoResize placeholder="Resizes to fit value" maxWidth={250} />
)
