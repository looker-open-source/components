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

import omit from 'lodash/omit'
import styled from 'styled-components'
import { CompatibleHTMLProps, reset } from '@looker/design-tokens'
import {
  border,
  BorderProps,
  height,
  HeightProps,
  width,
  WidthProps,
} from 'styled-system'
import {
  inputTextDefaults,
  inputTextDisabled,
  inputTextHover,
} from '../../../Inputs/InputText'

export interface SwatchProps
  extends BorderProps,
    WidthProps,
    HeightProps,
    CompatibleHTMLProps<HTMLDivElement> {
  /**
   * The background color to display on the swatch.
   */
  color?: string
}

export const Swatch = styled.div<SwatchProps>`
  ${reset}
  ${width}
  ${height}
  ${border}
  &:hover {
    ${inputTextHover}
  }
  ${(props) => (props.disabled ? inputTextDisabled : '')}
  background-color: ${(props) => props.color};
  margin-top: auto;
  flex-shrink: 0;

  ${(props) =>
    props.color === 'transparent'
      ? `position: relative;
      &:after {
        position: absolute;
        display: block;
        content: '';
        height: 1px;
        width: calc(100% + 12px);
        background: red;
        /* left: 50%; */
        top: 50%;
        margin-left: -6px;
        transform: rotate(-45deg);
      }`
      : ``}
`

Swatch.defaultProps = {
  ...omit(inputTextDefaults, 'fontSize'),
  color: 'transparent',
  width: inputTextDefaults.height,
}

/*

//  MIT License

//  Copyright (c) 2020 Looker Data Sciences, Inc.

//  Permission is hereby granted, free of charge, to any person obtaining a copy
//  of this software and associated documentation files (the "Software"), to deal
//  in the Software without restriction, including without limitation the rights
//  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//  copies of the Software, and to permit persons to whom the Software is
//  furnished to do so, subject to the following conditions:

//  The above copyright notice and this permission notice shall be included in all
//  copies or substantial portions of the Software.

//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//  SOFTWARE.

//  */

// import React, { forwardRef, ReactNode, Ref } from 'react'
// import omit from 'lodash/omit'
// import styled from 'styled-components'
// import { CompatibleHTMLProps, reset } from '@looker/design-tokens'
// import {
//   border,
//   BorderProps,
//   height,
//   HeightProps,
//   width,
//   WidthProps,
// } from 'styled-system'
// import {
//   inputTextDefaults,
//   inputTextDisabled,
//   inputTextHover,
// } from '../../../Inputs/InputText'

// export interface SwatchProps
//   extends BorderProps,
//     WidthProps,
//     HeightProps,
//     CompatibleHTMLProps<HTMLDivElement> {
//   /**
//    * The background color to display on the swatch.
//    */
//   color?: string
// }

// const ColorSwatch = styled.div<SwatchProps>`
//   ${reset}
//   ${width}
//   ${height}
//   ${border}

//   &:hover {
//     ${inputTextHover}
//   }

//   ${(props) => (props.disabled ? inputTextDisabled : '')}

//   background-color: ${(props) => props.color};
//   margin-top: auto;
//   flex-shrink: 0;
// `

// const EmptySwatch = styled(ColorSwatch)`
//   position: relative;

//   &:after {
//     position: absolute;
//     display: block;
//     content: '';
//     height: 1px;
//     width: calc(100% + 12px);
//     background: red;
//     /* left: 50%; */
//     top: 50%;
//     margin-left: -6px;
//     transform: rotate(-45deg);
//   }
// `
// Swatch.displayName = 'Swatch'

// export const Swatch = forwardRef(
//   (props: SwatchProps, ref: Ref<HTMLDivElement>) => {
//    const {color} = props

//   return color === 'transparent' ? (
//     <EmptySwatch ref={ref} />
//   ) : (
//     <ColorSwatch color={color} ref={ref} />
//   )
// }

// Swatch.defaultProps = {
//   ...omit(inputTextDefaults, 'fontSize'),
//   color: 'transparent',
//   width: inputTextDefaults.height,
// }
