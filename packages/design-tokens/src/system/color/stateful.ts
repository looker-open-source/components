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

export type StatefulColor = 'key' | 'critical' | 'neutral'

export interface StatefulColorChoices {
  subtle: string
  accent: string
  border: string
  main: string
  interactive: string
  pressed: string
  text: string
  textAlt: string
}

export interface StatefulColors
  extends CriticalStatefulColors,
    KeyStatefulColors,
    NeutralStatefulColors {}

interface CriticalStatefulColors {
  criticalSubtle: string
  criticalAccent: string
  criticalBorder: string
  criticalInteractive: string
  criticalPressed: string
  criticalText: string
  criticalTextAlt: string
}

interface NeutralStatefulColors {
  neutralSubtle: string
  neutralAccent: string
  neutralBorder: string
  neutralInteractive: string
  neutralPressed: string
  neutralText: string
  neutralTextAlt: string
}

interface KeyStatefulColors {
  /**
   * TBD
   * Used for TBD
   * @default `purple000`
   */
  keySubtle: string
  /**
   * TBD
   * Used for TBD
   * @default `purple100`
   */
  keyAccent: string
  /**
   * TBD
   * Used for border on ...
   * @default `purple300`
   */
  keyBorder: string
  /**
   * Interaction state color - often `:hover` & `:focus`
   * Used for TBD
   * @default `purple500`
   */
  keyInteractive: string
  /**
   * Pressed state color - often `:active`
   * Used to TBD
   * @default `purple600`
   */
  keyPressed: string
  /**
   * TBD
   * Used for text on top of `key` color
   * @default `white`
   */
  keyText: string
  /**
   * TBD
   * TBD too
   * @default `purple400`
   */
  keyTextAlt: string
}
