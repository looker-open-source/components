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

interface ProgressConstants {
  /**
   * Amount of the circle the arc takes up
   */
  arcSize: number
  /**
   * How much the start location of the arc should rotate each time
   */
  arcStartRotationInterval: number
  /**
   * Amount of time it takes to expand and contract arc
   */
  arcTime: number
  /**
   * Rotation position of the arcs that correspond to their fully contracted state
   */
  baseAngle: number
  /**
   * Amount of time for indicator to disappear
   */
  shrinkTime: number
  /**
   * Animation timing for CircularProgress
   */
  timingFunction: string
}

export const progressCircularConstants: ProgressConstants = {
  arcSize: 270,
  arcStartRotationInterval: 216,
  arcTime: 1333,
  baseAngle: 135,
  shrinkTime: 4,
  timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
}
