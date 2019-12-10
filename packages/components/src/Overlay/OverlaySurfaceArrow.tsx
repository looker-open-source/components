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

import {
  border,
  BorderProps,
  color,
  ColorProps,
  CompatibleHTMLProps,
} from '@looker/design-tokens'
import { PopperArrowProps } from 'react-popper'
import styled from 'styled-components'

interface OverlaySurfaceArrowProps
  extends BorderProps,
    ColorProps,
    Omit<CompatibleHTMLProps<HTMLDivElement>, 'style'>,
    PopperArrowProps {
  ['data-placement']: string
}

export const OverlaySurfaceArrow = styled.div.attrs(
  (props: OverlaySurfaceArrowProps) => ({
    'data-placement': props['data-placement'],
  })
)<OverlaySurfaceArrowProps>`
  position: absolute;

  &::before {
    content: '';
    display: block;
    margin: auto;
    width: 0.5rem;
    height: 0.5rem;

    ${color}
    ${border}
    /* only want border-right and border-bottom from styled-system's border */
    border-top: none;
    border-left: none;
    border-radius: 0;
  }

  &[data-placement*='top'] {
    bottom: 0.25rem;
    margin: 0 1rem;
    &::before {
      transform: rotate(45deg);
    }
  }

  &[data-placement*='right'] {
    left: 0.25rem;
    margin: 1rem 0;
    &::before {
      transform: rotate(135deg);
    }
  }

  &[data-placement*='bottom'] {
    top: 0.25rem;
    margin: 0 1rem;
    &::before {
      transform: rotate(225deg);
    }
  }

  &[data-placement*='left'] {
    right: 0.25rem;
    margin: 1rem 0;
    &::before {
      transform: rotate(315deg);
    }
  }
`
