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

import { MessageBar } from '@looker/components'
import * as headings from './Headings'
import { Blockquote } from './Blockquote'
import { Code } from './Code'
import { Hr } from './Hr'
import { Li } from './Li'
import { Link } from './Link'
import { Ol } from './Ol'
import { Paragraph } from './Paragraph'
import { Pre } from './Pre'
import { Ul } from './Ul'

export const MDXComponents = {
  ...headings,
  Code,
  MessageBar,
  a: Link,
  blockquote: Blockquote,
  hr: Hr,
  inlineCode: Code,
  li: Li,
  ol: Ol,
  p: Paragraph,
  pre: Pre,
  ul: Ul,
}
