/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { css } from 'styled-components'

/**
 * This utility function produces a shadow on the outside edge of the DOM element to which it is assigned
 * @param placement which side to place the shadow on
 * @param depth size of the shadow in pixels
 */
export const edgeShadow = (placement: 'left' | 'right' = 'left', depth = 4) => {
  let pseudo = ':after'
  let relativeTo = 'right'
  let shadowReverse = ''

  if (placement === 'right') {
    pseudo = ':before'
    relativeTo = 'left'
    shadowReverse = '-'
  }

  const shadow = `${`${shadowReverse}${depth}px`} 0 ${depth}px -${depth}px rgba( 0, 0, 0, 0.25) inset`

  /**
   * NOTE: In Safari for reasons we can't entirely explain the `::after`` pseudo element
   * is obscured by a black area unless it's moved at least 11px
   **/
  const position = depth + 7

  return css`
    &${pseudo} {
      box-shadow: ${shadow};
      content: ' ';
      height: 100%;
      position: absolute;
      ${`${relativeTo}: -${position}px;`}
      top: 0;
      width: ${position}px;
    }
  `
}
