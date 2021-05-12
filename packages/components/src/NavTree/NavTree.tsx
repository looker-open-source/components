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

import styled from 'styled-components'
import { Tree } from '../Tree'
import { navStyles } from '../NavList/NavList'

/**
 * `NavTree` is a variation of `List`
 *   - `TreeItem`  border-radius circular on the right side
 *   - `TreeItem` selected or "active"
 *     - text color is `keyColor`
 *     - background color is `keySubtle`
 *
 *
 * @status: EXPERIMENTAL
 * This component is in active development and may see significant change in
 * it's behavior, interface & presentation. It may also be deprecated without
 * SemVer major version change. _It is not recommended_ to use this component
 * at this time.
 *
 * KNOWN ISSUES
 *
 * `Tree` w/ selected does not get text-color properly specified because
 * `[aria-selected='true'] is not specified properly
 *
 */

export const NavTree = styled(Tree).attrs(({ color = 'key' }) => ({ color }))`
  ${navStyles}
`
