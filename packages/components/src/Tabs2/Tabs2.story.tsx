/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
import { Tabs2, Tab2 } from './'

export const Basic = () => (
  <Tabs2>
    <Tab2 id="cats" label="Cats">
      Here's awesome story about cats
    </Tab2>
    <Tab2 id="dogs" label="Dogs">
      Cats are way better than dogs. Go to other tab
    </Tab2>
    <Tab2 label="Fish">Are kinda smelly</Tab2>
    <Tab2 disabled label="Human">
      not available
    </Tab2>
  </Tabs2>
)

export const DefaultTab = () => (
  <Tabs2 defaultTabId="dogs">
    <Tab2 id="cats" label="Cats">
      Here's awesome story about cats
    </Tab2>
    <Tab2 id="dogs" label="Dogs">
      Cats are way better than dogs. Go to other tab
    </Tab2>
    <Tab2 label="Fish">Are kinda smelly</Tab2>
    <Tab2 disabled label="Human">
      not available
    </Tab2>
  </Tabs2>
)

export default {
  component: Tabs2,
  title: 'Tabs2',
}
